import type { GameCharacter } from "../types/game.types.ts";
import { bindImageFallbacks, getCharacterFallbackImage } from "./image-fallback.ts";

export class RosterUI {
  static render(bench: GameCharacter[], activeTrio: (GameCharacter | null)[], onSwap: (activeIdx: number, benchIdx: number) => void, onBack: () => void) {
    const root = document.getElementById("app");
    if (!root) return;

    root.innerHTML = `
      <div class="roster-container" style="padding: 1rem; max-width: 500px; margin: 0 auto;">
        <header style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
          <button id="btn-roster-back" style="padding: 0.5rem 1rem; background: #334155;">←</button>
          <h1 style="font-size: 1.5rem;">GESTIONE ROSTER</h1>
        </header>

        <section class="roster-active-section" style="margin-bottom: 2rem; background: #16162d; padding: 1rem; border-radius: 12px;">
          <h2 style="font-size: 1rem; margin-bottom: 1rem; color: #94a3b8;">TEAM ATTIVO (Seleziona uno slot)</h2>
          <div style="display: flex; justify-content: space-around;">
             ${activeTrio.map((char, i) => char ? `
              <div class="char-card active roster-slot" data-idx="${i}">
                <div class="hex-portrait ${char.characterClass.toLowerCase()}">
                  <img src="${char.imageUrl}" alt="${char.name}" data-fallback="${getCharacterFallbackImage(char.id || char.name)}" data-character-name="${char.name}" data-character-franchise="${char.franchise}" />
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.7rem; font-weight: bold; color: #e2e8f0;">Slot ${i+1}</p>
              </div>
            ` : `
              <div class="char-card roster-slot" data-idx="${i}" style="opacity: 0.2;">
                <div class="hex-portrait empty-hex" style="border: 1px dashed #475569;">
                  <div style="font-size: 1.5rem;">+</div>
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.7rem; font-weight: bold; color: #e2e8f0;">Slot ${i+1}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="roster-bench-section">
          <h2 style="font-size: 1rem; margin-bottom: 1rem; color: #94a3b8;">PANCHINA (${bench.length} Eroi)</h2>
          <div class="bench-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;">
            ${bench.map((char, i) => `
              <div class="bench-item" data-idx="${i}" style="cursor: pointer; text-align: center;">
                <div class="hex-portrait ${char.characterClass.toLowerCase()}">
                  <img src="${char.imageUrl}" alt="${char.name}" data-fallback="${getCharacterFallbackImage(char.id || char.name)}" data-character-name="${char.name}" data-character-franchise="${char.franchise}" />
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    `;

    root.querySelectorAll(".hex-portrait").forEach((hex) => {
        hex.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent triggering parent click handlers if any
            const parentSlot = hex.closest(".roster-slot");
            const parentBenchItem = hex.closest(".bench-item");

            if (parentSlot) {
                const idx = parseInt(parentSlot.getAttribute("data-idx") || "0");
                const char = activeTrio[idx];
                if (char) (window as any).onShowStats?.(char.id);
            } else if (parentBenchItem) {
                const idx = parseInt(parentBenchItem.getAttribute("data-idx") || "0");
                const char = bench[idx];
                if (char) (window as any).onShowStats?.(char.id);
            }
        });
    });

    document.getElementById("btn-roster-back")?.addEventListener("click", onBack);
    
    // Simplistic swap logic: click a slot, then a bench item
    let selectedSlot: number | null = null;
    
    root.querySelectorAll(".roster-slot").forEach(el => {
        el.addEventListener("click", () => {
            selectedSlot = parseInt(el.getAttribute("data-idx") || "0");
            root.querySelectorAll(".roster-slot").forEach(s => (s as HTMLElement).style.outline = "none");
            (el as HTMLElement).style.outline = "2px solid #7c3aed";
            (el as HTMLElement).style.borderRadius = "8px";
        });
    });

    root.querySelectorAll(".bench-item").forEach(el => {
        el.addEventListener("click", () => {
            if (selectedSlot !== null) {
                const benchIdx = parseInt(el.getAttribute("data-idx") || "0");
                onSwap(selectedSlot, benchIdx);
            } else {
                alert("Seleziona prima uno slot nel team attivo!");
            }
        });
    });
    bindImageFallbacks(root);
  }
}
