import type { GameCharacter } from "../types/game.types.ts";
import { bindImageFallbacks, getCharacterFallbackImage } from "./image-fallback.ts";

export class RosterUI {
  static render(bench: GameCharacter[], activeTrio: (GameCharacter | null)[], onSwap: (activeIdx: number, benchIdx: number) => void, onRemove: (activeIdx: number) => void, onBack: () => void) {
    const root = document.getElementById("app");
    if (!root) return;

    root.innerHTML = `
      <div class="roster-container" style="padding: 1rem; max-width: 500px; margin: 0 auto; color: #e2e8f0; font-family: 'Inter', sans-serif;">
        <header style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
          <button id="btn-roster-back" style="padding: 0.8rem; background: rgba(51, 65, 85, 0.4); border: 1px solid #475569; border-radius: 50%; width: 45px; height: 45px; cursor: pointer; color: white;">←</button>
          <h1 style="font-size: 1.5rem; background: linear-gradient(90deg, #7c3aed, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">GESTIONE ROSTER</h1>
        </header>

        <section class="roster-active-section" style="margin-bottom: 2.5rem; background: rgba(22, 22, 45, 0.7); padding: 1.5rem; border-radius: 20px; border: 1px solid #312e81; box-shadow: 0 8px 32px rgba(0,0,0,0.4);">
          <h2 style="font-size: 0.9rem; margin-bottom: 1.2rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">TEAM ATTIVO (Seleziona uno slot)</h2>
          <div style="display: flex; justify-content: space-around; gap: 0.5rem;">
             ${activeTrio.map((char, i) => char ? `
              <div class="char-card active roster-slot" data-idx="${i}" style="position: relative; transition: transform 0.3s; cursor: pointer;">
                <button class="btn-remove-from-party" data-idx="${i}" style="position: absolute; top: -5px; right: -5px; width: 22px; height: 22px; background: #ef4444; border: none; border-radius: 50%; color: white; font-size: 12px; font-weight: bold; cursor: pointer; z-index: 10; border: 2px solid #16162d;">×</button>
                <div class="hex-portrait ${char.characterClass.toLowerCase()} btn-show-stats" data-id="${char.id}">
                  <img src="${char.imageUrl}" alt="${char.name}" data-fallback="${getCharacterFallbackImage(char.id || char.name)}" data-character-name="${char.name}" data-character-franchise="${char.franchise}" />
                  <div class="info-badge" style="position: absolute; bottom: 0; right: 8px; background: #7c3aed; color: white; font-size: 10px; padding: 2px 5px; border-radius: 4px; border: 1px solid #16162d;">INFO</div>
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.65rem; font-weight: bold; color: #e2e8f0; text-align: center;">${char.name}</p>
              </div>
            ` : `
              <div class="char-card roster-slot empty" data-idx="${i}" style="opacity: 0.4; transition: all 0.3s; cursor: pointer;">
                <div class="hex-portrait empty-hex" style="border: 2px dashed #475569; background: rgba(71, 85, 105, 0.1);">
                  <div style="font-size: 1.5rem; color: #475569;">+</div>
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.65rem; font-weight: bold; color: #475569; text-align: center;">Slot ${i+1}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="roster-bench-section">
          <h2 style="font-size: 0.9rem; margin-bottom: 1.2rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">PANCHINA (${bench.length} Eroi)</h2>
          <div class="bench-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.8rem;">
            ${bench.map((char, i) => `
              <div class="bench-item" data-idx="${i}" style="cursor: pointer; text-align: center; transition: transform 0.2s;">
                <div class="hex-portrait ${char.characterClass.toLowerCase()} btn-show-stats" data-id="${char.id}">
                  <img src="${char.imageUrl}" alt="${char.name}" data-fallback="${getCharacterFallbackImage(char.id || char.name)}" data-character-name="${char.name}" data-character-franchise="${char.franchise}" />
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      </div>
    `;

    // Event Handlers
    document.getElementById("btn-roster-back")?.addEventListener("click", onBack);

    let selectedSlot: number | null = null;

    // Show Stats
    root.querySelectorAll(".btn-show-stats").forEach(el => {
      el.addEventListener("click", (e) => {
        e.stopPropagation(); // VERY IMPORTANT: avoid triggering selection
        const charId = el.getAttribute("data-id");
        if (charId) (window as any).onShowStats?.(charId);
      });
    });
    
    // Select Slot
    root.querySelectorAll(".roster-slot").forEach(el => {
      el.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).classList.contains("btn-remove-from-party")) return;
        if ((e.target as HTMLElement).closest(".btn-show-stats")) return;

        selectedSlot = parseInt(el.getAttribute("data-idx") || "0");
        root.querySelectorAll(".roster-slot").forEach(s => {
          (s as HTMLElement).style.transform = "scale(1)";
          (s as HTMLElement).style.outline = "none";
        });
        (el as HTMLElement).style.transform = "scale(1.1)";
        (el as HTMLElement).style.outline = "2px solid #7c3aed";
      });
    });

    // Remove from Party
    root.querySelectorAll(".btn-remove-from-party").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute("data-idx") || "0");
        onRemove(idx);
      });
    });

    // Swap from Bench
    root.querySelectorAll(".bench-item").forEach(el => {
      el.addEventListener("click", (e) => {
        // If clicked portrait, it's stats (handled above), if clicked border/container, it's swap
        if ((e.target as HTMLElement).closest(".btn-show-stats")) return;

        if (selectedSlot !== null) {
          const benchIdx = parseInt(el.getAttribute("data-idx") || "0");
          onSwap(selectedSlot, benchIdx);
        } else {
          const header = root.querySelector("h2");
          if (header) {
             const original = header.innerText;
             header.innerText = "👉 SELEZIONA PRIMA UNO SLOT!";
             header.style.color = "#fbbf24";
             setTimeout(() => {
               header.innerText = original;
               header.style.color = "#94a3b8";
             }, 2000);
          }
        }
      });
    });

    bindImageFallbacks(root);
  }
}
