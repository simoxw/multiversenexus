import type { BattleState, Move } from "../types/game.types.ts";
import { characterMoves } from "../data/characterMoves.ts";
import { bindImageFallbacks, getCharacterFallbackImage } from "./image-fallback.ts";

export class BattleUI {
  static render(
    state: BattleState, 
    onMove: (move: Move) => void,
    onItem: () => void,
    onQuit: () => void
  ) {
    const root = document.getElementById("app");
    if (!root) return;

    const activeChar = state.party[state.activeTurnIndex];
    const moves = characterMoves[activeChar.id] || [];

    root.innerHTML = `
      <div class="battle-container mobile-optimized">
        <!-- TOP: ENEMY AREA (Super Mini) -->
        <section class="enemy-area-mini" style="padding: 0.2rem 0.5rem; min-height: 80px; position: relative;">
          <div class="enemy-quit-center">
            <button id="btn-quit-battle" class="btn-quit-mini">🏃 ESCI</button>
          </div>
          <div class="enemy-info-compact">
            <div class="hex-portrait striker mini" style="width: 50px; height: 55px;">
               <img src="${state.enemy.imageUrl}" alt="${state.enemy.name}" data-fallback="${getCharacterFallbackImage(state.enemy.id || state.enemy.name)}" />
            </div>
            <div class="enemy-details">
              <h3 style="font-size: 0.8rem; margin:0;">${state.enemy.name}</h3>
              <div class="hp-label" style="font-size: 0.65rem;">HP ${state.enemy.stats.hp}/${state.enemy.stats.maxHp}</div>
              <div class="bar-container mini" style="width: 80px; height: 5px;">
                <div class="bar-fill hp-fill" data-id="enemy-hp" style="width: ${(state.enemy.stats.hp / state.enemy.stats.maxHp) * 100}%"></div>
              </div>
            </div>
          </div>
          <div class="synergy-mini">
            <div class="synergy-label" style="font-size: 0.65rem;">🔥 ${state.synergy}%</div>
            <div class="bar-container micro" style="width: 50px; height: 3px;">
              <div class="bar-fill synergy-fill" style="width: ${state.synergy}%"></div>
            </div>
          </div>
        </section>

        <!-- MIDDLE: LOG (Overlay-like or semi-transparent) -->
        <section class="battle-log-mini log-window">
            ${state.log.slice(-10).map(msg => `<p>${msg}</p>`).join('')}
            <div id="log-anchor"></div>
        </section>

        <!-- BOTTOM: PARTY & ACTIONS -->
        <div class="interaction-zone">
          <section class="party-row-enhanced">
            ${state.party.map((char, i) => {
              if (!char) return `<div class="char-unit empty"></div>`;
              return `
                <div class="char-unit ${state.activeTurnIndex === i ? 'active' : ''} ${!char.isAlive ? 'fainted' : ''}">
                  <div class="hex-portrait ${char.role === 'tank' ? 'striker' : char.role === 'mage' ? 'mysterian' : char.role === 'support' ? 'ethereal' : 'balanced'} small">
                    <img src="${char.imageUrl}" alt="${char.name}" data-fallback="${getCharacterFallbackImage(char.id)}" />
                  </div>
                  <div class="char-stats-mini">
                    <div class="hp-bar-enhanced">
                      <div class="bar-fill hp-fill" data-id="p${i}-hp" style="width: ${(char.stats.hp / char.stats.maxHp) * 100}%"></div>
                    </div>
                    <div class="mp-bar-enhanced">
                      <div class="bar-fill mp-fill" data-id="p${i}-mp" style="width: ${(char.resource.current / char.resource.max) * 100}%"></div>
                    </div>
                    <div class="stats-values-mini">
                       <span class="hp-val">${char.stats.hp}/${char.stats.maxHp}</span>
                       <span class="mp-val">${char.resource.current}/${char.resource.max}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </section>

          <section class="action-panel-v3">
            <div class="current-char-info">
              <strong>${activeChar.name}</strong>
              <span class="mp-text">${activeChar.resource.type}: ${activeChar.resource.current}/${activeChar.resource.max}</span>
            </div>
            <div class="moves-grid-compact">
              ${moves.map(move => {
                const canUse = state.phase === 'player_turn' && activeChar.resource.current >= move.mpCost;
                return `
                  <button class="btn-move-v3 ${move.requiresQuiz ? 'lore' : ''}" data-move-id="${move.id}" ${!canUse ? 'disabled' : ''}>
                    <span class="m-emoji">${move.emoji}</span>
                    <span class="m-name">${move.name}</span>
                    <span class="m-cost">${move.mpCost}</span>
                  </button>
                `;
              }).join('')}
            </div>
            <button id="btn-item-v2" class="btn-item-compact">🎒 OGGETTI</button>
          </section>
        </div>
      </div>

      <style>
        .action-grid-v2 {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding: 1rem;
          background: rgba(15, 23, 42, 0.8);
          border-top: 1px solid rgba(148, 163, 184, 0.2);
        }
        .moves-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }
        .btn-move {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem;
          background: rgba(30, 41, 59, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          text-align: left;
        }
        .btn-move:hover:not(:disabled) {
          background: rgba(51, 65, 85, 1);
          border-color: #60a5fa;
          transform: translateY(-2px);
        }
        .btn-move:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          filter: grayscale(1);
        }
        .btn-move.lore-break {
          background: linear-gradient(135deg, #6b21a8, #b45309);
          border-color: #fbbf24;
          box-shadow: 0 0 10px rgba(217, 119, 6, 0.3);
        }
        .btn-move.lore-break:hover:not(:disabled) {
          box-shadow: 0 0 15px rgba(217, 119, 6, 0.5);
        }
        .move-emoji { font-size: 1.4rem; }
        .move-info { display: flex; flex-direction: column; }
        .move-name { font-weight: bold; font-size: 0.85rem; }
        .move-cost { font-size: 0.7rem; color: #94a3b8; }
        .lore-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #fbbf24;
          color: #000;
          font-size: 0.6rem;
          font-weight: bold;
          padding: 2px 4px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .btn-item-full {
          width: 100%;
          padding: 0.6rem;
          background: #334155;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 8px;
          color: white;
          font-weight: bold;
          cursor: pointer;
        }
        .char-card.active {
          border-color: #60a5fa;
          background: rgba(30, 64, 175, 0.3);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }
      </style>
    `;

    // Listeners for Quit
    document.getElementById("btn-quit-battle")?.addEventListener("click", onQuit);
    document.getElementById("btn-item-v2")?.addEventListener("click", onItem);

    // Advanced Move Listeners (Click + Long Press)
    root.querySelectorAll(".btn-move-v3").forEach(btn => {
      let pressTimer: any;
      let isLongPress = false;

      // Prevent browser context menu on long press (mobile)
      btn.addEventListener("contextmenu", (e) => e.preventDefault());

      btn.addEventListener("pointerdown", () => {
        isLongPress = false;
        pressTimer = window.setTimeout(() => {
          isLongPress = true;
          const moveId = btn.getAttribute("data-move-id");
          const moves = characterMoves[activeChar.id] || [];
          const move = moves.find(m => m.id === moveId);
          if (move) BattleUI.showTooltip(move);
        }, 1500);
      });

      btn.addEventListener("pointerup", () => {
        clearTimeout(pressTimer);
        BattleUI.hideTooltip();
        
        if (!isLongPress) {
          const moveId = btn.getAttribute("data-move-id");
          const moves = characterMoves[activeChar.id] || [];
          const move = moves.find(m => m.id === moveId);
          if (move) onMove(move);
        }
      });

      btn.addEventListener("pointerleave", () => {
        clearTimeout(pressTimer);
        BattleUI.hideTooltip();
      });
    });

    bindImageFallbacks(root);
  }

  private static showTooltip(move: Move) {
    let tooltip = document.getElementById("move-tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "move-tooltip";
        tooltip.className = "move-tooltip-overlay glass";
        document.body.appendChild(tooltip);
    }

    tooltip.innerHTML = `
        <div class="tooltip-header">
            <span class="t-emoji">${move.emoji}</span>
            <span class="t-name">${move.name}</span>
        </div>
        <div class="tooltip-stats">
            <span><strong>Costo:</strong> ${move.mpCost} MP</span>
            ${move.baseDamageMultiplier ? `<span><strong>Danno:</strong> x${move.baseDamageMultiplier}</span>` : ''}
            ${move.effect ? `<span><strong>Effetto:</strong> ${move.effect}</span>` : ''}
        </div>
        <p class="tooltip-desc">${move.description || 'Nessuna descrizione disponibile.'}</p>
        <div class="tooltip-hint">Rilascia per chiudere</div>
    `;

    tooltip.style.display = "block";
  }

  private static hideTooltip() {
    const tooltip = document.getElementById("move-tooltip");
    if (tooltip) tooltip.style.display = "none";
  }

  static updateBars(state: BattleState) {
    const root = document.getElementById("app");
    if (!root) return;

    // Update HP/MP bars
    root.querySelectorAll(".bar-fill").forEach(bar => {
        const id = (bar as HTMLElement).dataset.id;
        if (!id) return;

        if (id === "enemy-hp") {
            (bar as HTMLElement).style.width = `${(state.enemy.stats.hp / state.enemy.stats.maxHp) * 100}%`;
        } else if (id.startsWith("p")) {
            const parts = id.split("-");
            const idx = parseInt(parts[0].substring(1));
            const char = state.party[idx];
            if (!char) return;

            const type = parts[1]; // hp o mp
            const unit = (bar as HTMLElement).closest(".char-unit");
            if (type === "hp") {
                (bar as HTMLElement).style.width = `${(char.stats.hp / char.stats.maxHp) * 100}%`;
                const val = unit?.querySelector(".hp-val");
                if (val) val.textContent = `${char.stats.hp}/${char.stats.maxHp}`;
            } else if (type === "mp") {
                (bar as HTMLElement).style.width = `${(char.resource.current / char.resource.max) * 100}%`;
                const val = unit?.querySelector(".mp-val");
                if (val) val.textContent = `${char.resource.current}/${char.resource.max}`;
            }
        }
    });

    // Update current char info (Action Panel)
    const activeChar = state.party[state.activeTurnIndex];
    if (activeChar) {
        const charNameElem = root.querySelector(".current-char-info strong");
        if (charNameElem) charNameElem.textContent = activeChar.name;
        const mpTextElem = root.querySelector(".mp-text");
        if (mpTextElem) mpTextElem.textContent = `${activeChar.resource.type}: ${activeChar.resource.current}/${activeChar.resource.max}`;
    }

    // Update synergy bar
    const synergyFill = root.querySelector(".synergy-fill") as HTMLElement;
    if (synergyFill) synergyFill.style.width = `${state.synergy}%`;
    const synergyLabel = root.querySelector(".synergy-label") as HTMLElement;
    if (synergyLabel) synergyLabel.textContent = `🔥 ${state.synergy}%`;

    // Update Log (CRITICAL FIX)
    const logWindow = root.querySelector(".log-window");
    if (logWindow) {
        logWindow.innerHTML = state.log.slice(-10).map(msg => `<p>${msg}</p>`).join('') + '<div id="log-anchor"></div>';
        logWindow.scrollTop = logWindow.scrollHeight;
    }
  }
}
