import type { BattleState, GameCharacter, Enemy, BattlePhase } from "../types/game.types.ts";
import { SkillEngine } from "./skill.engine.ts";

export class BattleEngine {
  private state: BattleState;

  constructor(party: [GameCharacter, GameCharacter, GameCharacter], enemy: Enemy) {
    this.state = {
      party,
      enemy,
      synergy: 0,
      activeTurnIndex: 0,
      log: [`Un incontro selvaggio! Un ${enemy.name} appare!`],
      phase: "transition",
      quizMultiplier: 1,
      atb: [
        { characterId: "p0", progress: 0 },
        { characterId: "p1", progress: 0 },
        { characterId: "p2", progress: 0 },
        { characterId: "enemy", progress: 0 }
      ]
    };
    // Map IDs to indices for internal use if needed, but let's use fixed IDs for now: p0, p1, p2, enemy
  }

  getState(): BattleState {
    return { ...this.state };
  }

  async playerAttack() {
    if (this.state.phase !== "player_turn") return;

    const activeChar = this.state.party[this.state.activeTurnIndex];
    if (!activeChar.isAlive) return;

    const damage = this.calculateDamage(activeChar, this.state.enemy);
    this.state.enemy.stats.hp = Math.max(0, this.state.enemy.stats.hp - damage);
    this.state.log.push(`${activeChar.name} attacca ${this.state.enemy.name} per ${damage} danni!`);

    this.resetATB("p" + this.state.activeTurnIndex);
    this.checkBattleEnd();
  }

  async playerSkill(skillId: string) {
    if (this.state.phase !== "player_turn") return;

    const activeChar = this.state.party[this.state.activeTurnIndex];
    const result = SkillEngine.executeSkill(skillId, activeChar, this.state.enemy, this.state.party);
    
    this.state.log.push(result.log);
    if (!result.success) return;
    
    // Apply state changes from result if any
    if (result.synergyGain) {
        this.state.synergy = Math.min(100, this.state.synergy + result.synergyGain);
    }

    this.resetATB("p" + this.state.activeTurnIndex);
    this.checkBattleEnd();
  }

  private calculateDamage(attacker: GameCharacter, target: GameCharacter): number {
    // Danno Base (D) = (ATK / DEF) * 10
    const baseDamage = (attacker.stats.atk / target.stats.def) * 10;
    
    // Type advantage placeholder
    let multiplier = 1;
    if (this.hasAdvantage(attacker.characterClass, target.characterClass)) {
        multiplier = 1.5;
        this.state.log.push("È superefficace!");
    } else if (this.hasDisadvantage(attacker.characterClass, target.characterClass)) {
        multiplier = 0.75;
        this.state.log.push("Non è molto efficace...");
    }

    return Math.round(baseDamage * multiplier * this.state.quizMultiplier * (0.9 + Math.random() * 0.2));
  }

  private hasAdvantage(attackerClass: string, targetClass: string): boolean {
    if (attackerClass === "Mysterian" && targetClass === "Ethereal") return true;
    if (attackerClass === "Ethereal" && targetClass === "Striker") return true;
    if (attackerClass === "Striker" && targetClass === "Mysterian") return true;
    return false;
  }

  private hasDisadvantage(attackerClass: string, targetClass: string): boolean {
    if (attackerClass === "Ethereal" && targetClass === "Mysterian") return true;
    if (attackerClass === "Striker" && targetClass === "Ethereal") return true;
    if (attackerClass === "Mysterian" && targetClass === "Striker") return true;
    return false;
  }

  private nextTurn() {
    this.state.activeTurnIndex = (this.state.activeTurnIndex + 1) % 3;
    
    // If next character is fainted, skip
    if (!this.state.party[this.state.activeTurnIndex].isAlive) {
        this.nextTurn();
        return;
    }

    // Logic to switch to enemy turn after party finishes their turns (or based on speed)
    // For simplicity, let's say every 3 player turns, 1 enemy turn.
    if (this.state.activeTurnIndex === 0) {
        this.enemyTurn();
    }
  }

  private async enemyTurn() {
    this.state.phase = "enemy_turn";
    this.state.log.push(`Turno di ${this.state.enemy.name}...`);
    
    // Pick random target
    const targets = this.state.party.filter(p => p.isAlive);
    const target = targets[Math.floor(Math.random() * targets.length)];
    
    const damage = this.calculateDamage(this.state.enemy, target);
    target.stats.hp = Math.max(0, target.stats.hp - damage);
    if (target.stats.hp === 0) {
        target.isAlive = false;
        this.state.log.push(`${target.name} è esausto!`);
    }

    this.state.log.push(`${this.state.enemy.name} colpisce ${target.name} per ${damage} danni!`);

    this.checkBattleEnd();
    if (this.state.phase === "enemy_turn") {
        this.state.phase = "player_turn";
    }
  }

  tick(onUpdate?: (state: BattleState) => void) {
    if (this.state.phase !== "transition") return;

    // Tick party
    this.state.party.forEach((char, i) => {
        if (!char.isAlive) return;
        const atb = this.state.atb.find(a => a.characterId === "p" + i);
        if (atb) {
            atb.progress += char.stats.spd / 100; // Slowed down slightly for better feel
            if (atb.progress >= 100) {
                this.state.phase = "player_turn";
                this.state.activeTurnIndex = i;
                atb.progress = 100;
            }
        }
    });

    if (this.state.phase !== "transition") {
        if (onUpdate) onUpdate(this.getState());
        return;
    }

    // Tick enemy
    const enemyAtb = this.state.atb.find(a => a.characterId === "enemy");
    if (enemyAtb) {
        enemyAtb.progress += this.state.enemy.stats.spd / 100;
        if (enemyAtb.progress >= 100) {
            enemyAtb.progress = 100;
            this.enemyTurn();
        }
    }

    if (onUpdate) onUpdate(this.getState());
  }

  private resetATB(id: string) {
    const atb = this.state.atb.find(a => a.characterId === id);
    if (atb) atb.progress = 0;
    if (this.state.phase !== "victory" && this.state.phase !== "defeat") {
        this.state.phase = "transition";
    }
    this.state.quizMultiplier = 1.0; // Reset quiz multiplier after action
  }

  private checkBattleEnd() {
    if (this.state.enemy.stats.hp <= 0) {
        this.state.phase = "victory";
        this.state.log.push(`Vittoria! ${this.state.enemy.name} è stato sconfitto.`);
    } else if (this.state.party.every(p => !p.isAlive)) {
        this.state.phase = "defeat";
        this.state.log.push(`Sconfitta... Il nexus è perduto.`);
    }
  }

  setPhase(phase: BattlePhase) {
    this.state.phase = phase;
  }

  setQuizResult(correct: boolean) {
    if (correct) {
        this.state.quizMultiplier = 2.0;
        this.state.synergy = Math.min(100, this.state.synergy + 25);
        this.state.log.push("✨ Risposta Corretta! Prossimo attacco raddoppiato!");
    } else {
        this.state.quizMultiplier = 0.5; // Debuff difesa/attacco (ho scelto 0.5 per semplicità invece di salto turno se vuoi)
        // Se vuoi il salto turno: 
        // this.state.quizMultiplier = 0;
        this.state.log.push("❌ Risposta Errata! Sei vulnerabile!");
        this.nextTurn();
    }
  }
}
