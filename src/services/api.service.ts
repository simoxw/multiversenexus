import type { GameCharacter, Resource } from "../types/game.types.ts";
import type { CharacterMetadata } from "../data/characterPool.ts";
import charactersData from "../data/characters.json";
import { characterStats } from "../data/characterStats.ts";

export class ApiService {
  private static JIKAN_BASE = "https://api.jikan.moe/v4";
  private static HP_API_BASE = "https://hp-api.onrender.com/api";
  private static DISNEY_API_BASE = "https://api.disneyapi.dev/character";
  private static readonly CACHE_KEY = "mv_character_cache_v6"; // bumped to v6 to force fresh data sync
  private static readonly CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 3; // 3 days

  static async fetchCharacter(metadata: CharacterMetadata): Promise<GameCharacter> {
    try {
      const allChars = [...charactersData.Mysterians, ...charactersData.Ethereals, ...charactersData.Strikers];
      const localData = allChars.find(c => c.id === metadata.id);

      // Image: ALWAYS use local file from characters.json, or dicebear fallback. Never an external API image.
      let imageUrl = localData?.img || `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(metadata.id)}`;
      if (localData?.img && !localData.img.startsWith("/")) {
          imageUrl = `/${localData.img}`;
      }
      
      const cached = this.getCachedCharacter(metadata.id);
      if (cached) {
        // SAFETY: Ensure new fields are present even in old cache versions
        if (cached.currentExp === undefined) cached.currentExp = 0;
        if (cached.expToNextLevel === undefined) cached.expToNextLevel = 100;
        if (!cached.stats.luck) cached.stats.luck = 10;
        if (!cached.stats.mag) cached.stats.mag = 20;
        if (!cached.stats.res) cached.stats.res = 20;
        
        // Always override image with the local one (in case cache has old API URLs)
        cached.imageUrl = imageUrl;
        return cached;
      }

      let name = metadata.name;
      let apiData: any;

      switch (metadata.apiSource) {
        case "jikan":
          apiData = await this.fetchJikan(metadata.sourceId, metadata.name);
          name = this.cleanName(apiData?.name || name);
          break;
        case "hp-api":
          apiData = await this.fetchHPApi(metadata.sourceId, metadata.name);
          name = apiData?.name || name;
          break;
        case "disney":
          apiData = await this.fetchDisneyApi(metadata.sourceId);
          name = apiData?.name || name;
          break;
        default:
          break;
      }

      const character: GameCharacter = {
        id: metadata.id,
        name: name,
        imageUrl: imageUrl,  // Always local
        franchise: metadata.franchise,
        characterClass: metadata.characterClass,
        role: characterStats[metadata.id]?.role ?? "balanced",
        stats: this.generateStats(metadata),
        resource: {
          type: this.determineResourceType(metadata),
          current: characterStats[metadata.id]?.mp || 100,
          max: characterStats[metadata.id]?.mp || 100,
        },
        isAlive: true,
        activeEffects: [],
        currentExp: 0,
        expToNextLevel: 100,
        awakeningPoints: 0,
        equipment: {
          weapon: null,
          armor: null,
          accessory: null
        }
      };

      this.setCachedCharacter(character);
      return character;
    } catch (error) {
      console.error(`Error fetching character ${metadata.name}:`, error);
      return this.fallbackCharacter(metadata);
    }
  }

  private static async fetchJikan(id: string, characterName: string) {
    const response = await fetch(`${this.JIKAN_BASE}/characters/${id}`);
    const json = await response.json();
    if (response.ok && json?.data) return json.data;

    const searchResponse = await fetch(`${this.JIKAN_BASE}/characters?q=${encodeURIComponent(characterName)}&limit=1`);
    const searchJson = await searchResponse.json();
    const candidate = searchJson?.data?.[0];
    if (searchResponse.ok && candidate) return candidate;

    throw new Error(`Jikan data not found for id: ${id}, name: ${characterName}`);
  }

