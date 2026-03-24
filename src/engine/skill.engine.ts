import type { GameCharacter, Enemy, CharacterClass } from "../types/game.types.ts";

export interface SkillResult {
  log: string;
  damage?: number;
  heal?: number;
  synergyGain?: number;
  statusEffect?: string;
  resourceSpent?: number;
  success: boolean;
}

export interface SkillDefinition {
  id: string;
  name: string;
  cost: number;
  description: string;
}

export class SkillEngine {
  private static readonly SKILLS_BY_CLASS: Record<CharacterClass, SkillDefinition[]> = {
    Mysterian: [
      { id: "myst-fog", name: "Nebbia Oscura", cost: 20, description: "Riduce ATK nemico e genera sinergia." },
      { id: "myst-bind", name: "Vincolo Arcano", cost: 25, description: "Taglia la velocita nemica." },
      { id: "myst-ward", name: "Protego Nexus", cost: 15, description: "Aumenta DEF del party." },
      { id: "iconic", name: "Mossa Iconica", cost: 35, description: "Frase iconica + attacco speciale." },
    ],
    Ethereal: [
      { id: "eth-heal", name: "Luce del Cuore", cost: 25, description: "Cura il party." },
      { id: "eth-aura", name: "Aura Armonica", cost: 20, description: "Aumenta SPD del party." },
      { id: "eth-star", name: "Pioggia Stellare", cost: 30, description: "Danno magico a bersaglio singolo." },
      { id: "iconic", name: "Mossa Iconica", cost: 40, description: "Frase iconica + tecnica signature." },
    ],
    Striker: [
      { id: "str-burst", name: "Colpo Esplosivo", cost: 25, description: "Forte danno diretto." },
      { id: "str-rush", name: "Raffica", cost: 20, description: "Due colpi rapidi." },
      { id: "str-focus", name: "Concentrazione", cost: 15, description: "Aumenta ATK personale." },
      { id: "iconic", name: "Mossa Iconica", cost: 40, description: "Frase iconica + finisher." },
    ],
  };

  static getSkillsForCharacter(character: GameCharacter): SkillDefinition[] {
    return this.SKILLS_BY_CLASS[character.characterClass];
  }

  static executeSkill(skillId: string, attacker: GameCharacter, target: Enemy, party: GameCharacter[]): SkillResult {
    const skill = this.SKILLS_BY_CLASS[attacker.characterClass].find((s) => s.id === skillId);
    if (!skill) {
      return { log: `${attacker.name} prova una tecnica sconosciuta.`, success: false };
    }
    if (attacker.resource.current < skill.cost) {
      return {
        log: `⚠️ ${attacker.name} non ha abbastanza ${attacker.resource.type}! (${attacker.resource.current}/${skill.cost})`,
        success: false,
      };
    }
    attacker.resource.current -= skill.cost;

    switch (attacker.characterClass) {
      case "Mysterian":
        return this.executeMysterianSkill(skillId, skill.cost, attacker, target, party);
      case "Ethereal":
        return this.executeEtherealSkill(skillId, skill.cost, attacker, target, party);
      case "Striker":
        return this.executeStrikerSkill(skillId, skill.cost, attacker, target);
      default:
        return { log: `${attacker.name} usa un'abilita sconosciuta.`, success: false };
    }
  }

  private static executeMysterianSkill(skillId: string, cost: number, attacker: GameCharacter, target: Enemy, party: GameCharacter[]): SkillResult {
    if (skillId === "myst-fog") {
      target.stats.atk = Math.max(1, Math.round(target.stats.atk * 0.85));
      return { log: `✨ ${attacker.name} usa Nebbia Oscura: ATK di ${target.name} in calo!`, statusEffect: "atk_down", synergyGain: 15, resourceSpent: cost, success: true };
    }
    if (skillId === "myst-bind") {
      target.stats.spd = Math.max(1, Math.round(target.stats.spd * 0.8));
      return { log: `🕸️ ${attacker.name} lancia Vincolo Arcano: SPD di ${target.name} ridotta!`, statusEffect: "spd_down", synergyGain: 12, resourceSpent: cost, success: true };
    }
    if (skillId === "myst-ward") {
      party.forEach((p) => {
        if (p.isAlive) p.stats.def = Math.round(p.stats.def * 1.12);
      });
      return { log: `🛡️ ${attacker.name} attiva Protego Nexus: DEF del party aumentata!`, synergyGain: 10, resourceSpent: cost, success: true };
    }
    if (skillId === "iconic") {
      const damage = Math.round((attacker.stats.atk / target.stats.def) * 45);
      target.stats.hp = Math.max(0, target.stats.hp - damage);
      return { log: `${this.getIconicQuote(attacker)}\n✨ Incantesimo Signature: ${damage} danni!`, damage, synergyGain: 25, resourceSpent: cost, success: true };
    }
    return { log: `${attacker.name} usa un'abilita Mysterian.`, synergyGain: 10, resourceSpent: cost, success: true };
  }

