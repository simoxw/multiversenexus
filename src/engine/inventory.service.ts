import type { Inventory, Item, GameCharacter } from "../types/game.types.ts";

export class InventoryService {
  private static readonly STORAGE_VERSION = 2;
  private inventory: Inventory = {
    items: [],
    currency: 100 // Starting Memory Fragments
  };

  constructor() {
    this.loadFromStorage();
    if (this.inventory.items.length === 0) {
        this.addDefaultItems();
    }
  }

  private loadFromStorage() {
    const saved = localStorage.getItem("multiverse_inventory");
    if (saved) {
        const data = JSON.parse(saved);
        this.inventory = data.inventory ?? data;
        const savedVersion = data.schemaVersion ?? 1;
        if (savedVersion < InventoryService.STORAGE_VERSION) this.saveToStorage();
    }
  }

  private saveToStorage() {
    localStorage.setItem("multiverse_inventory", JSON.stringify({
      schemaVersion: InventoryService.STORAGE_VERSION,
      inventory: this.inventory
    }));
  }

  private addDefaultItems() {
    this.addItem({
        id: "scooby-snack",
        name: "Scooby Snack",
        description: "Cura 50 HP. Uno spuntino leggendario.",
        type: "consumable",
        effect: { hp: 50 },
        quantity: 5
    });
    this.addItem({
        id: "hp-elixir",
        name: "Elisir di Hogwarts",
        description: "Ripristina 30 MP.",
        type: "consumable",
        effect: { mp: 30 },
        quantity: 3
    });
  }

  addItem(item: Item) {
    const existing = this.inventory.items.find(i => i.id === item.id);
    if (existing) {
        existing.quantity += item.quantity;
    } else {
        this.inventory.items.push(item);
    }
    this.saveToStorage();
  }

  useItem(itemId: string, target: GameCharacter): boolean {
    const itemIdx = this.inventory.items.findIndex(i => i.id === itemId);
    if (itemIdx === -1) return false;
    
    const item = this.inventory.items[itemIdx];
    if (item.quantity <= 0) return false;

    // Apply effects
    if (item.effect.hp) target.stats.hp = Math.min(target.stats.maxHp, target.stats.hp + item.effect.hp);
    if (item.effect.mp) target.resource.current = Math.min(target.resource.max, target.resource.current + item.effect.mp);
    if (item.effect.revive && !target.isAlive) {
        target.isAlive = true;
        target.stats.hp = Math.round(target.stats.maxHp * 0.2);
    }

    item.quantity--;
    if (item.quantity <= 0) {
        this.inventory.items.splice(itemIdx, 1);
    }
    
    this.saveToStorage();
    return true;
  }

  getInventory(): Inventory {
    return { ...this.inventory };
  }

  addCurrency(amount: number) {
    this.inventory.currency += amount;
    this.saveToStorage();
  }
}
