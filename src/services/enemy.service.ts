import type { Enemy, GameCharacter } from "../types/game.types.ts";
import { characterPool } from "../data/characterPool.ts";
import { ApiService } from "../services/api.service.ts";

export class EnemyService {
  /**
   * Generates an enemy based on the player's average party level.
   */
  static async generateEnemy(playerAverageLevel: number, forceBoss: boolean = false): Promise<Enemy> {
    const enemyPool = characterPool.filter(c => c.isEnemy);
    
    let metadata = enemyPool[Math.floor(Math.random() * enemyPool.length)];
    if (!metadata) {
        metadata = characterPool[Math.floor(Math.random() * characterPool.length)];
    }

    const baseCharacter = await ApiService.fetchCharacter(metadata);
    
    // Scaling logic: baseStat * (playerAverageLevel * 0.8 + 0.5)
    const scale = playerAverageLevel * 0.8 + 0.5;
    const scaledStats = this.scaleStats(baseCharacter.stats, scale);

    // 20% bonus for iconic enemy characters
    const iconicEnemies = ["voldemort", "sephiroth", "itachi"];
    if (iconicEnemies.includes(metadata.id) || metadata.isEnemy) {
        scaledStats.hp = Math.round(scaledStats.hp * 1.5); // Bosses are tougher
        scaledStats.maxHp = Math.round(scaledStats.maxHp * 1.5);
        scaledStats.atk = Math.round(scaledStats.atk * 1.25);
    }

    return {
        ...baseCharacter,
        stats: scaledStats,
        isBoss: forceBoss || metadata.isEnemy === true,
    };
  }

  private static scaleStats(stats: GameCharacter["stats"], factor: number): GameCharacter["stats"] {
    return {
        hp: Math.round(stats.hp * factor),
        maxHp: Math.round(stats.maxHp * factor),
        atk: Math.round(stats.atk * factor),
        def: Math.round(stats.def * factor),
        spd: Math.round(stats.spd * factor),
        loreLevel: Math.max(1, Math.round(factor)),
    };
  }
}
