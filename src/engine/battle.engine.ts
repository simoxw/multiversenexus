import type { BattleState, GameCharacter, Enemy, Move, BattlePhase } from "../types/game.types.ts";

export class BattleEngine {
  private state: BattleState;

  constructor(party: [GameCharacter, GameCharacter, GameCharacter], enemy: Enemy) {
    this.state = {
      party,
      enemy,
      synergy: 0,
      activeTurnIndex: 0,
      log: [`Un incontro selvaggio! Un ${enemy.name} appare!`],
      phase: "player_turn",
      quizMultiplier: 1,
      pendingMove: null
    };
  }

  getState(): BattleState {
    return { ...this.state };
  }

  async executeMove(move: Move) {
    if (this.state.phase !== "player_turn") return;

    const activeChar = this.state.party[this.state.activeTurnIndex];
    if (!activeChar.isAlive) return;

    if (activeChar.resource.current < move.mpCost) {
      this.state.log.push(`⚠️ ${activeChar.name} non ha abbastanza ${activeChar.resource.type}!`);
      return;
    }

    if (move.requiresQuiz) {
      this.state.pendingMove = move;
      this.state.phase = "quiz";
      this.state.log.push(`${activeChar.name} si prepara per ${move.emoji} ${move.name}...`);
      return;
    }

    this.applyMove(activeChar, move);
    this.checkBattleEnd();
    
    // Switch to transition IMMEDIATELY to disable buttons
    if (this.state.phase === "player_turn") {
      this.state.phase = "transition";
    }

    setTimeout(() => {
      this.nextTurn();
    }, 1500); // Give enough time for HP animation + reading log
  }

  private applyMove(attacker: GameCharacter, move: Move) {
    attacker.resource.current -= move.mpCost;
    this.state.log.push(`🗨️ ${attacker.name}: "${move.quote}"`);
    this.state.log.push(`${attacker.name} usa ${move.emoji} ${move.name}!`);

    // Damage logic
    if (move.baseDamageMultiplier !== null) {
      const damage = this.calculateDamage(attacker, this.state.enemy, move.baseDamageMultiplier);
      this.state.enemy.stats.hp = Math.max(0, this.state.enemy.stats.hp - damage);
      this.state.log.push(`${this.state.enemy.name} subisce ${damage} danni!`);
    }

    // Heals logic
    if (move.healAmount !== null && move.healTarget) {
      const baseHeal = Math.round(move.healAmount * (attacker.stats.atk / 100) * this.state.quizMultiplier);
      if (move.healTarget === "self") {
        this.applyHeal(attacker, baseHeal);
      } else if (move.healTarget === "party") {
        this.state.party.forEach(p => p && p.isAlive && this.applyHeal(p, baseHeal));
      } else if (move.healTarget === "single") {
        const targets = this.state.party.filter(p => p && p.isAlive).sort((a,b) => (a!.stats.hp/a!.stats.maxHp) - (b!.stats.hp/b!.stats.maxHp)) as GameCharacter[];
        if (targets[0]) this.applyHeal(targets[0], baseHeal);
      }
    }

    // Effect logic
    if (move.effect && move.effectTarget) {
      const duration = move.effectDuration;
      if (move.effectTarget === "enemy") {
        this.applyEffect(this.state.enemy, move.effect, duration);
      } else if (move.effectTarget === "self") {
        this.applyEffect(attacker, move.effect, duration);
      } else if (move.effectTarget === "party") {
        this.state.party.forEach(p => p && p.isAlive && this.applyEffect(p, move.effect!, duration));
      } else if (move.effectTarget === "single") {
        const targets = this.state.party.filter(p => p && p.isAlive).sort((a,b) => (a!.stats.hp/a!.stats.maxHp) - (b!.stats.hp/b!.stats.maxHp)) as GameCharacter[];
        if (targets[0]) this.applyEffect(targets[0], move.effect!, duration);
      }
    }
  }

  private applyHeal(target: GameCharacter, amount: number) {
    const actual = Math.min(target.stats.maxHp - target.stats.hp, amount);
    target.stats.hp += actual;
    this.state.log.push(`${target.name} recupera ${actual} HP!`);
  }

  private applyEffect(target: GameCharacter, effect: any, duration: number) {
    target.activeEffects.push({ effect, turnsLeft: duration });
    this.state.log.push(`✨ ${target.name} è sotto l'effetto ${effect} per ${duration} turni!`);
  }

