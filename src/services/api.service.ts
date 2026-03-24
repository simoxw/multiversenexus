import type { GameCharacter, CharacterStats, Resource } from "../types/game.types.ts";
import type { CharacterMetadata } from "../data/characterPool.ts";
import { characterExtraData } from "../data/characterExtra.ts";
import { getCharacterFallbackImage } from "../ui/image-fallback.ts";
import charactersData from "../data/characters.json";

export class ApiService {
  private static JIKAN_BASE = "https://api.jikan.moe/v4";
  private static HP_API_BASE = "https://hp-api.onrender.com/api";
  private static DISNEY_API_BASE = "https://api.disneyapi.dev/character";
  private static readonly CACHE_KEY = "mv_character_cache_v2";
  private static readonly CACHE_TTL_MS = 1000 * 60 * 60 * 24 * 3; // 3 days

  static async fetchCharacter(metadata: CharacterMetadata): Promise<GameCharacter> {
    try {
      // Check local JSON first (Simplified IDs)
      const allChars = [...charactersData.Mysterians, ...charactersData.Ethereals, ...charactersData.Strikers];
      const localData = allChars.find(c => c.id === metadata.id);
      
      const cached = this.getCachedCharacter(metadata.id);
      if (cached) {
        // Force update image path if it's local
        if (localData?.img && localData.img.startsWith("characters/") && cached.imageUrl !== localData.img) {
          cached.imageUrl = localData.img;
          this.setCachedCharacter(cached);
        }
        return cached;
      }

      let data: any;
      let imageUrl = "";
      let name = metadata.name;

      // use localData from above
      if (localData?.img && localData.img.startsWith("/characters/")) {
        imageUrl = localData.img;
      } else if (characterExtraData[metadata.id]) {
        imageUrl = characterExtraData[metadata.id].imageUrl;
      }

      switch (metadata.apiSource) {
        case "jikan":
          data = await this.fetchJikan(metadata.sourceId, metadata.name);
          imageUrl = data?.images?.jpg?.large_image_url || imageUrl;
          name = data?.name_kanji ? `${data.name} (${data.name_kanji})` : (data?.name || name);
          break;
        case "hp-api":
          data = await this.fetchHPApi(metadata.sourceId, metadata.name);
          imageUrl = data?.image || imageUrl;
          name = data?.name || name;
          break;
        case "disney":
          data = await this.fetchDisneyApi(metadata.sourceId);
          imageUrl = data?.imageUrl || imageUrl;
          name = data?.name || name;
          break;
        case "ffapi":
          // Special fallback for FF characters using name or hardcoded data
          if (!imageUrl) imageUrl = `https://placehold.co/400x400/16162d/ef4444?text=${encodeURIComponent(metadata.name)}`;
          break;
        case "custom":
        default:
          if (!imageUrl) imageUrl = `https://placehold.co/400x400/16162d/a855f7?text=${encodeURIComponent(metadata.name)}`;
          break;
      }
      if (!imageUrl) {
        imageUrl = `https://placehold.co/400x400/16162d/a855f7?text=${encodeURIComponent(metadata.name)}`;
      }

      const character = {
        id: metadata.id,
        name: name,
        imageUrl: imageUrl,
        franchise: metadata.franchise,
        characterClass: metadata.characterClass,
        stats: this.generateStats(metadata),
        resource: this.generateResource(metadata),
        isAlive: true,
      };
      this.setCachedCharacter(character);
      return character;
    } catch (error) {
      console.error(`Error fetching character ${metadata.name}:`, error);
      const fallback = this.fallbackCharacter(metadata);
      this.setCachedCharacter(fallback);
      return fallback;
    }
  }

  private static async fetchJikan(id: string, characterName: string) {
    const response = await fetch(`${this.JIKAN_BASE}/characters/${id}`);
    const json = await response.json();
    if (response.ok && json?.data) {
      return json.data;
    }

    // Fallback: search by character name when static IDs become stale.
    const searchResponse = await fetch(`${this.JIKAN_BASE}/characters?q=${encodeURIComponent(characterName)}&limit=1`);
    const searchJson = await searchResponse.json();
    const candidate = searchJson?.data?.[0];
    if (searchResponse.ok && candidate) {
      return candidate;
    }

    throw new Error(`Jikan data not found for id: ${id}, name: ${characterName}`);
  }

  private static async fetchHPApi(id: string, characterName: string) {
    // Primary endpoint (historical format)
    const characterResponse = await fetch(`${this.HP_API_BASE}/character/${id}`);
    const characterJson = await characterResponse.json();
    if (Array.isArray(characterJson) && characterJson[0]) return characterJson[0];
    if (characterJson && typeof characterJson === "object" && !Array.isArray(characterJson)) return characterJson;

    // Fallback endpoint: full list, then match by id.
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
    // Note: Disney API might need search or specific ID. 
    // This is a simplified version.
    const response = await fetch(`${this.DISNEY_API_BASE}?name=${encodeURIComponent(id)}`);
    const json = await response.json();
    const data = json?.data;
    if (Array.isArray(data)) return data[0] || null;
    return data || null;
  }

  private static generateStats(_metadata: CharacterMetadata): CharacterStats {
    // Base stats generation logic
    const base = 100;
    return {
      hp: base * 10,
      maxHp: base * 10,
      atk: base,
      def: base,
      spd: base,
      loreLevel: 1,
    };
  }

  private static generateResource(metadata: CharacterMetadata): Resource {
    let type: Resource["type"] = "MP";
    if (metadata.characterClass === "Striker" && metadata.franchise === "anime") type = "Ki";
    if (metadata.franchise === "scooby") type = "Courage";

    return {
      type,
      current: 100,
      max: 100,
    };
  }

  private static fallbackCharacter(metadata: CharacterMetadata): GameCharacter {
    const fallbackImage = characterExtraData[metadata.id]?.imageUrl || getCharacterFallbackImage(metadata.id || metadata.name);
    return {
      id: metadata.id,
      name: metadata.name,
      imageUrl: fallbackImage,
      franchise: metadata.franchise,
      characterClass: metadata.characterClass,
      stats: this.generateStats(metadata),
      resource: this.generateResource(metadata),
      isAlive: true,
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
