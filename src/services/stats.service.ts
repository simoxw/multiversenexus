import type { CharacterStats, GameCharacter, GrowthRates } from "../types/game.types";
import { characterStats, type CharacterBaseStats } from "../data/characterStats";

export interface FullCharacterStats extends CharacterStats {
  baseAtk: number;
  baseDef: number;
  baseMag: number;
  baseRes: number;
  baseSpd: number;
  baseLuck: number;
  equipmentAtk: number;
  equipmentDef: number;
  equipmentMag: number;
  equipmentRes: number;
  equipmentLuck: number;
  tempBuffs: Partial<Record<keyof CharacterStats, number>>;
}

export class StatsService {
  /**
   * Calcola le statistiche base per un dato livello usando la formula non lineare.
   */
  static calculateLevelUpStats(
    baseStats: CharacterBaseStats, 
    level: number, 
    growth: GrowthRates
  ): CharacterStats {
    const calc = (base: number, g: number) => 
      Math.floor(base + (level * g * (1 + level * 0.012)));

    const currentHp = calc(baseStats.hp, growth.hp);

    return {
      hp: currentHp,
      maxHp: currentHp,
      atk: calc(baseStats.atk, growth.atk),
      def: calc(baseStats.def, growth.def),
      mag: calc(baseStats.mag, growth.mag),
      res: calc(baseStats.res, growth.res),
      spd: calc(baseStats.spd, growth.spd),
      luck: calc(baseStats.luck, growth.luck),
      loreLevel: level
    };
  }

  /**
   * Calcola i bonus totali derivanti dall'equipaggimento attuale.
   */
  static calculateEquipmentBonuses(character: GameCharacter) {
    const baseFromData = characterStats[character.id];
    
    // Migrazione/Sincronizzazione per dati obsoleti
    const currentStats = { ...character.stats };
    if (!currentStats.mag || currentStats.mag === 0) {
        if (baseFromData) {
            const baseAtLevel = this.calculateLevelUpStats(
                baseFromData, 
                (currentStats as any).loreLevel || 1, 
                baseFromData.growthRates
            );
            Object.assign(currentStats, baseAtLevel);
            character.stats = currentStats;
        }
    }

    const bonuses = { atk: 0, def: 0, mag: 0, res: 0, luck: 0, hp: 0 };
    
    if (!character.equipment) {
      character.equipment = { weapon: null, armor: null, accessory: null };
      return bonuses;
    }

    const { weapon, armor, accessory } = character.equipment;

    if (weapon) {
      bonuses.atk += weapon.atk;
      bonuses.mag += weapon.mag || 0;
    }
    if (armor) {
      bonuses.def += armor.def;
      bonuses.res += armor.res;
      bonuses.hp += armor.hp || 0;
    }
    if (accessory) {
      bonuses.luck += accessory.luck || 0;
    }

    return bonuses;
  }

  /**
   * Restituisce le statistiche finali del personaggio (Base + Equip + Buff)
   */
  static getEffectiveStats(character: GameCharacter): FullCharacterStats {
    // Lazy Init e Auto-Leveling per dati legacy o disallineati
    if (character.currentExp === undefined) character.currentExp = 0;
    if (!character.expToNextLevel || character.expToNextLevel === 0) {
      character.expToNextLevel = this.calculateExpToNextLevel(character.stats.loreLevel || 1);
    }

    // Forza Level Up se i dati sono incoerenti (es. 175/100)
    while (character.currentExp >= character.expToNextLevel && character.stats.loreLevel < 100) {
      character.currentExp -= character.expToNextLevel;
      character.stats.loreLevel++;
      
      const baseFromData = characterStats[character.id];
      if (baseFromData) {
        character.stats = this.calculateLevelUpStats(baseFromData, character.stats.loreLevel, baseFromData.growthRates);
      }
      character.expToNextLevel = this.calculateExpToNextLevel(character.stats.loreLevel);
    }

    const eq = this.calculateEquipmentBonuses(character);
    const base = character.stats;
    
    // Somma buff temporanei
    const buffs = { atk: 0, def: 0, mag: 0, res: 0, spd: 0, luck: 0 };
    character.activeEffects.forEach(ae => {
        const val = (stat: number) => Math.round(stat * 0.25);
        if (ae.effect === "atk_up") buffs.atk += val(base.atk);
        if (ae.effect === "atk_down") buffs.atk -= val(base.atk);
        if (ae.effect === "def_up") buffs.def += val(base.def);
        if (ae.effect === "def_down") buffs.def -= val(base.def);
    });

    return {
      ...base,
      maxHp: base.maxHp + eq.hp,
      hp: base.hp,
      atk: base.atk + eq.atk + buffs.atk,
      def: base.def + eq.def + buffs.def,
      mag: base.mag + eq.mag + buffs.mag,
      res: base.res + eq.res + buffs.res,
      spd: base.spd + buffs.spd,
      luck: base.luck + eq.luck + buffs.luck,
      baseAtk: base.atk,
      baseDef: base.def,
      baseMag: base.mag,
      baseRes: base.res,
      baseSpd: base.spd,
      baseLuck: base.luck,
      equipmentAtk: eq.atk,
      equipmentDef: eq.def,
      equipmentMag: eq.mag,
      equipmentRes: eq.res,
      equipmentLuck: eq.luck,
      tempBuffs: buffs
    };
  }

  /**
   * Pokemon-style Experience System
   */
  static calculateExpToNextLevel(currentLevel: number): number {
    // Formula non-lineare: 100 * lvl^1.5 
    return Math.max(100, Math.floor(100 * Math.pow(currentLevel, 1.5)));
  }

  static addExperience(character: GameCharacter, amount: number): { levelsGained: number, expAdded: number } {
    if (!character.stats.loreLevel) character.stats.loreLevel = 1;
    let levelsGained = 0;
    
    // Level Cap 100
    if (character.stats.loreLevel >= 100) {
      character.currentExp = 0;
      return { levelsGained: 0, expAdded: 0 };
    }

    character.currentExp += amount;

    // Se expToNextLevel è mancante (vecchi dati), calcolalo subito
    if (!character.expToNextLevel || character.expToNextLevel === 0) {
      character.expToNextLevel = this.calculateExpToNextLevel(character.stats.loreLevel);
    }

    while (character.currentExp >= character.expToNextLevel && character.stats.loreLevel < 100) {
      character.currentExp -= character.expToNextLevel;
      character.stats.loreLevel++;
      levelsGained++;

      // Ricalcolo statistiche base per il nuovo livello
      const baseFromData = characterStats[character.id];
      if (baseFromData) {
        character.stats = this.calculateLevelUpStats(
          baseFromData, 
          character.stats.loreLevel, 
          baseFromData.growthRates
        );
      }

      // Prossima soglia XP (se non siamo già al 100)
      if (character.stats.loreLevel < 100) {
        character.expToNextLevel = this.calculateExpToNextLevel(character.stats.loreLevel);
      } else {
        character.currentExp = 0;
        break;
      }
    }

    return { levelsGained, expAdded: amount };
  }

  static calculateEffectiveStats(character: GameCharacter): FullCharacterStats {
    return this.getEffectiveStats(character);
  }
}
