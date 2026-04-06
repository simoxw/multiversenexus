export interface SaveSlot {
  id: number;
  timestamp: number;
  playerName: string;
  level: number;
  playTime: number;
  data: any; 
}

export class SaveManager {
  private static readonly MAX_SLOTS = 3;
  private static readonly SAVE_KEY_PREFIX = "mv_nexus_slot_";

  static saveSlot(slotIdx: number, gameState: any) {
    if (slotIdx < 0 || slotIdx >= this.MAX_SLOTS) return;
    
    const slot: SaveSlot = {
      id: slotIdx,
      timestamp: Date.now(),
      playerName: "Eroe del Nexus", // Da espandere se aggiungiamo nome giocatore
      level: 1, // Da estrarre dal roster se necessario
      playTime: 0,
      data: gameState
    };

    localStorage.setItem(`${this.SAVE_KEY_PREFIX}${slotIdx}`, JSON.stringify(slot));
    console.log(`[SaveManager] Gioco salvato nello Slot ${slotIdx}`);
  }

  static loadSlot(slotIdx: number): any | null {
    const raw = localStorage.getItem(`${this.SAVE_KEY_PREFIX}${slotIdx}`);
    if (!raw) return null;
    try {
      const slot = JSON.parse(raw) as SaveSlot;
      return slot.data;
    } catch {
      return null;
    }
  }

  static getSlotsInfo(): (SaveSlot | null)[] {
    const slots: (SaveSlot | null)[] = [];
    for (let i = 0; i < this.MAX_SLOTS; i++) {
        const raw = localStorage.getItem(`${this.SAVE_KEY_PREFIX}${i}`);
        slots.push(raw ? JSON.parse(raw) : null);
    }
    return slots;
  }

  static autoSave(gameState: any) {
      this.saveSlot(0, gameState); // Lo slot 0 è dedicato all'autosave
  }
}
