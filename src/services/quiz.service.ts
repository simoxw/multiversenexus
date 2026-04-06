import type { QuizQuestion, Enemy } from "../types/game.types.ts";
import quizPool from "../data/quizPool.json";

export class QuizService {
  // Track last question to avoid immediate repetition within same session
  private static lastQuestionText = "";

  static async generateQuiz(enemy: Enemy, moveId?: string): Promise<QuizQuestion> {
    const history = JSON.parse(localStorage.getItem("quiz_history") || "{}");
    const now = Date.now();
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
    const isLoreBreak = !!moveId;

    // Build FULL pool from all characters and all franchises
    const allQuestions: any[] = [];
    const preferredQuestions: any[] = [];

    (quizPool as any).characters.forEach((c: any) => {
        c.questions.forEach((q: any) => {
            allQuestions.push(q);
            if (c.characterId === enemy.id || c.characterId.endsWith(`-${enemy.id}`)) {
                preferredQuestions.push(q);
            }
        });
    });
    (quizPool as any).franchises.forEach((f: any) => {
        f.questions.forEach((q: any) => {
            allQuestions.push(q);
            if (f.franchise === enemy.franchise) {
                preferredQuestions.push(q);
            }
        });
    });

    // Filter by difficulty if lore break
    const applyDifficulty = (pool: any[]) =>
        isLoreBreak ? pool.filter((q: any) => q.difficulty === "hard" || q.difficulty === "medium") : pool;

    // Select pool: preferred first, then all, never empty
    const pickFrom = (pool: any[]) => {
        const notRecent = pool.filter((q: any) =>
            q.question !== QuizService.lastQuestionText &&
            (now - (history[q.question] || 0)) > TWENTY_FOUR_HOURS
        );
        const notSame = pool.filter((q: any) => q.question !== QuizService.lastQuestionText);
        return notRecent.length > 0 ? notRecent : (notSame.length > 0 ? notSame : pool);
    };

    const preferred = applyDifficulty(preferredQuestions);
    const all = applyDifficulty(allQuestions);

    const candidates = pickFrom(preferred.length > 0 ? preferred : all);
    const final = candidates.length > 0 ? candidates : all;

    if (final.length > 0) {
        return this.pickAndStore(final, history, now);
    }

    return {
        question: `Qual è il potere principale di ${enemy.name}?`,
        options: ["Manipolazione Magica", "Forza Bruta", "Velocità Estrema", "Intelletto Superiore"],
        correctIndex: 0,
        difficulty: isLoreBreak ? "hard" : "easy",
        source: "local",
        franchise: enemy.franchise
    };
  }

  /**
   * Generates a random quiz question for the Hub Archive mode with categorization.
   */
  static async generateHubQuiz(category: string = "general"): Promise<QuizQuestion> {
    let allQuestions: QuizQuestion[] = [];
    
    if (category === "general") {
        // Collect everything
        (quizPool as any).characters.forEach((c: any) => allQuestions.push(...c.questions));
        (quizPool as any).franchises.forEach((f: any) => allQuestions.push(...f.questions));
    } else {
        // Collect by franchise matching
        (quizPool as any).franchises.forEach((f: any) => {
            if (f.franchise === category) allQuestions.push(...f.questions);
        });
        (quizPool as any).characters.forEach((c: any) => {
            // Find character's franchise if not directly set
            if (c.franchise === category) allQuestions.push(...c.questions);
        });
    }

    if (allQuestions.length === 0) {
        return {
            question: "Chi ha creato il Multiverso?",
            options: ["Il Direttore", "I Saggi", "Gli Antichi", "Nessuno"],
            correctIndex: 0,
            difficulty: "medium",
            source: "local",
            franchise: category as any
        };
    }

    return allQuestions[Math.floor(Math.random() * allQuestions.length)];
  }

  private static pickAndStore(questions: any[], history: any, now: number): QuizQuestion {
    const picked = questions[Math.floor(Math.random() * questions.length)];
    QuizService.lastQuestionText = picked.question;
    history[picked.question] = now;
    localStorage.setItem("quiz_history", JSON.stringify(history));
    return picked as QuizQuestion;
  }
}
