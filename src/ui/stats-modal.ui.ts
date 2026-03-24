import type { GameCharacter } from "../types/game.types.ts";
import { characterExtraData } from "../data/characterExtra.ts";
import { bindImageFallbacks, getCharacterFallbackImage } from "./image-fallback.ts";

export class StatsModalUI {
  static render(character: GameCharacter) {
    const app = document.getElementById("app");
    if (!app) return;

    const extra = characterExtraData[character.id] || { description: "Un misterioso abitante del multiverso." };

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
        
        <div class="stats-list">
          <div class="stat-row"><span>LV</span> <span class="stat-val">${character.stats.loreLevel || 1}</span></div>
          <div class="stat-row"><span>HP</span> <span class="stat-val">${character.stats.hp} / ${character.stats.maxHp}</span></div>
          <div class="stat-row"><span>ATK</span> <span class="stat-val">${character.stats.atk}</span></div>
          <div class="stat-row"><span>DEF</span> <span class="stat-val">${character.stats.def}</span></div>
          <div class="stat-row"><span>SPD</span> <span class="stat-val">${character.stats.spd}</span></div>
          <div class="stat-row"><span>CLASSE</span> <span class="stat-val text-${character.characterClass.toLowerCase()}">${character.characterClass}</span></div>
        </div>
      </div>
    `;

    app.appendChild(modal);

    document.getElementById("btn-close-modal")?.addEventListener("click", () => {
      app.removeChild(modal);
    });
    bindImageFallbacks(modal);
  }
}
