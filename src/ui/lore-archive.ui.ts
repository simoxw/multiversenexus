import { QuizService } from "../services/quiz.service.ts";
import { QuizUI } from "./quiz.ui.ts";
import { characterPool } from "../data/characterPool.ts";
import { getCharacterFallbackImage, bindImageFallbacks } from "./image-fallback.ts";

export class LoreArchiveUI {
  static render(lorePoints: number, unlockedChars: string[], onBack: () => void, onUnlock: (id: string, cost: number) => void, onChallengeComplete: (points: number) => void) {
    const root = document.getElementById("app");
    if (!root) return;

    // Special characters to unlock
    const specialChars = [
      { id: "vegeta",           cost: 1000, franchise: "anime" },
      { id: "hermione-granger", cost: 800,  franchise: "harry_potter" },
      { id: "shaggy-rogers",    cost: 600,  franchise: "scooby" },
      { id: "sephiroth",        cost: 1500, franchise: "final_fantasy" }
    ];

    root.innerHTML = `
      <div class="archive-container" style="padding: 1.5rem; max-width: 600px; margin: 0 auto; color: #e2e8f0;">
        <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <button id="btn-back-hub" style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 1.2rem;">←</button>
          <h1 style="font-size: 1.5rem; background: linear-gradient(90deg, #fbbf24, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0;">BIBLIOTECA DELLE OMBRE</h1>
          <div style="background: rgba(251, 191, 36, 0.1); padding: 0.4rem 0.8rem; border-radius: 12px; border: 1px solid rgba(251, 191, 36, 0.3); color: #fbbf24; font-weight: bold;">
            📚 ${lorePoints} LP
          </div>
        </header>

        <section class="daily-challenge" style="background: linear-gradient(135deg, #1e1b4b, #312e81); padding: 1.5rem; border-radius: 16px; margin-bottom: 2rem; border: 1px solid #4338ca; text-align: center;">
          <h2 style="margin-top: 0; font-size: 1.2rem;">⚡ SFIDA QUOTIDIANA</h2>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 1.2rem;">Rispondi a 5 quiz per ottenere 50 Lore Points!</p>
          <button id="btn-start-challenge" style="background: #fbbf24; color: #000; font-weight: bold; padding: 0.8rem 1.5rem; border-radius: 10px; border: none; cursor: pointer; transition: transform 0.2s;">INIZIA SFIDA</button>
        </section>

        <section class="unlock-list">
          <h3 style="font-size: 1rem; color: #94a3b8; margin-bottom: 1rem;">SBLOCCA PERSONAGGI SPECIALI</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            ${specialChars.map(char => {
              const poolEntry = characterPool.find(c => c.id === char.id);
              const isUnlocked = unlockedChars.includes(char.id);
              return `
                <div class="unlock-card" style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 12px; border: 1px solid ${isUnlocked ? '#22c55e' : '#334155'}; text-align: center;">
                  <div class="hex-portrait ${poolEntry?.franchise || char.franchise}" style="width: 70px; height: 80px; margin: 0 auto 0.5rem auto; opacity: ${isUnlocked ? 1 : 0.5};">
                     <img src="" data-fallback="${getCharacterFallbackImage(char.id)}" />
                  </div>
                  <h4 style="margin: 0.5rem 0 0.2rem 0; font-size: 0.9rem;">${poolEntry?.name || char.id}</h4>
                  <p style="font-size: 0.7rem; color: #64748b; margin-bottom: 0.8rem;">FRANCHISE: ${(poolEntry?.franchise || char.franchise).toUpperCase()}</p>
                  ${isUnlocked ? `
                    <span style="color: #22c55e; font-size: 0.8rem; font-weight: bold;">SBLOCCATO</span>
                  ` : `
                    <button class="btn-unlock-char" data-id="${char.id}" data-cost="${char.cost}" ${lorePoints < char.cost ? 'disabled' : ''} style="width: 100%; background: #334155; color: white; border: none; padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">
                      Sblocca (${char.cost} LP)
                    </button>
                  `}
                </div>
              `;
            }).join('')}
          </div>
        </section>
      </div>

      <style>
        .hex-portrait.anime { border-color: #ef4444; }
        .hex-portrait.harry_potter { border-color: #7c3aed; }
        .hex-portrait.scooby { border-color: #22c55e; }
        .hex-portrait.final_fantasy { border-color: #3b82f6; }
        .hex-portrait.disney { border-color: #fce71b; }
      </style>
    `;

    document.getElementById("btn-back-hub")?.addEventListener("click", onBack);
    document.getElementById("btn-start-challenge")?.addEventListener("click", () => this.startChallenge(onChallengeComplete));
    root.querySelectorAll(".btn-unlock-char").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id")!;
        const cost = parseInt(btn.getAttribute("data-cost")!);
        onUnlock(id, cost);
      });
    });
    bindImageFallbacks(root);
  }

  private static async startChallenge(onComplete: (points: number) => void) {
    let count = 0;
    const TOTAL = 5;

    const askNext = async () => {
        if (count === TOTAL) {
            alert("Complimenti! Hai completato la Sfida Quotidiana e ottenuto 50 Lore Points!");
            onComplete(50);
            return;
        }

        const quiz = await QuizService.generateHubQuiz();
        QuizUI.render(quiz, (isCorrect) => {
            if (isCorrect) {
                count++;
                askNext();
            } else {
                alert("Peccato! Risposta errata. Riprova domani per ottenere i Lore Points!");
                onComplete(0);
            }
        });
    };

    askNext();
  }
}
