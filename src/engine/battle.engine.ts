import type { BattleState, GameCharacter, Enemy, Move, BattlePhase } from "../types/game.types.ts";
import { TurnManager } from "./turn-manager.ts";
import type { TurnEntity } from "./turn-manager.ts";

export class BattleEngine {
  private state: BattleState;
  private turnManager: TurnManager;
  private currentActor: TurnEntity | null = null;

  constructor(party: [GameCharacter, GameCharacter, GameCharacter], enemy: Enemy, bgClass: string = 'bg-style-1') {
    this.state = {
      party,
      enemy,
      synergy: 0,
      activeTurnIndex: null,
      log: [`Un incontro selvaggio! Un ${enemy.name} appare!`],
      phase: "transition",
      quizMultiplier: 1,
      pendingMove: null,
      backgroundId: 1,
      bgClass,
      damagePopups: []
    };

    this.turnManager = new TurnManager(this.state.party, this.state.enemy);
    this.moveToNextTurn(true);
  }

  getState(): BattleState {
    // Returns direct reference so callers (handleVictory, updateBars, etc.)
    // can see live mutations (log.push, hp changes) without a stale copy.
    return this.state;
  }

  private setActiveEntity(entity: TurnEntity) {
    this.currentActor = entity;
    if (entity === this.state.enemy) {
      this.state.activeTurnIndex = null;
      this.state.phase = "enemy_turn";
    } else {
      const idx = this.state.party.findIndex(p => p?.id === entity.id);
      this.state.activeTurnIndex = idx !== -1 ? idx : null;
      this.state.phase = "player_turn";
    }
  }

  private moveToNextTurn(initial: boolean = false) {
    if (!initial) {
      this.turnManager.nextTurn();
    }

    const nextEntity = this.turnManager.getCurrentEntity();
    this.setActiveEntity(nextEntity);

    if (nextEntity === this.state.enemy) {
      this.state.phase = "enemy_turn";
      setTimeout(() => this.enemyTurn(), 1000);
      return;
    }

    const activeChar = nextEntity as GameCharacter;
    if (!activeChar || !activeChar.isAlive) {
      setTimeout(() => this.moveToNextTurn(), 200);
      return;
    }

    activeChar.resource.current = Math.min(activeChar.resource.max, activeChar.resource.current + 5);
    this.updateEffects(activeChar);
    const canAct = this.processEffects(activeChar);

    if (!canAct) {
      this.state.phase = "transition";
      setTimeout(() => this.moveToNextTurn(), 800);
      return;
    }

    this.state.phase = "player_turn";
  }

  async executeMove(move: Move) {
    if (this.state.phase !== "player_turn") return;
    if (!this.currentActor || this.currentActor === this.state.enemy) return;

    const activeChar = this.currentActor as GameCharacter;
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

    this.applyMove(activeChar as GameCharacter, move);
    this.checkBattleEnd();
    
    // Switch to transition IMMEDIATELY to disable buttons
    if (this.state.phase === "player_turn") {
      this.state.phase = "transition";
    }

    setTimeout(() => {
      this.state.phase = "transition";
      this.moveToNextTurn();
    }, 1500); // Give enough time for HP animation + reading log
  }

