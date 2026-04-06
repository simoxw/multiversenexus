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
      <style>
        .stats-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }
        .stats-modal-card {
          position: relative;
          background: #0f172a;
          border: 1px solid rgba(124, 58, 237, 0.4);
          border-radius: 20px;
          padding: 2rem;
          max-width: 400px;
          width: 100%;
          color: white;
          box-shadow: 0 0 30px rgba(124, 58, 237, 0.2);
          animation: modalAppear 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes modalAppear {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
        }
        .modal-hex {
          width: 100px;
          height: 110px;
          margin: 0 auto 1rem;
          background: #1e293b;
          mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          -webkit-mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          border: 2px solid #7c3aed;
        }
        .modal-hex img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .stats-grid-compact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 1.5rem;
          margin: 1.5rem 0;
        }
        .stat-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 4px 0;
          font-size: 0.85rem;
        }
        .stat-label { color: #94a3b8; font-weight: 500; }
        .stat-val { font-weight: bold; }
        .exp-bar-container {
          height: 8px;
          background: #1e293b;
          border-radius: 4px;
          overflow: hidden;
          margin: 0.5rem 0 1.5rem;
        }
        .exp-fill {
          height: 100%;
          background: linear-gradient(90deg, #0ea5e9, #67e8f9);
          transition: width 1s ease;
          box-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
        }
        .btn-modal-action {
          width: 100%;
          padding: 0.8rem;
          border: none;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-equip { background: #7c3aed; color: white; }
        .btn-remove { background: #ef4444; color: white; }
      </style>

      <div class="stats-modal-card">
        <button id="btn-close-modal" class="close-btn">&times;</button>
        
        <div class="modal-header" style="text-align: center;">
          <div class="modal-hex">
            <img src="${character.imageUrl}" alt="${character.name}" data-fallback="${getCharacterFallbackImage(character.id)}" />
          </div>
          <h2 style="margin: 0; font-size: 1.5rem;">${character.name}</h2>
          <p style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase;">${character.role} • ${character.characterClass}</p>
        </div>

        <p style="font-size: 0.8rem; color: #cbd5e1; line-height: 1.4; margin: 1rem 0; text-align: center;">${extra.description}</p>

        <div class="stats-grid-compact">
          <div class="stat-item"><span class="stat-label">HP</span><span class="stat-val" style="color:#10b981">${character.stats.hp}/${character.stats.maxHp}</span></div>
          <div class="stat-item"><span class="stat-label">ATK</span><span class="stat-val" style="color:#ef4444">${character.stats.atk}</span></div>
          <div class="stat-item"><span class="stat-label">DEF</span><span class="stat-val" style="color:#3b82f6">${character.stats.def}</span></div>
          <div class="stat-item"><span class="stat-label">MAG</span><span class="stat-val" style="color:#c084fc">${character.stats.mag || 0}</span></div>
          <div class="stat-item"><span class="stat-label">RES</span><span class="stat-val" style="color:#6366f1">${character.stats.res || 0}</span></div>
          <div class="stat-item"><span class="stat-label">SPD</span><span class="stat-val" style="color:#fbbf24">${character.stats.spd || 0}</span></div>
          <div class="stat-item" style="grid-column: span 2; border:none; padding-top: 8px;">
            <span class="stat-label">🍀 LUCK</span>
            <span class="stat-val" style="color:#eab308">${character.stats.luck || 0}</span>
          </div>
        </div>

        <div class="exp-box">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem;">
            <span style="color: #fbbf24; font-weight: bold;">Lvl ${character.stats.loreLevel}</span>
            <span style="color: #94a3b8;">EXP: ${character.currentExp ?? 0} / ${character.expToNextLevel ?? 100}</span>
          </div>
          <div class="exp-bar-container">
            <div class="exp-fill" style="width: ${character.expToNextLevel && character.expToNextLevel > 0 ? Math.min(100, ((character.currentExp ?? 0) / character.expToNextLevel) * 100) : 0}%"></div>
          </div>
        </div>

        <div class="modal-actions">
          ${isInPartyIdx !== -1 ? `
            <button class="btn-modal-action btn-remove" data-action="remove">RIMUOVI DALLA SQUADRA</button>
          ` : `
            <p style="font-size: 0.7rem; color: #64748b; margin-bottom: 0.5rem; text-align: center;">EQUIPAGGIA IN:</p>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn-modal-action btn-equip" data-slot="0">SLOT 1</button>
              <button class="btn-modal-action btn-equip" data-slot="1">SLOT 2</button>
              <button class="btn-modal-action btn-equip" data-slot="2">SLOT 3</button>
            </div>
          `}
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeHandler = () => modal.remove();
    document.getElementById("btn-close-modal")?.addEventListener("click", closeHandler);
    
    // Safety close on overlay click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeHandler();
    });

    modal.querySelectorAll(".btn-modal-action").forEach(btn => {
      btn.addEventListener("click", () => {
        const action = btn.getAttribute("data-action");
        const slot = btn.getAttribute("data-slot");
        
        if (action === "remove") {
          onEquip(-1);
        } else if (slot !== null) {
          onEquip(parseInt(slot));
        }
        modal.remove();
      });
    });

    bindImageFallbacks(modal);
  }
}
