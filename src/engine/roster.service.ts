import type { GameCharacter } from "../types/game.types.ts";
import { characterPool } from "../data/characterPool.ts";
import { ApiService } from "../services/api.service.ts";
import { characterExtraData } from "../data/characterExtra.ts";
import charactersData from "../data/characters.json";
import { getCharacterFallbackImage } from "../ui/image-fallback.ts";
import { StatsService } from "../services/stats.service.ts";
import { characterStats } from "../data/characterStats.ts";

export class RosterService {
  private static readonly STORAGE_VERSION = 6;
  private activeTrio: (GameCharacter | null)[] = [null, null, null];
  private bench: GameCharacter[] = [];

  constructor() {
    this.loadFromStorage();
    if (this.isRosterEmpty() && this.bench.length === 0) {
        // We'll trust initial population in init() for now
    }
  }

  private loadFromStorage() {
    const saved = localStorage.getItem("multiverse_roster");
    if (saved) {
        const data = JSON.parse(saved);
        const savedVersion = data.schemaVersion ?? 1;
        this.activeTrio = (data.activeTrio || [null, null, null]) as (GameCharacter | null)[];
        this.bench = (data.bench || []) as GameCharacter[];
        this.migrateImages();
        this.syncWithMetadata();
        if (savedVersion < RosterService.STORAGE_VERSION) this.saveCharacters();
    }
  }

  private migrateImages() {
    const idMigration: Record<string, string> = {
        "disney-sora": "sora", "disney-riku": "riku", "disney-kairi": "kairi",
        "disney-mickey": "mickey", "disney-donald": "donald", "disney-goofy": "goofy",
        "disney-aqua": "aqua", "disney-terra": "terra", "disney-ventus": "ventus",
        "disney-axel": "axel", "disney-maleficent": "maleficent", "disney-stitch": "stitch",
        "disney-genie": "genie", "disney-elsa": "elsa", "disney-hercules": "hercules",
        "disney-simba": "simba", "disney-baymax": "baymax", "disney-mulan": "mulan",
        "disney-ursula": "ursula", "disney-jack-skellington": "jack-skellington",
        "anime-goku": "goku", "anime-vegeta": "vegeta", "anime-naruto": "naruto",
        "anime-sasuke": "sasuke", "anime-luffy": "luffy", "anime-zoro": "zoro",
        "anime-eren": "eren", "anime-mikasa": "mikasa", "anime-saitama": "saitama",
        "anime-midoriya": "midoriya", "hp-harry-potter": "harry-potter",
        "hp-hermione-granger": "hermione-granger", "hp-severus-snape": "severus-snape",
        "courage-the-cowardly-dog": "courage",
        "lord-voldemort": "voldemort",
        "hp-lord-voldemort": "voldemort",
        "hp-luna-lovegood": "luna-lovegood", "hp-rubeus-hagrid": "hagrid",
        "hp-bellatrix-lestrange": "bellatrix", "hp-draco-malfoy": "draco-malfoy",
        "hp-sirius-black": "sirius-black", "ff7-cloud": "cloud", "ff7-sephiroth": "sephiroth",
        "ff7-tifa": "tifa", "ff7-aerith": "aerith", "ff8-squall": "squall",
        "ff15-noctis": "noctis", "ff13-lightning": "lightning", "ff9-vivi": "vivi",
        "ff7-zack": "zack", "ff7-yuffie": "yuffie", "courage-dog": "courage",
        "eustace-bagge": "eustace", "muriel-bagge": "muriel", "the-director": "director"
    };

    // characters.json is the single source of truth for images
    const allChars = [...charactersData.Mysterians, ...charactersData.Ethereals, ...charactersData.Strikers];

    const fix = (char: GameCharacter) => {
        if (!char) return;
        if (idMigration[char.id]) char.id = idMigration[char.id];

        // Always use the image from characters.json if available
        const imageData = allChars.find(c => c.id === char.id);
        if (imageData?.img) {
            char.imageUrl = imageData.img;
        } else {
            // Fallback to characterExtraData or dicebear
            const fallback = characterExtraData[char.id]?.imageUrl || getCharacterFallbackImage(char.id || char.name);
            if (fallback) char.imageUrl = fallback;
        }
    };
    this.activeTrio.forEach(c => c && fix(c));
    this.bench.forEach(c => fix(c));
  }

