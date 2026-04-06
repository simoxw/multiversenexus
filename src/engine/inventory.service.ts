import type { Inventory, Item, GameCharacter, Weapon, Armor, Accessory } from "../types/game.types.ts";
import { EquipmentSystem } from "../entities/equipment-system.ts";
import { StatsService } from "../services/stats.service.ts";

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

    // --- CONSUMABLE LOGIC ---
    if (item.type === "consumable" && item.effect) {
      if (item.effect.hp) target.stats.hp = Math.min(target.stats.maxHp, target.stats.hp + item.effect.hp);
      if (item.effect.mp) target.resource.current = Math.min(target.resource.max, target.resource.current + item.effect.mp);
      if (item.effect.revive && !target.isAlive) {
          target.isAlive = true;
          target.stats.hp = Math.round(target.stats.maxHp * 0.2);
      }
      item.quantity--;
    } 
    // --- EQUIPMENT LOGIC ---
    else if (item.type === "weapon" && item.stats) {
      const weapon: Weapon = { id: item.id, name: item.name, atk: item.stats.atk || 0, mag: item.stats.mag, element: item.element };
      const old = EquipmentSystem.equipWeapon(target, weapon);
      if (old) this.addItemFromEntity(old, "weapon");
      item.quantity--;
    }
    else if (item.type === "armor" && item.stats) {
      const armor: Armor = { id: item.id, name: item.name, def: item.stats.def || 0, res: item.stats.res || 0, hp: item.stats.hp };
      const old = EquipmentSystem.equipArmor(target, armor);
      if (old) this.addItemFromEntity(old, "armor");
      item.quantity--;
    }
    else if (item.type === "accessory" && item.stats) {
      const acc: Accessory = { id: item.id, name: item.name, luck: item.stats.luck };
      const old = EquipmentSystem.equipAccessory(target, acc);
      if (old) this.addItemFromEntity(old, "accessory");
      item.quantity--;
    }

    if (item.quantity <= 0) {
        this.inventory.items.splice(itemIdx, 1);
    }
    
    // Ricalcola statistiche finali
    target.stats = StatsService.getEffectiveStats(target);
    
    this.saveToStorage();
    return true;
  }

  /**
   * Helper per rimettere in inventario un oggetto disequipaggiato
   */
  private addItemFromEntity(entity: Weapon | Armor | Accessory, type: "weapon" | "armor" | "accessory") {
      this.addItem({
          id: entity.id,
          name: entity.name,
          description: "Oggetto disequipaggiato.",
          type: type,
          quantity: 1,
          stats: (entity as any) // Mapping semplificato dei bonus
      });
  }

  getInventory(): Inventory {
    return { ...this.inventory };
  }

  addCurrency(amount: number) {
    this.inventory.currency += amount;
    this.saveToStorage();
  }
}