  private static async fetchHPApi(id: string, characterName: string) {
    const characterResponse = await fetch(`${this.HP_API_BASE}/character/${id}`);
    const characterJson = await characterResponse.json();
    if (Array.isArray(characterJson) && characterJson[0]) return characterJson[0];
    if (characterJson && typeof characterJson === "object" && !Array.isArray(characterJson)) return characterJson;

    const listResponse = await fetch(`${this.HP_API_BASE}/characters`);
    const listJson = await listResponse.json();
    if (Array.isArray(listJson)) {
      const matched = listJson.find((c: any) => c?.id === id);
      if (matched) return matched;
      const byName = listJson.find((c: any) => c?.name?.toLowerCase() === characterName.toLowerCase());
      if (byName) return byName;
    }

    throw new Error(`HP API data not found for id: ${id}, name: ${characterName}`);
  }

  private static async fetchDisneyApi(id: string) {
    const response = await fetch(`${this.DISNEY_API_BASE}?name=${encodeURIComponent(id)}`);
    const json = await response.json();
    const data = json?.data;
    if (Array.isArray(data)) return data[0] || null;
    return data || null;
  }

  private static determineResourceType(metadata: CharacterMetadata): Resource["type"] {
    if (metadata.characterClass === "Striker" && metadata.franchise === "anime") return "Ki";
    if (metadata.franchise === "scooby") return "Courage";
    return "MP";
  }

  private static generateStats(metadata: CharacterMetadata): any {
    const base = characterStats[metadata.id]
    if (base) {
      return {
        hp: base.hp,
        maxHp: base.hp,
        atk: base.atk,
        def: base.def,
        mag: base.mag || 20,
        res: base.res || 20,
        luck: base.luck || 10,
        spd: base.spd,
        loreLevel: 1
      }
    }
    return { hp:900, maxHp:900, atk:100, def:100, mag:100, res:100, luck:50, spd:100, loreLevel:1 }
  }

  private static cleanName(name: string): string {
    // Remove Kanji, Hiragana, Katakana or any CJK characters usually found in parentheses
    // This covers (斎藤 一), (ピッコロ), etc.
    return name
      .replace(/\s*\([\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]+\)/g, "")
      .replace(/\s*\[[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]+\]/g, "")
      .trim();
  }

  private static fallbackCharacter(metadata: CharacterMetadata): GameCharacter {
    const allChars = [...charactersData.Mysterians, ...charactersData.Ethereals, ...charactersData.Strikers];
    const localData = allChars.find(c => c.id === metadata.id);
    const imageUrl = localData?.img || `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(metadata.id)}`;
    return {
      id: metadata.id,
      name: metadata.name,
      imageUrl: imageUrl,
      franchise: metadata.franchise,
      characterClass: metadata.characterClass,
      role: characterStats[metadata.id]?.role ?? "balanced",
      stats: this.generateStats(metadata),
      resource: {
        type: this.determineResourceType(metadata),
        current: characterStats[metadata.id]?.mp || 100,
        max: characterStats[metadata.id]?.mp || 100,
      },
      isAlive: true,
      activeEffects: [],
      currentExp: 0,
      expToNextLevel: 100,
      awakeningPoints: 0,
      equipment: {
        weapon: null,
        armor: null,
        accessory: null
      }
    };
  }

  private static getCachedCharacter(id: string): GameCharacter | null {
    try {
      const raw = localStorage.getItem(this.CACHE_KEY);
      if (!raw) return null;
      const cache = JSON.parse(raw) as Record<string, { ts: number; value: GameCharacter }>;
      const hit = cache[id];
      if (!hit) return null;
      if ((Date.now() - hit.ts) > this.CACHE_TTL_MS) return null;
      return hit.value;
    } catch {
      return null;
    }
  }

  private static setCachedCharacter(character: GameCharacter) {
    try {
      const raw = localStorage.getItem(this.CACHE_KEY);
      const cache = raw ? JSON.parse(raw) : {};
      cache[character.id] = { ts: Date.now(), value: character };
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(cache));
    } catch {
      // Ignore cache write errors.
    }
  }
}
