import type { GameCharacter, Enemy } from "../types/game.types";
import { StatsService } from "../services/stats.service";

export type TurnEntity = (GameCharacter | Enemy) & { isActive?: boolean };

export class TurnManager {
  private queue: TurnEntity[] = [];
  private currentEntityIndex: number = 0;

  constructor(party: (GameCharacter | null)[], enemy: Enemy) {
    const participants: TurnEntity[] = [
      ...party.filter((p): p is GameCharacter => p !== null && p.isAlive),
      enemy
    ];

    // Calcolo iniziativa basata su SPD + random(-10, +10)
    const initiative = participants.map(p => {
      const spd = StatsService.calculateEffectiveStats(p).spd;
      const initiativeValue = spd + (Math.random() * 20 - 10);
      return { entity: p, initiativeValue };
    });

    // Ordina per iniziativa decrescente
    this.queue = initiative
      .sort((a, b) => b.initiativeValue - a.initiativeValue)
      .map(i => i.entity);
  }

  getQueue(): TurnEntity[] {
    return [...this.queue];
  }

  getCurrentEntity(): TurnEntity {
    return this.queue[this.currentEntityIndex];
  }

  nextTurn(): TurnEntity {
    // Rimuovi fainted units dalla coda
    this.queue = this.queue.filter(e => e.stats.hp > 0);
    
    this.currentEntityIndex = (this.currentEntityIndex + 1) % this.queue.length;
    return this.getCurrentEntity();
  }

  /**
   * Ricontrolla l'ordine (utile se ci sono buff/debuff massicci alla SPD)
   */
  reorderQueue() {
    const aliveParticipants = this.queue.filter(e => e.stats.hp > 0);
    this.queue = aliveParticipants.sort((a, b) => {
        const spdA = StatsService.calculateEffectiveStats(a).spd;
        const spdB = StatsService.calculateEffectiveStats(b).spd;
        return spdB - spdA;
    });
    this.currentEntityIndex = 0;
  }
}