  private applyMove(attacker: GameCharacter, move: Move) {
    // Accuracy check
    if (move.accuracy < 100 && Math.random() * 100 > move.accuracy) {
      attacker.resource.current -= Math.ceil(move.mpCost * 0.3); // Piccolo consumo MP anche se manca
      this.state.log.push(`💨 ${attacker.name} mira... ma manca il colpo!`);
      return;
    }

    attacker.resource.current -= move.mpCost;
    this.state.log.push(`🗨️ ${attacker.name}: "${move.quote}"`);
    this.state.log.push(`${attacker.name} usa ${move.emoji} ${move.name}!`);

    // Damage logic
    if (move.baseDamageMultiplier !== null) {
      const isMagical = move.type === "magical";
      const { damage, isCrit } = this.calculateDamage(attacker as GameCharacter, this.state.enemy, move.baseDamageMultiplier, isMagical);
      this.state.enemy.stats.hp = Math.max(0, this.state.enemy.stats.hp - damage);
      this.state.log.push(`${this.state.enemy.name} subisce ${damage} danni!`);
      this.spawnDamagePopup(damage, isCrit, false, 'enemy');
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

  private spawnDamagePopup(value: number, isCrit: boolean, isHeal: boolean, targetId: string) {
    const id = Math.random().toString(36).substring(2, 9);
    this.state.damagePopups.push({ id, value, isCrit, isHeal, targetId });
    // Auto-remove after 1.2s logic is normally in UI, but we keep state clean
    setTimeout(() => {
        this.state.damagePopups = this.state.damagePopups.filter(p => p.id !== id);
    }, 1200);
  }

  private applyHeal(target: GameCharacter, amount: number) {
    const actual = Math.min(target.stats.maxHp - target.stats.hp, amount);
    target.stats.hp += actual;
    this.state.log.push(`${target.name} recupera ${actual} HP!`);
    this.spawnDamagePopup(actual, false, true, `p${this.state.party.indexOf(target)}`);
  }

  private applyEffect(target: GameCharacter, effect: any, duration: number) {
    target.activeEffects.push({ effect, turnsLeft: duration });
    this.state.log.push(`✨ ${target.name} è sotto l'effetto ${effect} per ${duration} turni!`);
  }

  private calculateDamage(attacker: GameCharacter, target: GameCharacter, multiplier: number, isMagical: boolean = false): { damage: number, isCrit: boolean } {
    const offense = isMagical ? (attacker.stats.mag || 1) : (attacker.stats.atk || 1);
    const defense = isMagical ? (target.stats.res || 1) : (target.stats.def || 1);
    
    // Formula JRPG standard bilanciata
    const baseDamage = (offense * multiplier) * (offense / (defense * 0.8 + 1));
    
    let classBonus = 1.0;
    if (this.hasAdvantage(attacker.characterClass, target.characterClass)) classBonus = 1.5;
    else if (this.hasDisadvantage(attacker.characterClass, target.characterClass)) classBonus = 0.75;

    // Fortuna e Critico
    const critChance = (attacker.stats.luck / 1000) + 0.05; // Base 5% + bonus Luck
    const isCrit = Math.random() < critChance;
    const critMultiplier = isCrit ? 1.5 : 1.0;
    
    // Synergy Multiplier (+1% damage every 10% synergy)
    const synergyBonus = 1 + (this.state.synergy / 1000);
    
    if (isCrit) this.state.log.push(`✨ COLPO CRITICO su ${target.name}!`);

    const random = 0.9 + Math.random() * 0.2;
    const damage = Math.round(baseDamage * classBonus * critMultiplier * this.state.quizMultiplier * synergyBonus * random);
    
    // Aumenta sinergia all'attacco (piccolo boost)
    this.state.synergy = Math.min(100, this.state.synergy + 2);
    
    return { damage, isCrit };
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

  /**
   * Processa gli effetti attivi su un personaggio.
   * Ritorna false se il personaggio non può agire questo turno (stun/paralisi).
   */
  private processEffects(target: GameCharacter): boolean {
    let canAct = true;
    for (const ae of target.activeEffects) {
      switch (ae.effect) {
        case 'burn': {
          const dmg = Math.ceil(target.stats.maxHp * 0.05);
          target.stats.hp = Math.max(1, target.stats.hp - dmg);
          this.state.log.push(`🔥 ${target.name} brucia per ${dmg} danni!`);
          if (target.stats.hp <= 1 && !target.isAlive) target.isAlive = false;
          break;
        }
        case 'regen': {
          const heal = Math.ceil(target.stats.maxHp * 0.06);
          target.stats.hp = Math.min(target.stats.maxHp, target.stats.hp + heal);
          this.state.log.push(`💖 ${target.name} si rigenera di ${heal} HP!`);
          break;
        }
        case 'stun':
          this.state.log.push(`😵 ${target.name} è stordito e salta il turno!`);
          canAct = false;
          break;
        case 'paralysis':
          if (Math.random() < 0.5) {
            this.state.log.push(`⚡ ${target.name} è paralizzato e non riesce a muoversi!`);
            canAct = false;
          }
          break;
        case 'confuse':
          this.state.log.push(`🌀 ${target.name} è confuso!`);
          // In confuse: 50% chance attacca un alleato (gestito in applyMove con flag)
          break;
      }
    }
    return canAct;
  }

  private nextTurn() {
    if (this.state.phase !== "transition") return;
    this.moveToNextTurn();
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
    // Processa effetti nemico (burn, regen, stun, ecc.)
    const enemyCanAct = this.processEffects(this.state.enemy as any);
    if (!enemyCanAct) {
      // Nemico stordito: salta turno
      setTimeout(() => {
        if (this.state.phase === "enemy_turn") {
          this.state.phase = "transition";
          this.moveToNextTurn();
        }
      }, 800);
      return;
    }

    const targets = this.state.party.filter(p => p && p.isAlive) as GameCharacter[];
    if (targets.length === 0) return;
    
    const target = targets[Math.floor(Math.random() * targets.length)];
    const isEnraged = (this.state.enemy.stats.hp / this.state.enemy.stats.maxHp) <= 0.25;
    if (isEnraged) this.state.log.push(`💢 ${this.state.enemy.name} è in preda alla DISPERAZIONE! ATK +20%!`);
    
    const damageMultiplier = isEnraged ? 1.2 : 1.0;
    const { damage, isCrit } = this.calculateDamage(this.state.enemy as any, target, 0.8 * damageMultiplier);
    target.stats.hp = Math.max(0, target.stats.hp - damage);
    
    // Subire danni aumenta la sinergia (ogni 100 danni = +2 sinergia)
    const synergyGain = Math.floor(damage / 50);
    if (synergyGain > 0) {
        this.state.synergy = Math.min(100, this.state.synergy + synergyGain);
        this.state.log.push(`⚡ Sinergia aumentata di ${synergyGain} per il danno subito!`);
    }
    
    this.spawnDamagePopup(damage, isCrit, false, `p${this.state.party.indexOf(target)}`);
    this.state.log.push(`👹 ${this.state.enemy.name} attacca ${target.name} per ${damage} danni!`);
    
    if (target.stats.hp === 0) {
        target.isAlive = false;
        this.state.log.push(`💀 ${target.name} è fuori combattimento!`);
    }

    this.checkBattleEnd();
    
    setTimeout(() => {
      if (this.state.phase === "enemy_turn") {
        this.state.phase = "transition";
        this.moveToNextTurn();
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
    if (!this.currentActor || this.currentActor === this.state.enemy) return;
    const attacker = this.currentActor as GameCharacter;
    this.state.pendingMove = null;

    if (correct) {
        this.state.quizMultiplier = 2.0;
        this.state.synergy = Math.min(100, this.state.synergy + 20);
        this.state.log.push("✨ LORE BREAK! Mossa potenziata al massimo!");
        this.applyMove(attacker as GameCharacter, move);
    } else {
        this.state.quizMultiplier = 0.5;
        this.state.log.push("❌ Lore Fallimentare... La mossa è molto debole.");
        this.applyMove(attacker as GameCharacter, move);
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
