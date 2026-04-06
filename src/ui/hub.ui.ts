import type { GameCharacter } from "../types/game.types.ts";
import { bindImageFallbacks, getCharacterFallbackImage } from "./image-fallback.ts";

export class HubUI {
  static render(
    party: (GameCharacter | null)[], 
    currency: number, 
    onStartBattle: () => void, 
    onOpenRoster: () => void, 
    onOpenInventory: () => void,
    onOpenShop: () => void,
    onOpenCodes: () => void
  ) {
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
            ${party.map((char) => char ? `
              <div class="char-card active" style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 0.4rem;">
                <div class="hex-portrait ${char.role}" style="width: 70px; height: 80px; position: relative; cursor: pointer; transition: transform 0.2s; overflow: hidden;">
                  <img src="${char.imageUrl}" alt="${char.name}" style="object-fit: cover; width: 100%; height: 100%; mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);" data-fallback="${getCharacterFallbackImage(char.id)}" />
                </div>
                <div style="position: absolute; bottom: 34px; right: 6px; background: rgba(251, 191, 36, 0.95); color: #000; font-weight: bold; font-size: 0.62rem; padding: 1px 5px; border-radius: 999px; border: 1px solid rgba(0, 0, 0, 0.2); box-shadow: 0 0 6px rgba(0,0,0,0.25);">Lvl ${char.stats.loreLevel}</div>
                <div class="mini-bars" style="width: 60px;">
                  <div style="height: 4px; background: rgba(0,0,0,0.5); border-radius: 2px; margin-bottom: 2px; overflow: hidden;">
                    <div style="height: 100%; width: ${(char.stats.hp / char.stats.maxHp) * 100}%; background: #10b981;"></div>
                  </div>
                    <div style="height: 3px; background: rgba(0,0,0,0.5); border-radius: 2px; overflow: hidden;">
                      <div style="height: 100%; width: ${char.expToNextLevel && char.expToNextLevel > 0 ? Math.min(100, (char.currentExp / char.expToNextLevel) * 100) : 0}%; background: #0ea5e9; box-shadow: 0 0 5px rgba(14, 165, 233, 0.4);"></div>
                    </div>
                </div>
                <p style="margin: 0; font-size: 0.65rem; font-weight: bold; color: #e2e8f0; width: 70px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${char.name}</p>
              </div>
            ` : `
              <div class="char-card empty" style="opacity: 0.3;">
                <div class="hex-portrait" style="width: 70px; height: 80px; border: 1px dashed #475569; display: flex; align-items: center; justify-content: center;">
                  <div style="font-size: 1.5rem; color: #475569;">+</div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <nav style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
          <button id="btn-start-battle" style="grid-column: span 2; padding: 1.2rem; font-size: 1.1rem; background: linear-gradient(135deg, #7c3aed, #4f46e5); box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3); border-radius: 12px; font-weight: bold; cursor: pointer; border: none; color: white;">🚀 ESPLORA CLUSTER</button>
          <button id="btn-open-roster" style="background: #1e293b; border: 1px solid #334155; padding: 1rem; border-radius: 10px; color: #e2e8f0; cursor: pointer; transition: background 0.2s;">🗃️ SQUADRA</button>
          <button id="btn-open-inventory" style="background: #1e293b; border: 1px solid #334155; padding: 1rem; border-radius: 10px; color: #e2e8f0; cursor: pointer; transition: background 0.2s;">🎒 ZAINO</button>
          <button id="btn-open-shop" style="background: #312e81; border: 1px solid #4338ca; padding: 1rem; border-radius: 10px; color: #fbbf24; cursor: pointer; font-weight: bold;">🏪 NEGOZIO</button>
          <button id="btn-open-codes" style="background: #065f46; border: 1px solid #059669; padding: 1rem; border-radius: 10px; color: #10b981; cursor: pointer; font-weight: bold;">🔑 CODICI</button>
          <button id="btn-open-archive" style="grid-column: span 2; background: linear-gradient(90deg, #1e293b, #312e81); border: 1px solid #4338ca; color: #e0e7ff; padding: 1rem; border-radius: 10px; cursor: pointer; font-weight: bold;">📚 ARCHIVIO LORE</button>
        </nav>
      </div>
    `;

    document.getElementById("btn-start-battle")?.addEventListener("click", onStartBattle);
    document.getElementById("btn-open-roster")?.addEventListener("click", onOpenRoster);
    document.getElementById("btn-open-inventory")?.addEventListener("click", onOpenInventory);
    document.getElementById("btn-open-shop")?.addEventListener("click", onOpenShop);
    document.getElementById("btn-open-codes")?.addEventListener("click", onOpenCodes);
    document.getElementById("btn-open-archive")?.addEventListener("click", () => (window as any).onOpenArchive?.());
    
    root.querySelectorAll(".hex-portrait").forEach((hex, i) => {
        hex.addEventListener("click", () => {
             const char = party[i];
             if (char) (window as any).onShowStats?.(char.id);
        });
    });
    bindImageFallbacks(root);
  }
}