  private static executeEtherealSkill(skillId: string, cost: number, attacker: GameCharacter, target: Enemy, party: GameCharacter[]): SkillResult {
    if (skillId === "eth-heal") {
      party.forEach((p) => {
        if (p.isAlive) p.stats.hp = Math.min(p.stats.maxHp, p.stats.hp + 50);
      });
      return { log: `🌟 ${attacker.name} usa Luce del Cuore! Il party viene curato!`, heal: 50, synergyGain: 20, resourceSpent: cost, success: true };
    }
    if (skillId === "eth-aura") {
      party.forEach((p) => {
        if (p.isAlive) p.stats.spd = Math.round(p.stats.spd * 1.1);
      });
      return { log: `💫 ${attacker.name} diffonde Aura Armonica: SPD del party aumentata!`, synergyGain: 12, resourceSpent: cost, success: true };
    }
    if (skillId === "eth-star") {
      const damage = Math.round((attacker.stats.atk / target.stats.def) * 35);
      target.stats.hp = Math.max(0, target.stats.hp - damage);
      return { log: `⭐ ${attacker.name} evoca Pioggia Stellare: ${damage} danni!`, damage, synergyGain: 15, resourceSpent: cost, success: true };
    }
    if (skillId === "iconic") {
      const damage = Math.round((attacker.stats.atk / target.stats.def) * 50);
      target.stats.hp = Math.max(0, target.stats.hp - damage);
      party.forEach((p) => {
        if (p.isAlive) p.stats.hp = Math.min(p.stats.maxHp, p.stats.hp + 30);
      });
      return { log: `${this.getIconicQuote(attacker)}\n🌌 Tecnica Signature: ${damage} danni e cura al party!`, damage, heal: 30, synergyGain: 28, resourceSpent: cost, success: true };
    }
    return { log: `${attacker.name} usa un'abilita Ethereal.`, synergyGain: 10, resourceSpent: cost, success: true };
  }

  private static executeStrikerSkill(skillId: string, cost: number, attacker: GameCharacter, target: Enemy): SkillResult {
    if (skillId === "str-burst") {
      const damage = Math.round((attacker.stats.atk / target.stats.def) * 40);
      target.stats.hp = Math.max(0, target.stats.hp - damage);
      return { log: `💥 ${attacker.name} usa Colpo Esplosivo per ${damage} danni!`, damage, synergyGain: 20, resourceSpent: cost, success: true };
    }
    if (skillId === "str-rush") {
      const hitA = Math.round((attacker.stats.atk / target.stats.def) * 18);
      const hitB = Math.round((attacker.stats.atk / target.stats.def) * 18);
      const total = hitA + hitB;
      target.stats.hp = Math.max(0, target.stats.hp - total);
      return { log: `⚡ ${attacker.name} scatena Raffica: ${hitA} + ${hitB} danni!`, damage: total, synergyGain: 15, resourceSpent: cost, success: true };
    }
    if (skillId === "str-focus") {
      attacker.stats.atk = Math.round(attacker.stats.atk * 1.18);
      return { log: `🔥 ${attacker.name} usa Concentrazione: ATK aumentato!`, synergyGain: 10, resourceSpent: cost, success: true };
    }
    if (skillId === "iconic") {
      const damage = Math.round((attacker.stats.atk / target.stats.def) * 55);
      target.stats.hp = Math.max(0, target.stats.hp - damage);
      return { log: `${this.getIconicQuote(attacker)}\n🚀 Finisher Signature: ${damage} danni devastanti!`, damage, synergyGain: 30, resourceSpent: cost, success: true };
    }
    return { log: `${attacker.name} usa un'abilita Striker.`, synergyGain: 10, resourceSpent: cost, success: true };
  }

  private static getIconicQuote(character: GameCharacter): string {
    if (character.id.includes("anime-goku")) return `🗯️ ${character.name}: "Kamehamehaaa!"`;
    if (character.id.includes("anime-naruto")) return `🗯️ ${character.name}: "Dattebayo! Rasengan!"`;
    if (character.id.includes("hp-harry-potter")) return `🗯️ ${character.name}: "Expelliarmus!"`;
    if (character.id.includes("hp-hermione-granger")) return `🗯️ ${character.name}: "È leviosa, non leviosaa!"`;
    if (character.id.includes("disney-sora")) return `🗯️ ${character.name}: "My friends are my power!"`;
    if (character.id.includes("ff7-cloud")) return `🗯️ ${character.name}: "Let's mosey."`;
    return `🗯️ ${character.name}: "Il nexus rispondera alla mia volonta!"`;
  }
}
