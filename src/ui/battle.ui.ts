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

    // ── VICTORY SCREEN ────────────────────────────────────────────────────
    if (state.phase === 'victory') {
      BattleUI.renderVictoryScreen(root, state);
      return;
    }

    // ── DEFEAT SCREEN ─────────────────────────────────────────────────────
    if (state.phase === 'defeat') {
      BattleUI.renderDefeatScreen(root, state);
      return;
    }

    const activeChar = state.activeTurnIndex !== null ? state.party[state.activeTurnIndex] : null;
    const moves = activeChar ? characterMoves[activeChar.id] || [] : [];

    root.innerHTML = `
      <div class="battle-container mobile-optimized ${state.bgClass || 'bg-style-1'}">
        <!-- POPUP OVERLAY -->
        <div id="damage-popups-layer" style="position: absolute; inset: 0; pointer-events: none; z-index: 100;">
            ${state.damagePopups.map(p => {
                const isEnemy = p.targetId === 'enemy';
                let x = 50; // Central default
                let y = 30; // Enemy default
                
                if (!isEnemy) {
                    const idx = parseInt(p.targetId.replace('p', '')) || 0;
                    x = 25 + (idx * 25);
                    y = 65; // User units area
                }
                
                const color = p.isHeal ? '#22c55e' : (p.isCrit ? '#fbbf24' : '#ef4444');
                const size = p.isCrit ? '2.5rem' : '1.5rem';
                return `
                  <div class="damage-popup ${p.isCrit ? 'crit' : ''}" style="position: absolute; left: ${x}%; top: ${y}%; transform: translateX(-50%); color: ${color}; font-size: ${size}; font-weight: 900; -webkit-text-stroke: 1px black; animation: popupAnim 1.2s forwards;">
                    ${p.isHeal ? '+' : ''}${p.value}${p.isCrit ? '!' : ''}
                  </div>
                `;
            }).join('')}
        </div>
        <!-- TOP: ENEMY AREA (Super Mini) -->
        <section class="enemy-area-mini" style="padding: 0.2rem 0.5rem; min-height: 80px; position: relative; display: flex; justify-content: space-between; align-items: center;">
          <div class="enemy-quit-center">
            <button id="btn-quit-battle" class="btn-quit-mini">🏃 ESCI</button>
          </div>
          <div class="enemy-info-compact" style="display: flex; align-items: center; gap: 0.8rem;">
            <div class="hex-portrait striker mini" style="width: 50px; height: 55px;">
               <img src="${state.enemy.imageUrl}" alt="${state.enemy.name}" data-fallback="${getCharacterFallbackImage(state.enemy.id || state.enemy.name)}" />
            </div>
            <div class="enemy-details">
              <h3 style="font-size: 0.8rem; margin:0;">${state.enemy.name}</h3>
              <div style="display: flex; gap: 2px;">
                ${state.enemy.activeEffects.map(e => `<span style="font-size:0.6rem;">${this.getEffectEmoji(e.effect)}</span>`).join('')}
              </div>
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
                    <div class="char-status-overlay" style="position: absolute; top: 0; right: 0; display: flex; flex-direction: column; gap: 2px; padding: 2px;">
                      ${char.activeEffects.map(e => `<span class="status-icon-mini" style="font-size: 0.6rem; filter: drop-shadow(0 0 2px black); animation: pulse 1s infinite;">${this.getEffectEmoji(e.effect)}</span>`).join('')}
                    </div>
                  </div>
                  <div class="char-stats-mini">
                    <div style="font-size: 0.7rem; font-weight: 900; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: white; text-align: center; margin-bottom: 2px; text-shadow: 0 1px 2px black;">${char.name}</div>
                    <div class="hp-bar-enhanced">
                      <div class="bar-fill hp-fill" data-id="p${i}-hp" style="width: ${(char.stats.hp / char.stats.maxHp) * 100}%"></div>
                    </div>
                    <div class="mp-bar-enhanced">
                      <div class="bar-fill mp-fill" data-id="p${i}-mp" style="width: ${(char.resource.current / char.resource.max) * 100}%"></div>
                    </div>
                    <div class="stats-values-mini" style="font-size: 0.65rem; display: flex; justify-content: space-between; color: #e2e8f0; font-weight: bold; margin-top: 2px;">
                       <span>${char.stats.hp}</span>
                       <span>${char.resource.current}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </section>

          <section class="action-panel-v3">
            <div class="current-char-info">
              <strong>${activeChar ? activeChar.name : state.enemy.name}</strong>
              <span class="mp-text">${activeChar ? `${activeChar.resource.type}: ${activeChar.resource.current}/${activeChar.resource.max}` : 'Nemico in azione'}</span>
            </div>
            <div class="moves-grid-v3" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; pointer-events: ${state.phase === 'player_turn' ? 'auto' : 'none'}; opacity: ${state.phase === 'player_turn' ? '1' : '0.6'}; transition: all 0.3s ease;">
              ${state.synergy >= 100 ? `
                <div class="btn-move-v3 ultimate-move" id="btn-synergy-finisher" style="grid-column: span 2; background: linear-gradient(135deg, #f59e0b, #d97706); border: 2px solid #fbbf24; box-shadow: 0 0 15px #fbbf24; animation: pulse 1s infinite alternate;">
                  <span class="move-emoji">🔱</span>
                  <div class="move-info">
                    <span class="move-name" style="color:white; font-size: 1rem;">NEXUS UNITY</span>
                    <span class="move-cost" style="color:#fef3c7;">0 MP - OVERLOAD</span>
                  </div>
                </div>
              ` : ''}
              ${activeChar ? moves.map(m => `
                <div class="btn-move-v3 ${state.phase !== 'player_turn' ? 'disabled' : ''}" data-move-id="${m.id}" style="${BattleUI.getActiveMoveStyle(m.element)}">
                  <span class="move-emoji">${m.emoji}</span>
                  <div class="move-info">
                    <span class="move-name">${m.name}</span>
                    <span class="move-cost">${m.mpCost} MP</span>
                  </div>
                  ${m.requiresQuiz ? '<div class="lore-badge">LORE</div>' : ''}
                </div>
              `).join('') : `
                <div style="grid-column: span 2; color: #94a3b8; font-size: 0.9rem; text-align: center; padding: 1rem; border: 1px dashed rgba(255,255,255,0.15); border-radius: 12px;">
                  Attendi il turno del nemico...
                </div>
              `}
            </div>
            <button id="btn-item-v2" class="btn-item-compact">🎒 OGGETTI</button>
          </section>
        </div>
      </div>

      <style>
        .battle-container {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          background-color: #0f172a;
          color: white;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }
        .enemy-area-mini {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 2px solid rgba(226, 232, 240, 0.1);
          z-index: 10;
        }
        .enemy-info-compact {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.5rem;
        }
        .enemy-quit-center { margin-left: 0.5rem; }
        .btn-quit-mini {
          background: #ef4444; border: none; border-radius: 6px; color: white; padding: 4px 8px; font-size: 0.65rem; font-weight: bold; cursor: pointer;
        }

        /* HEX PORTRAITS - THE CORE FIX */
        .hex-portrait {
          position: relative;
          background: #1e293b;
          mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          -webkit-mask-image: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hex-portrait.small { width: 65px; height: 75px; }
        .hex-portrait.mini { width: 45px; height: 55px; }
        .hex-portrait img { width: 100%; height: 100%; object-fit: cover; }
        
        /* PORTRAIT COLORS BY ROLE */
        .hex-portrait.striker { background: linear-gradient(135deg, #ef4444, #991b1b); }
        .hex-portrait.mysterian { background: linear-gradient(135deg, #c084fc, #7e22ce); }
        .hex-portrait.ethereal { background: linear-gradient(135deg, #0ea5e9, #0369a1); }
        .hex-portrait.balanced { background: linear-gradient(135deg, #94a3b8, #475569); }

        .party-row-enhanced {
          display: flex;
          justify-content: space-around;
          gap: 0.3rem;
          padding: 0.8rem 0.4rem;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .char-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 6px 4px;
          border-radius: 12px;
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid rgba(255,255,255,0.05);
          transition: all 0.3s;
          width: 31%;
          position: relative;
        }
        .char-unit.active {
          background: rgba(124, 58, 237, 0.2);
          border-color: #7c3aed;
          box-shadow: 0 0 15px rgba(124, 58, 237, 0.4);
          transform: translateY(-5px);
        }
        .char-unit.fainted { opacity: 0.3; filter: grayscale(1) blur(1px); }

        .hp-bar-enhanced, .mp-bar-enhanced {
          height: 5px; background: rgba(0,0,0,0.6); border-radius: 3px; overflow: hidden; margin: 1px 0; width: 65px;
        }
        .hp-fill { background: #10b981; }
        .mp-fill { background: #3b82f6; }
        .synergy-fill { 
            background: linear-gradient(90deg, #ef4444, #f59e0b); 
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.3);
            transition: width 0.4s ease;
        }
        /* SYNERGY GLOW */
        .synergy-fill[style*="width: 100"], .synergy-fill[style*="width: 9"], .synergy-fill[style*="width: 8"] {
            animation: synergy-glow 1.5s infinite alternate;
        }
        @keyframes synergy-glow {
            from { box-shadow: 0 0 5px #ef4444; }
            to { box-shadow: 0 0 20px #f59e0b; filter: brightness(1.3); }
        }

        /* DINAMIC BACKGROUNDS */
        .bg-style-1 { background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #020617 100%) !important; }
        .bg-style-1::before {
          content: ''; position: absolute; inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px);
          background-size: 60px 60px; background-position: center bottom;
          transform: perspective(500px) rotateX(60deg) translateY(-10%);
          mask-image: linear-gradient(to bottom, transparent, rgba(0,0,0,1));
          z-index: 0;
        }
        .bg-style-2 { background: linear-gradient(180deg, #064e3b 0%, #022c22 100%) !important; }
        .bg-style-3 { background: #000 !important; }
        .bg-style-3::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, #4c1d95 0%, transparent 80%); opacity: 0.5; filter: blur(60px); z-index: 0; }
        .bg-style-4 { background: #3e0909 !important; }
        .bg-style-5 { background: #0f172a !important; }

        .battle-log-mini {
          flex: 1; overflow-y: auto; padding: 0.5rem 1rem; font-size: 0.75rem; color: #cbd5e1;
          display: flex; flex-direction: column; gap: 4px; scroll-behavior: smooth;
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
        .battle-log-mini p { margin: 0; padding: 2px 0; border-bottom: 1px solid rgba(255,255,255,0.02); }

        .action-panel-v3 { padding: 0.8rem; background: rgba(15, 23, 42, 0.95); border-top: 1px solid #334155; position: relative; z-index: 20; }
        .current-char-info { display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.6rem; color: #e2e8f0; }
        .moves-grid-v3 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
        .btn-move-v3 {
          display: flex; align-items: center; gap: 0.5rem; background: #1e293b; border: 1px solid #334155;
          padding: 0.6rem; border-radius: 10px; color: white; cursor: pointer; position: relative; transition: all 0.2s;
        }
        .btn-move-v3:hover:not(.disabled) { background: #334155; border-color: #7c3aed; transform: translateY(-1px); }
        .btn-move-v3.disabled { opacity: 0.5; filter: grayscale(1); cursor: not-allowed; }

        .btn-item-compact {
          margin-top: 0.6rem; width: 100%; padding: 0.6rem; background: #334155; border: 1px solid #475569;
          border-radius: 8px; color: #fbbf24; font-weight: bold; cursor: pointer; font-size: 0.8rem;
        }
        .status-icon-mini { display: inline-flex; align-items: center; justify-content: center; width: 12px; height: 12px; background: rgba(0,0,0,0.5); border-radius: 2px; }

        @keyframes popupAnim {
            0% { opacity: 0; transform: translate(-50%, 0) scale(0.5); }
            15% { opacity: 1; transform: translate(-50%, -40px) scale(1.2); }
            30% { transform: translate(-50%, -60px) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -120px); }
        }
        .damage-popup.crit { animation: critAnim 1.2s forwards !important; }
        @keyframes critAnim {
            0% { opacity: 0; transform: translate(-50%, 0) scale(0.5) rotate(-10deg); }
            20% { opacity: 1; transform: translate(-50%, -50px) scale(1.8) rotate(5deg); }
            100% { opacity: 0; transform: translate(-50%, -130px); }
        }
        .damage-popup { pointer-events: none; }
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
        .hex-portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          image-rendering: auto;
          background: #1e293b;
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

    // Listeners for Buttons
    document.getElementById("btn-quit-battle")?.addEventListener("click", onQuit);
    document.getElementById("btn-item-v2")?.addEventListener("click", onItem);

    // Moves Interaction Logic
    const moveButtons = root.querySelectorAll(".btn-move-v3");
    moveButtons.forEach(btn => {
      const moveId = btn.getAttribute("data-move-id");
      const moves = activeChar ? characterMoves[activeChar.id] || [] : [];
      const move = moves.find(m => m.id === moveId);
      if (!move) return;

      let pressTimer: any;
      let isLongPress = false;

      btn.addEventListener("contextmenu", (e) => e.preventDefault());

      // HOVER (Desktop)
      btn.addEventListener("mouseenter", () => {
          if (!isLongPress) BattleUI.showTooltip(move);
      });
      btn.addEventListener("mouseleave", () => {
          if (!isLongPress) BattleUI.hideTooltip();
      });

      btn.addEventListener("pointerdown", () => {
        isLongPress = false;
        btn.classList.add("pressing");
        pressTimer = setTimeout(() => {
          isLongPress = true;
          BattleUI.showTooltip(move);
        }, 450); // Delay for tooltip
      });

      btn.addEventListener("pointerup", () => {
        clearTimeout(pressTimer);
        btn.classList.remove("pressing");
        BattleUI.hideTooltip();
        
        if (!isLongPress && state.phase === "player_turn") {
          onMove(move);
        }
      });

      btn.addEventListener("pointerleave", () => {
        clearTimeout(pressTimer);
        btn.classList.remove("pressing");
        BattleUI.hideTooltip();
      });
    });

    document.getElementById("btn-synergy-finisher")?.addEventListener("click", () => {
      if (state.phase === 'player_turn') {
        const ultimateMove: Move = {
          id: "nexus-unity", name: "NEXUS UNITY", mpCost: 0, power: 500, type: "hybrid", element: "light", accuracy: 100, baseDamageMultiplier: 3.5, healAmount: 100, healTarget: "party", effect: "stun", effectTarget: "enemy", effectDuration: 2, requiresQuiz: false, emoji: "🔮", quote: "NEL NOME DEL NEXUS!", description: ""
        };
        onMove(ultimateMove);
        state.synergy = 0;
      }
    });

    bindImageFallbacks(root);
  }

  private static getEffectEmoji(effect: string): string {
    const map: Record<string, string> = {
        'burn': '🔥', 'stun': '😵‍💫', 'regen': '💖', 'atk_up': '⚔️', 'atk_down': '📉',
        'def_up': '🛡️', 'def_down': '💔', 'spd_up': '👟', 'spd_down': '🕸️',
        'confuse': '🌀', 'immune': '✨', 'taunt': '💢', 'evasion': '💨', 'paralysis': '⚡'
    };
    return map[effect] || '❓';
  }

  private static getActiveMoveStyle(element: string): string {
    const map: Record<string, string> = {
        'fire': 'border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.1);',
        'water': 'border-left: 4px solid #3b82f6; background: rgba(59, 130, 246, 0.1);',
        'wind': 'border-left: 4px solid #10b981; background: rgba(16, 185, 129, 0.1);',
        'earth': 'border-left: 4px solid #f59e0b; background: rgba(245, 158, 11, 0.1);',
        'light': 'border-left: 4px solid #fbbf24; background: rgba(251, 191, 36, 0.1);',
        'dark': 'border-left: 4px solid #a855f7; background: rgba(168, 85, 247, 0.1);'
    };
    return map[element?.toLowerCase()] || 'border-left: 4px solid #64748b; background: rgba(100, 116, 139, 0.1);';
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
    const activeChar = state.activeTurnIndex !== null ? state.party[state.activeTurnIndex] : null;
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

  private static renderVictoryScreen(root: HTMLElement, state: BattleState) {
    const rewardLines = state.log
      .filter(l => l.includes('EXP') || l.includes('Frammenti') || l.includes('salito') || l.includes('🎊') || l.includes('⭐') || l.includes('✨'))
      .slice(-8);

    root.innerHTML = `
      <div style="
        position: fixed; inset: 0;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        z-index: 999; padding: 1.5rem; text-align: center; font-family: 'Inter', sans-serif;
        overflow: hidden;
      ">
        <!-- Stars animation -->
        <div style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;">
          ${Array.from({length: 20}, (_) => `
            <div style="
              position: absolute;
              left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
              font-size: ${0.8 + Math.random() * 1.5}rem;
              animation: starFloat ${2 + Math.random() * 3}s ease-in-out infinite alternate;
              animation-delay: ${Math.random() * 2}s;
              opacity: 0.7;
            ">⭐</div>
          `).join('')}
        </div>

        <!-- Title -->
        <div style="font-size: 2.5rem; font-weight: 900; color: #fbbf24; text-shadow: 0 0 30px #f59e0b; margin-bottom: 0.5rem; animation: victoryPop 0.6s cubic-bezier(0.34,1.56,0.64,1);">
          🏆 VITTORIA!
        </div>
        <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1.5rem;">
          ${state.enemy.name} è stato sconfitto
        </div>

        <!-- Party portraits -->
        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; justify-content: center;">
          ${state.party.map(char => {
            if (!char) return '';
            const expPercent = Math.min(100, (char.currentExp / char.expToNextLevel) * 100);
            const levelUp = state.log.some(l => l.includes(`${char.name} è salito al livello`));
            return `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.3rem; position: relative;">
              ${levelUp ? `
                <div style="position: absolute; top: -10px; background: #fbbf24; color: #000; font-size: 0.5rem; padding: 2px 5px; border-radius: 4px; font-weight: 900; z-index: 10; box-shadow: 0 0 10px #fbbf24; animation: blink 0.5s infinite alternate;">LEVEL UP!</div>
              ` : ''}
              <div style="
                width: 60px; height: 68px; border-radius: 8px; overflow: hidden;
                border: 2px solid ${char.isAlive ? '#22c55e' : '#ef4444'};
                box-shadow: 0 0 12px ${char.isAlive ? 'rgba(34,197,94,0.4)' : 'rgba(239,68,68,0.3)'};
                opacity: ${char.isAlive ? '1' : '0.5'};
                filter: ${char.isAlive ? 'none' : 'grayscale(1)'};
              ">
                <img src="${char.imageUrl}" style="width:100%;height:100%;object-fit:cover;" />
              </div>
              <div style="font-size: 0.55rem; color: #fff; font-weight: bold; margin: 2px 0;">
                Lvl ${char.stats.loreLevel}
              </div>
              <!-- EXP BAR -->
              <div style="width: 60px; height: 6px; background: #1e293b; border-radius: 3px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
                <div style="width: ${expPercent}%; height: 100%; background: linear-gradient(90deg, #0ea5e9, #67e8f9); transition: width 1.5s ease-out;"></div>
              </div>
              <div style="font-size: 0.45rem; color: #94a3b8;">${Math.round(char.currentExp)}/${Math.round(char.expToNextLevel || 100)} XP</div>
            </div>
            `;
          }).join('')}
        </div>

        <!-- Rewards log -->
        <div style="
          background: rgba(0,0,0,0.4); border: 1px solid rgba(251,191,36,0.3);
          border-radius: 12px; padding: 1rem; width: 100%; max-width: 320px;
          margin-bottom: 1.5rem; text-align: left;
        ">
          <div style="font-size: 0.75rem; font-weight: bold; color: #fbbf24; margin-bottom: 0.5rem;">✨ RICOMPENSE</div>
          ${rewardLines.map(line => `
            <div style="font-size: 0.75rem; color: #e2e8f0; padding: 3px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
              ${line}
            </div>
          `).join('')}
        </div>

        <div style="font-size: 0.8rem; color: #64748b; animation: pulse 2s infinite;">
          Ritorno all'Hub in corso...
        </div>

        <style>
          @keyframes starFloat { from { transform: translateY(0) rotate(0deg); } to { transform: translateY(-15px) rotate(20deg); } }
          @keyframes victoryPop { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
          @keyframes pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
          @keyframes blink { from { opacity: 1; } to { opacity: 0.6; } }
        </style>
      </div>
    `;
  }

  private static renderDefeatScreen(root: HTMLElement, state: BattleState) {
    const lastHit = state.log.filter(l => l.includes('attacca') || l.includes('KO') || l.includes('💀')).slice(-3);

    root.innerHTML = `
      <div style="
        position: fixed; inset: 0;
        background: linear-gradient(135deg, #0a0a0a, #1a0000);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        z-index: 999; padding: 1.5rem; text-align: center; font-family: 'Inter', sans-serif;
      ">
        <div style="font-size: 2.5rem; font-weight: 900; color: #ef4444; text-shadow: 0 0 30px #dc2626; margin-bottom: 0.5rem; animation: defeatShake 0.5s ease;">
          💀 SCONFITTA
        </div>
        <div style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1.5rem;">
          Il nexus è caduto nell'oscurità...
        </div>

        <!-- Party KO'd portraits -->
        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; justify-content: center;">
          ${state.party.map(char => char ? `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.3rem;">
              <div style="width: 55px; height: 62px; border-radius: 8px; overflow: hidden; border: 2px solid #ef4444; opacity: 0.4; filter: grayscale(1);">
                <img src="${char.imageUrl}" style="width:100%;height:100%;object-fit:cover;" />
              </div>
              <div style="font-size: 0.55rem; color: #fca5a5; font-weight: bold;">💀 ${char.name}</div>
            </div>
          ` : '').join('')}
        </div>

        <!-- Last events log -->
        <div style="
          background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3);
          border-radius: 12px; padding: 1rem; width: 100%; max-width: 320px; margin-bottom: 1.5rem; text-align: left;
        ">
          <div style="font-size: 0.75rem; font-weight: bold; color: #ef4444; margin-bottom: 0.5rem;">⚔️ FINE BATTAGLIA</div>
          ${lastHit.map(line => `
            <div style="font-size: 0.75rem; color: #fca5a5; padding: 3px 0;">
              ${line}
            </div>
          `).join('')}
        </div>

        <div style="font-size: 0.8rem; color: #64748b; animation: pulse 2s infinite;">
          Ritorno all'Hub...
        </div>

        <style>
          @keyframes defeatShake {
            0%,100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
          }
          @keyframes pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        </style>
      </div>
    `;
  }
}
