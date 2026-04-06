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
    // Formula bilanciata: crescita più dolce, cap ragionevole
    // A level 1: factor ~0.6, a level 5: factor ~0.9, a level 10: factor ~1.3
    const cappedFactor = Math.min(factor, 3.0);
    
    // HP scalato diversamente dagli altri stat (cresce più lentamente)
    const hpFactor = 0.4 + (cappedFactor * 0.3);   // 0.4→1.3 range
    const statFactor = 0.5 + (cappedFactor * 0.25); // 0.5→1.25 range
    
    return {
        hp: Math.round(stats.hp * hpFactor),
        maxHp: Math.round(stats.maxHp * hpFactor),
        atk: Math.round(stats.atk * statFactor),
        def: Math.round(stats.def * statFactor),
        mag: Math.round(stats.mag * statFactor),
        res: Math.round(stats.res * statFactor),
        luck: Math.round(stats.luck * statFactor),
        spd: Math.round(stats.spd * statFactor),
        loreLevel: Math.max(1, Math.round(cappedFactor)),
    };
  }
}
