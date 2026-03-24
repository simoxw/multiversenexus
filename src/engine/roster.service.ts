import type { GameCharacter } from "../types/game.types.ts";
import { characterPool } from "../data/characterPool.ts";
import { ApiService } from "../services/api.service.ts";
import { characterExtraData } from "../data/characterExtra.ts";
import charactersData from "../data/characters.json";
import { getCharacterFallbackImage } from "../ui/image-fallback.ts";

export class RosterService {
  private static readonly STORAGE_VERSION = 2;
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
        if (savedVersion < RosterService.STORAGE_VERSION) this.saveToStorage();
    }
  }

  private migrateImages() {
    // Migration mapping for old IDs to new IDs
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
        "hp-albus-dumbledore": "albus-dumbledore", "hp-lord-voldemort": "voldemort",
        "hp-luna-lovegood": "luna-lovegood", "hp-rubeus-hagrid": "hagrid",
        "hp-bellatrix-lestrange": "bellatrix", "hp-draco-malfoy": "draco-malfoy",
        "hp-sirius-black": "sirius-black", "ff7-cloud": "cloud", "ff7-sephiroth": "sephiroth",
        "ff7-tifa": "tifa", "ff7-aerith": "aerith", "ff8-squall": "squall",
        "ff15-noctis": "noctis", "ff13-lightning": "lightning", "ff9-vivi": "vivi",
        "ff7-zack": "zack", "ff7-yuffie": "yuffie", "courage-dog": "courage",
        "eustace-bagge": "eustace", "muriel-bagge": "muriel", "the-director": "director"
    };

    const fix = (char: GameCharacter) => {
        if (!char) return;
        // Migrate ID if necessary
        if (idMigration[char.id]) char.id = idMigration[char.id];

        const allChars = [...charactersData.Mysterians, ...charactersData.Ethereals, ...charactersData.Strikers];
        const imageData = allChars.find(c => c.id === char.id);
        const reliableFallback = imageData?.img || characterExtraData[char.id]?.imageUrl || getCharacterFallbackImage(char.id || char.name);
        
        // FORCE update for relative paths and local assets
        if (reliableFallback && (reliableFallback.startsWith("characters/") || !char.imageUrl || char.imageUrl.includes("pngarts.com") || char.imageUrl.includes("pngitem.com"))) {
            char.imageUrl = reliableFallback;
        }
    };
    this.activeTrio.forEach(c => c && fix(c));
    this.bench.forEach(c => fix(c));
  }

  private saveToStorage() {
    localStorage.setItem("multiverse_roster", JSON.stringify({
        schemaVersion: RosterService.STORAGE_VERSION,
        activeTrio: this.activeTrio,
        bench: this.bench
    }));
  }

  async initializeRoster(initialCharacterIds: string[]) {
    // Only initialize if the roster is empty (not loaded from storage)
    if (this.isRosterEmpty() && this.bench.length === 0) {
        for (let i = 0; i < Math.min(initialCharacterIds.length, 3); i++) {
            const metadata = characterPool.find(c => c.id === initialCharacterIds[i]);
            if (metadata) {
                const character = await ApiService.fetchCharacter(metadata);
                this.activeTrio[i] = character;
            }
        }
        this.saveToStorage(); // Save after initial population
    }
    
    // Fill the bench with the rest of the pool
    const benchCandidates = characterPool.filter(c => !initialCharacterIds.includes(c.id));
    for (const metadata of benchCandidates) {
        if (this.bench.length >= 57) break; // Max 60 total (3 active + 57 bench)
        const character = await ApiService.fetchCharacter(metadata);
        this.bench.push(character);
    }
    this.saveToStorage();
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

  addToRoster(character: GameCharacter) {
    if (this.bench.length < 57) {
        // Avoid duplicates if already in bench
        if (!this.bench.find(c => c.id === character.id)) {
            this.bench.push(character);
            this.saveToStorage();
        }
    }
  }

  addExperience(charId: string, exp: number): string | null {
    // Find in active or bench
    let char = this.activeTrio.find(c => c?.id === charId) || this.bench.find(c => c.id === charId);
    if (!char) return null;

    // Simplistic level up: every 100 EXP = 1 Level
    const oldLevel = char.stats.loreLevel || 1;
    const totalExp = (char as any).exp || 0;
    const newTotalExp = totalExp + exp;
    (char as any).exp = newTotalExp;
    
    const newLevel = Math.floor(newTotalExp / 100) + 1;
    char.stats.loreLevel = newLevel;

    if (newLevel > oldLevel) {
        // Boost stats
        char.stats.maxHp += 10;
        char.stats.hp = char.stats.maxHp;
        char.stats.atk += 2;
        char.stats.def += 1;
        char.stats.spd += 0.5;
        this.saveToStorage();
        return `${char.name} è salito al livello ${newLevel}!`;
    }

    this.saveToStorage();
    return null;
  }
}
