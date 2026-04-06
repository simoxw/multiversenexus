import type { GameCharacter, Weapon, Armor, Accessory } from "../types/game.types";

export class EquipmentSystem {
  static equipWeapon(character: GameCharacter, weapon: Weapon): Weapon | null {
    const old = character.equipment.weapon;
    character.equipment.weapon = weapon;
    return old;
  }

  static unequipWeapon(character: GameCharacter): Weapon | null {
    const old = character.equipment.weapon;
    character.equipment.weapon = null;
    return old;
  }

  static equipArmor(character: GameCharacter, armor: Armor): Armor | null {
    const old = character.equipment.armor;
    character.equipment.armor = armor;
    return old;
  }

  static unequipArmor(character: GameCharacter): Armor | null {
    const old = character.equipment.armor;
    character.equipment.armor = null;
    return old;
  }

  static equipAccessory(character: GameCharacter, accessory: Accessory): Accessory | null {
    const old = character.equipment.accessory;
    character.equipment.accessory = accessory;
    return old;
  }

  static unequipAccessory(character: GameCharacter): Accessory | null {
    const old = character.equipment.accessory;
    character.equipment.accessory = null;
    return old;
  }
}
