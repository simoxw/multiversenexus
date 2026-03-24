import type { QuizQuestion, Enemy } from "../types/game.types.ts";
import quizPool from "../data/quizPool.json";

export class QuizService {
  /**
   * Generates a quiz question for the given enemy.
   * In a real implementation, this would call Gemini AI with the enemy's lore metadata.
   * For now, it pulls from the local pool based on the enemy's franchise.
   */
  static async generateQuiz(enemy: Enemy): Promise<QuizQuestion> {
    const history = JSON.parse(localStorage.getItem("quiz_history") || "{}");
    const now = Date.now();
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

    // 1. Try character-specific pool
    const charPool = (quizPool as any).characters.find((c: any) => c.characterId === enemy.id);
    if (charPool && charPool.questions.length > 0) {
        const available = charPool.questions.filter((q: any) => (now - (history[q.question] || 0)) > TWENTY_FOUR_HOURS);
        if (available.length > 0) return this.pickAndStore(available, history, now);
    }

    // 2. Try franchise-level pool
    const franchisePool = (quizPool as any).franchises?.find((f: any) => f.franchise === enemy.franchise);
    if (franchisePool && franchisePool.questions.length > 0) {
        const available = franchisePool.questions.filter((q: any) => (now - (history[q.question] || 0)) > TWENTY_FOUR_HOURS);
        if (available.length > 0) return this.pickAndStore(available, history, now);
    }

    // 3. Fallback to generic/Gemini
    return {
        question: `Qual è il potere principale di ${enemy.name}?`,
        options: ["Manipolazione Magica", "Forza Bruta", "Velocità Estrema", "Intelletto Superiore"],
        correctIndex: 0,
        difficulty: "easy",
        source: "local",
        franchise: enemy.franchise
    };
  }

  private static pickAndStore(questions: any[], history: any, now: number): QuizQuestion {
    const picked = questions[Math.floor(Math.random() * questions.length)];
    history[picked.question] = now;
    localStorage.setItem("quiz_history", JSON.stringify(history));
    return picked as QuizQuestion;
  }
}
