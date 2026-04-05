import type { GameCharacter } from "../types/game.types.ts";
import { characterExtraData } from "../data/characterExtra.ts";
import { bindImageFallbacks, getCharacterFallbackImage } from "./image-fallback.ts";

export class StatsModalUI {
  static render(character: GameCharacter, activeTrio: (GameCharacter | null)[], onEquip: (slotIdx: number) => void) {
    const app = document.getElementById("app");
    if (!app) return;

    const extra = characterExtraData[character.id] || { description: "Un misterioso abitante del multiverso." };
    const isInPartyIdx = activeTrio.findIndex(c => c?.id === character.id);

    const modal = document.createElement("div");
    modal.className = "stats-modal-overlay";
    modal.innerHTML = `
      <div class="stats-modal-card">
        <button id="btn-close-modal" class="close-btn">&times;</button>
        <div class="hex-portrait ${character.characterClass.toLowerCase()}" style="width: 120px; height: 140px; margin: 0 auto;">
          <img src="${character.imageUrl}" alt="${character.name}" data-fallback="${getCharacterFallbackImage(character.id || character.name)}" data-character-name="${character.name}" data-character-franchise="${character.franchise}" />
        </div>
        <h2>${character.name}</h2>
        <p class="char-desc">${extra.description}</p>
        
        <div class="stats-list" style="margin-bottom: 1.5rem;">
          <div class="stat-row"><span>LV</span> <span class="stat-val">${character.stats.loreLevel || 1}</span></div>
          <div class="stat-row"><span>HP</span> <span class="stat-val">${character.stats.hp} / ${character.stats.maxHp}</span></div>
          <div class="stat-row"><span>ATK</span> <span class="stat-val">${character.stats.atk}</span></div>
          <div class="stat-row"><span>DEF</span> <span class="stat-val">${character.stats.def}</span></div>
          <div class="stat-row"><span>SPD</span> <span class="stat-val">${character.stats.spd}</span></div>
          <div class="stat-row"><span>RUOLO</span> <span class="stat-val">${character.role?.toUpperCase() || "N/A"}</span></div>
          <div class="stat-row"><span>CLASSE</span> <span class="stat-val text-${character.characterClass.toLowerCase()}">${character.characterClass}</span></div>
        </div>

        <div class="modal-actions" style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
          ${isInPartyIdx !== -1 ? `
            <button class="btn-modal-action remove" data-action="remove" style="width:100%; padding:0.8rem; background:#ef4444; border:none; border-radius:10px; color:white; font-weight:bold; cursor:pointer;">RIMUOVI DALLA SQUADRA</button>
          ` : `
            <p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.8rem;">EQUIPAGGIA IN:</p>
            <div style="display: flex; gap: 0.5rem; justify-content: center;">
              <button class="btn-modal-action equip" data-slot="0" style="flex:1; padding:0.6rem; background:#7c3aed; border:none; border-radius:8px; color:white; font-size:0.8rem; cursor:pointer;">SLOT 1</button>
              <button class="btn-modal-action equip" data-slot="1" style="flex:1; padding:0.6rem; background:#7c3aed; border:none; border-radius:8px; color:white; font-size:0.8rem; cursor:pointer;">SLOT 2</button>
              <button class="btn-modal-action equip" data-slot="2" style="flex:1; padding:0.6rem; background:#7c3aed; border:none; border-radius:8px; color:white; font-size:0.8rem; cursor:pointer;">SLOT 3</button>
            </div>
          `}
        </div>
      </div>
    `;

    app.appendChild(modal);

    document.getElementById("btn-close-modal")?.addEventListener("click", () => {
      modal.remove();
    });

    modal.querySelectorAll(".btn-modal-action").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.getAttribute("data-action");
        const slot = btn.getAttribute("data-slot");
        
        if (action === "remove") {
          onEquip(-1); // Convention for removal
        } else if (slot !== null) {
          onEquip(parseInt(slot));
        }
        modal.remove();
      });
    });

    bindImageFallbacks(modal);
  }
}