  private syncWithMetadata() {
    // Remove any characters whose id is no longer in the master pool (prevents ghost duplicates)
    const validIds = new Set(characterPool.map(m => m.id));
    this.bench = this.bench.filter(c => validIds.has(c.id));
    this.activeTrio = this.activeTrio.map(c => (c && validIds.has(c.id)) ? c : null) as any;

    const syncChar = (char: GameCharacter) => {
      const meta = characterPool.find(m => m.id === char.id);
      if (meta) {
        char.name = meta.name;
        char.franchise = meta.franchise;
        char.characterClass = meta.characterClass;
      }

      // Fix stats mancanti (mag, res, luck, spd) da dati base
      const baseData = characterStats[char.id];
      if (baseData) {
        if (char.stats.mag === undefined || char.stats.mag === null) char.stats.mag = baseData.mag;
        if (char.stats.res === undefined || char.stats.res === null) char.stats.res = baseData.res;
        if (char.stats.luck === undefined || char.stats.luck === null) char.stats.luck = baseData.luck;
        if (char.stats.spd === undefined || char.stats.spd === null) char.stats.spd = baseData.spd;
        
        // Ricalcolo aggressivo: forza il livello se non presente o se le stats base sono cambiate
        const level = char.stats.loreLevel || 1;
        char.stats.loreLevel = level;
        
        const expectedStats = StatsService.calculateLevelUpStats(baseData, level, baseData.growthRates);
        char.stats.hp = expectedStats.hp;
        char.stats.maxHp = expectedStats.maxHp;
        char.stats.atk = expectedStats.atk;
        char.stats.mag = expectedStats.mag;
        char.stats.res = expectedStats.res;
        char.stats.luck = expectedStats.luck;
        char.stats.spd = expectedStats.spd;
        
        // Assicura role coerente
        char.role = baseData.role;
      }

      // Fix EXP mancante
      if (char.currentExp === undefined || char.currentExp === null) {
        char.currentExp = 0;
      }
      if (!char.expToNextLevel || char.expToNextLevel <= 0) {
        char.expToNextLevel = StatsService.calculateExpToNextLevel(char.stats.loreLevel || 1);
      }

      // Fix equipment mancante
      if (!char.equipment) {
        char.equipment = { weapon: null, armor: null, accessory: null };
      }
      // Fix activeEffects mancante
      if (!char.activeEffects) {
        char.activeEffects = [];
      }
    };
    this.activeTrio.forEach(c => c && syncChar(c));
    this.bench.forEach(c => syncChar(c));
    this.saveCharacters();
  }

  public saveCharacters() {
    localStorage.setItem("multiverse_roster", JSON.stringify({
        schemaVersion: RosterService.STORAGE_VERSION,
        activeTrio: this.activeTrio,
        bench: this.bench
    }));
  }

  async initializeRoster(initialCharacterIds: string[]) {
    // Only initialize fully if the roster is completely empty
    if (this.isRosterEmpty() && this.bench.length === 0) {
        // Populate activeTrio
        for (let i = 0; i < Math.min(initialCharacterIds.length, 3); i++) {
            const metadata = characterPool.find(c => c.id === initialCharacterIds[i]);
            if (metadata) {
                const character = await ApiService.fetchCharacter(metadata);
                this.activeTrio[i] = character;
            }
        }

        // Fill the bench with the rest of the pool — no duplicates
        const existingIds = new Set([
            ...this.activeTrio.filter(Boolean).map(c => c!.id),
            ...this.bench.map(c => c.id)
        ]);
        const benchCandidates = characterPool.filter(c => !existingIds.has(c.id));
        for (const metadata of benchCandidates) {
            if (this.bench.length >= 57) break;
            if (this.bench.some(b => b.id === metadata.id)) continue;
            const character = await ApiService.fetchCharacter(metadata);
            this.bench.push(character);
        }
    }

    // Always apply local images immediately (regardless of whether we just built or loaded from storage)
    this.applyLocalImages();
    this.saveCharacters();
  }

