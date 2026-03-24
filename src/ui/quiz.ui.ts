import type { QuizQuestion } from "../types/game.types.ts";

export class QuizUI {
  static render(question: QuizQuestion, onAnswer: (correct: boolean) => void) {
    const root = document.getElementById("app");
    if (!root) return;

    const modal = document.createElement("div");
    modal.className = "quiz-overlay";
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(13, 13, 26, 0.9);
      display: flex; align-items: center; justify-content: center;
      z-index: 1000; padding: 1.5rem; backdrop-filter: blur(10px);
    `;

    modal.innerHTML = `
      <div class="quiz-card" style="background: #16162d; border: 2px solid #7c3aed; padding: 2rem; border-radius: 20px; width: 100%; max-width: 400px; box-shadow: 0 0 50px rgba(124, 58, 237, 0.4);">
        <header style="text-align: center; margin-bottom: 2rem;">
          <h2 style="color: #a855f7; font-size: 0.9rem; letter-spacing: 2px; margin-bottom: 0.5rem;">FOCUS LORE</h2>
          <div class="timer-container" style="width: 100%; height: 4px; background: #334155; border-radius: 2px; overflow: hidden;">
            <div id="quiz-timer-fill" style="width: 100%; height: 100%; background: #7c3aed; transition: width 0.1s linear;"></div>
          </div>
        </header>

        <p style="font-size: 1.2rem; font-weight: bold; text-align: center; margin-bottom: 2rem;">${question.question}</p>

        <div class="options-grid" style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${question.options.map((opt, i) => `
            <button class="quiz-opt" data-idx="${i}" style="text-align: left; padding: 1rem; background: #1e293b; border: 1px solid #334155; transition: all 0.2s;">
              ${opt}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    root.appendChild(modal);

    let timeLeft = 10;
    const timerFill = document.getElementById("quiz-timer-fill");
    
    const interval = setInterval(() => {
        timeLeft -= 0.1;
        if (timerFill) timerFill.style.width = `${(timeLeft / 10) * 100}%`;
        
        if (timeLeft <= 0) {
            clearInterval(interval);
            cleanup(false);
        }
    }, 100);

    const cleanup = (correct: boolean) => {
        clearInterval(interval);
        modal.remove();
        onAnswer(correct);
    };

    modal.querySelectorAll(".quiz-opt").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-idx") || "0");
            const correct = idx === question.correctIndex;
            cleanup(correct);
        });
    });
  }
}
