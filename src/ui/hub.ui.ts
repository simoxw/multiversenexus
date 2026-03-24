import type { GameCharacter } from "../types/game.types.ts";
import { bindImageFallbacks, getCharacterFallbackImage } from "./image-fallback.ts";

export class HubUI {
  static render(party: (GameCharacter | null)[], currency: number, onStartBattle: () => void, onOpenRoster: () => void, onOpenInventory: () => void) {
    const root = document.getElementById("app");
    if (!root) return;

    root.innerHTML = `
      <div class="hub-container" style="padding: 1.5rem; max-width: 500px; margin: 0 auto; text-align: center;">
        <header style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: start;">
          <div style="text-align: left;">
            <h1 style="font-size: 1.8rem; background: linear-gradient(90deg, #7c3aed, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0;">MULTIVERSE NEXUS</h1>
            <p style="color: #94a3b8; font-size: 0.8rem;">Sincronizzazione: STABILE</p>
          </div>
          <div style="background: rgba(124, 58, 237, 0.1); padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid rgba(124, 58, 237, 0.3); color: #fbbf24; font-weight: bold; font-size: 0.9rem;">
            ✨ ${currency}
          </div>
        </header>

        <section class="active-team-display" style="margin-bottom: 2.5rem;">
          <div style="display: flex; justify-content: center; gap: 0.75rem;">
            ${party.map(char => char ? `
              <div class="char-card active">
                <div class="hex-portrait ${char.characterClass.toLowerCase()}" style="width: 80px; height: 90px;">
                  <img src="${char.imageUrl}" alt="${char.name}" data-fallback="${getCharacterFallbackImage(char.id || char.name)}" data-character-name="${char.name}" data-character-franchise="${char.franchise}" />
                </div>
                <p style="margin-top: 0.5rem; font-size: 0.7rem; font-weight: bold; color: #e2e8f0;">${char.name}</p>
              </div>
            ` : `
              <div class="char-card" style="opacity: 0.2;">
                <div class="hex-portrait" style="width: 80px; height: 90px; border: 1px dashed #475569;">
                  <div style="font-size: 1.5rem;">+</div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <nav style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <button id="btn-start-battle" style="grid-column: span 2; padding: 1.2rem; font-size: 1.1rem; background: linear-gradient(135deg, #7c3aed, #4f46e5); box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);">🚀 ESPLORA CLUSTER</button>
          <button id="btn-open-roster" style="background: #1e293b; border: 1px solid #334155; padding: 1rem;">🗃️ SQUADRA</button>
          <button id="btn-open-inventory" style="background: #1e293b; border: 1px solid #334155; padding: 1rem;">🎒 ZAINO</button>
          <button disabled style="grid-column: span 2; background: #0f172a; border: 1px solid #1e293b; color: #475569; padding: 0.75rem;">💠 DATABASE (🔒 PROSSIMAMENTE)</button>
        </nav>
      </div>
    `;

    document.getElementById("btn-start-battle")?.addEventListener("click", onStartBattle);
    root.querySelectorAll(".hex-portrait").forEach((hex, i) => {
        hex.addEventListener("click", () => {
             const char = party[i];
             if (char) (window as any).onShowStats?.(char.id);
        });
    });
    document.getElementById("btn-open-roster")?.addEventListener("click", onOpenRoster);
    document.getElementById("btn-open-inventory")?.addEventListener("click", onOpenInventory);
    bindImageFallbacks(root);
  }
}