  /** Forces all characters in memory to use their local image from characters.json */
  applyLocalImages() {
    const allChars = [...charactersData.Mysterians, ...charactersData.Ethereals, ...charactersData.Strikers];
    const apply = (char: GameCharacter) => {
        if (!char) return;
        const imageData = allChars.find(c => c.id === char.id);
        if (imageData?.img) {
            char.imageUrl = imageData.img;
        } else {
            // Consistent dicebear avatar based on ID seed — no external API calls
            char.imageUrl = `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(char.id)}`;
        }
    };
    this.activeTrio.forEach(c => c && apply(c));
    this.bench.forEach(c => apply(c));
  }

  getActiveTrio(): (GameCharacter | null)[] {
    return [...this.activeTrio];
  }

  getActiveAverageLevel(): number {
    const alive = this.activeTrio.filter((c): c is GameCharacter => !!c);
    if (alive.length === 0) return 1;
    const total = alive.reduce((sum, c) => sum + (c.stats.loreLevel || 1), 0);
    return Math.max(1, Math.round(total / alive.length));
  }

  private isRosterEmpty(): boolean {
    return this.activeTrio.every(c => c === null);
  }

  getBench(): GameCharacter[] {
    return [...this.bench];
  }

  swapWithBench(activeSlotIndex: number, benchIndex: number) {
    if (activeSlotIndex < 0 || activeSlotIndex >= 3) return;
    if (benchIndex < 0 || benchIndex >= this.bench.length) return;

    const temp = this.activeTrio[activeSlotIndex];
    this.activeTrio[activeSlotIndex] = this.bench[benchIndex];
    
    if (temp) {
      this.bench[benchIndex] = temp;
    } else {
      this.bench.splice(benchIndex, 1);
    }
    this.saveCharacters();
  }

  removeFromParty(activeSlotIndex: number) {
    if (activeSlotIndex < 0 || activeSlotIndex >= 3) return;
    const char = this.activeTrio[activeSlotIndex];
    if (char) {
      this.bench.push(char);
      this.activeTrio[activeSlotIndex] = null;
      this.saveCharacters();
    }
  }

  filterBench(franchise?: string, characterClass?: string): GameCharacter[] {
    return this.bench.filter(c => {
        const matchFranchise = franchise ? c.franchise === franchise : true;
        const matchClass = characterClass ? c.characterClass === characterClass : true;
        return matchFranchise && matchClass;
    });
  }

  sortBench(sortBy: "name" | "hp" | "atk"): GameCharacter[] {
    return [...this.bench].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "hp") return b.stats.hp - a.stats.hp;
        if (sortBy === "atk") return b.stats.atk - a.stats.atk;
        return 0;
    });
  }

  async unlockCharacterById(id: string) {
    const metadata = characterPool.find(c => c.id === id);
    if (metadata) {
        const character = await ApiService.fetchCharacter(metadata);
        this.addToRoster(character);
    }
  }

  addToRoster(character: GameCharacter) {
    if (this.bench.length < 57) {
        // Avoid duplicates if already in bench
        if (!this.bench.find(c => c.id === character.id)) {
            this.bench.push(character);
            this.saveCharacters();
        }
    }
  }

  addExperience(charId: string, exp: number): string | null {
    console.log(`[Roster] Updating ${charId} with +${exp} EXP`);
    const char = this.activeTrio.find(c => c?.id === charId) || this.bench.find(c => c.id === charId);
    if (!char) {
      console.warn("[Roster] CHARACTER NOT FOUND IN ACTIVE OR BENCH:", charId);
      return null;
    }

    const res = StatsService.addExperience(char, exp);
    this.saveCharacters();
    
    if (res.levelsGained > 0) {
      console.log(`✨ [Roster] ${char.name} LEVELED UP! Now at lvl ${char.stats.loreLevel}`);
      return `${char.name} è salito al livello ${char.stats.loreLevel}!`;
    }
    return null;
  }
}
