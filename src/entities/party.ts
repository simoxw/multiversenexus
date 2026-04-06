import type { GameCharacter } from "../types/game.types";

export class PartyManager {
  private activeTrio: (GameCharacter | null)[] = [null, null, null];
  private bench: GameCharacter[] = [];

  constructor(active: (GameCharacter | null)[], bench: GameCharacter[]) {
    this.activeTrio = active;
    this.bench = bench;
  }

  getActiveTrio(): (GameCharacter | null)[] {
    return [...this.activeTrio];
  }

  getBench(): GameCharacter[] {
    return [...this.bench];
  }

  swapMembers(activeIdx: number, benchIdx: number) {
    if (activeIdx < 0 || activeIdx >= 3) return;
    if (benchIdx < 0 || benchIdx >= this.bench.length) return;

    const activeChar = this.activeTrio[activeIdx];
    const benchChar = this.bench[benchIdx];

    this.activeTrio[activeIdx] = benchChar;
    this.bench[benchIdx] = activeChar as GameCharacter;
    
    // Rimuovi null se abbiamo scambiato uno slot vuoto con un eroe
    this.bench = this.bench.filter(c => c !== null);
  }

  addToBench(character: GameCharacter) {
    this.bench.push(character);
  }

  removeFromParty(activeIdx: number) {
    if (activeIdx < 0 || activeIdx >= 3) return;
    const char = this.activeTrio[activeIdx];
    if (char) {
      this.bench.push(char);
      this.activeTrio[activeIdx] = null;
    }
  }

  isPartyFull(): boolean {
    return this.activeTrio.every(slot => slot !== null);
  }
}