  private calculateDamage(attacker: GameCharacter, target: GameCharacter, multiplier: number): number {
    const baseDamage = (attacker.stats.atk * multiplier) * (attacker.stats.atk / (target.stats.def || 1));
    
    let classBonus = 1.0;
    if (this.hasAdvantage(attacker.characterClass, target.characterClass)) classBonus = 1.5;
    else if (this.hasDisadvantage(attacker.characterClass, target.characterClass)) classBonus = 0.75;

    const random = 0.9 + Math.random() * 0.2;
    return Math.round(baseDamage * classBonus * this.state.quizMultiplier * random);
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
    if (this.state.phase !== "transition") return;
    
    let activeChar = this.state.party[this.state.activeTurnIndex];
    
    // Safety check for null slots
    if (!activeChar) {
        this.state.activeTurnIndex = (this.state.activeTurnIndex + 1) % 3;
        const anyAlive = this.state.party.some(p => p && p.isAlive);
        if (anyAlive) {
            this.nextTurn();
        } else {
            this.state.phase = "defeat";
        }
        return;
    }

    this.updateEffects(activeChar);

    this.state.phase = "enemy_turn";
    setTimeout(() => this.enemyTurn(), 1000);
  }

  private updateEffects(target: GameCharacter) {
    target.activeEffects = target.activeEffects.filter(e => {
        e.turnsLeft--;
        if (e.turnsLeft <= 0) {
            this.state.log.push(`⏳ L'effetto ${e.effect} su ${target.name} è svanito.`);
            return false;
        }
        return true;
    });
  }

  private async enemyTurn() {
    if (this.state.phase !== "enemy_turn") return;
    
    this.updateEffects(this.state.enemy);

    const targets = this.state.party.filter(p => p && p.isAlive) as GameCharacter[];
    if (targets.length === 0) return;
    
    const target = targets[Math.floor(Math.random() * targets.length)];
    const damage = this.calculateDamage(this.state.enemy, target, 0.8);
    target.stats.hp = Math.max(0, target.stats.hp - damage);
    
    this.state.log.push(`👹 ${this.state.enemy.name} attacca ${target.name} per ${damage} danni!`);
    
    if (target.stats.hp === 0) {
        target.isAlive = false;
        this.state.log.push(`💀 ${target.name} è fuori combattimento!`);
    }

    this.checkBattleEnd();
    
    setTimeout(() => {
      if (this.state.phase === "enemy_turn") {
        this.state.phase = "player_turn";
        this.state.activeTurnIndex = (this.state.activeTurnIndex + 1) % 3;
        while (this.state.party[this.state.activeTurnIndex] && !this.state.party[this.state.activeTurnIndex]!.isAlive && this.state.party.some(p => p?.isAlive)) {
            this.state.activeTurnIndex = (this.state.activeTurnIndex + 1) % 3;
        }
      }
    }, 800);
  }

  private checkBattleEnd() {
    if (this.state.enemy.stats.hp <= 0) {
        this.state.phase = "victory";
        this.state.log.push(`🏆 Vittoria! ${this.state.enemy.name} è stato sconfitto!`);
    } else if (this.state.party.every(p => !p || !p.isAlive)) {
        this.state.phase = "defeat";
        this.state.log.push(`🌑 Sconfitta... Il nexus è caduto nell'oscurità.`);
    }
  }

  setPhase(phase: BattlePhase) {
    this.state.phase = phase;
  }

  setQuizResult(correct: boolean) {
    if (this.state.phase !== "quiz" || !this.state.pendingMove) return;

    const move = this.state.pendingMove;
    const attacker = this.state.party[this.state.activeTurnIndex];
    this.state.pendingMove = null;

    if (correct) {
        this.state.quizMultiplier = 2.0;
        this.state.synergy = Math.min(100, this.state.synergy + 20);
        this.state.log.push("✨ LORE BREAK! Mossa potenziata al massimo!");
        this.applyMove(attacker, move);
    } else {
        this.state.quizMultiplier = 0.5;
        this.state.log.push("❌ Lore Fallimentare... La mossa è molto debole.");
        this.applyMove(attacker, move);
    }

    this.state.quizMultiplier = 1.0;
    this.checkBattleEnd();
    
    // Change phase IMMEDIATELY to avoid re-triggering quiz modal in loop
    if (this.state.phase === "quiz") {
      this.state.phase = "transition";
    }

    setTimeout(() => {
      if (this.state.phase === "transition") {
        this.nextTurn();
      }
    }, 1000);
  }
}
