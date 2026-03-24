import type { Enemy, GameCharacter } from "../types/game.types.ts";
import { characterPool } from "../data/characterPool.ts";
import type { CharacterMetadata } from "../data/characterPool.ts";
import { ApiService } from "../services/api.service.ts";

export class EnemyService {
  /**
   * Generates an enemy based on the player's average party level.
   * @param playerAverageLevel The average level of the player's active party.
   * @param forceBoss Whether to force a boss encounter.
   */
  static async generateEnemy(playerAverageLevel: number, forceBoss: boolean = false): Promise<Enemy> {
    // Filter pool for enemies or potential bosses
    const enemyPool = characterPool.filter(c => c.isEnemy || (forceBoss && c.id.includes("boss")));
    
    // Pick a random one or pick from API if pool is empty
    let metadata: CharacterMetadata;
    if (enemyPool.length > 0) {
        metadata = enemyPool[Math.floor(Math.random() * enemyPool.length)];
    } else {
        // Fallback to a random character from the pool
        metadata = characterPool[Math.floor(Math.random() * characterPool.length)];
    }

    const baseCharacter = await ApiService.fetchCharacter(metadata);
    
    // Scaling logic: Enemy level = player level + (0-20%)
    const scalingFactor = 1 + (Math.random() * 0.2);
    const scaledStats = this.scaleStats(baseCharacter.stats, playerAverageLevel * scalingFactor);

    return {
        ...baseCharacter,
        stats: scaledStats,
        isBoss: forceBoss || metadata.isEnemy === true, // Determine boss status
    };
  }

  private static scaleStats(stats: GameCharacter["stats"], targetLevel: number): GameCharacter["stats"] {
    const factor = targetLevel / stats.loreLevel;
    return {
        hp: Math.round(stats.hp * factor),
        maxHp: Math.round(stats.maxHp * factor),
        atk: Math.round(stats.atk * factor),
        def: Math.round(stats.def * factor),
        spd: Math.round(stats.spd * factor),
        loreLevel: Math.round(targetLevel),
    };
  }
}
