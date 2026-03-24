import type { BattleState } from "../types/game.types.ts";
import { SkillEngine } from "../engine/skill.engine.ts";
import { bindImageFallbacks, getCharacterFallbackImage } from "./image-fallback.ts";

export class BattleUI {
  static render(
    state: BattleState, 
    onAttack: () => void, 
    onSkill: (id: string) => void, 
    onCapture: () => void, 
    onQuiz: () => void
  ) {
    const root = document.getElementById("app");
    if (!root) return;

    root.innerHTML = `
      <div class="battle-container">
        <header>
          <h1>⚡ MULTIVERSE NEXUS</h1>
          <div class="subtitle">PHASE: ${state.phase.toUpperCase()}</div>
        </header>

        <section class="enemy-section">
          <div class="enemy-card">
            <div class="hex-portrait striker">
               <img src="${state.enemy.imageUrl}" alt="${state.enemy.name}" data-fallback="${getCharacterFallbackImage(state.enemy.id || state.enemy.name)}" data-character-name="${state.enemy.name}" data-character-franchise="${state.enemy.franchise}" />
            </div>
            <h2>${state.enemy.name}</h2>
            <div style="font-size: 0.7rem; color: #ef4444; margin-bottom: 2px;">HP: ${state.enemy.stats.hp} / ${state.enemy.stats.maxHp}</div>
            <div class="bar-container" style="margin-bottom: 0.5rem;">
              <div class="bar-fill hp-fill" data-id="enemy-hp" style="width: ${(state.enemy.stats.hp / state.enemy.stats.maxHp) * 100}%"></div>
            </div>
            <div class="bar-container atb-container" style="height: 4px;">
              <div class="bar-fill atb-fill" data-id="enemy-atb" style="width: ${state.atb.find(a => a.characterId === 'enemy')?.progress || 0}%"></div>
            </div>
          </div>
        </section>

        <section class="synergy-section">
          <div class="synergy-label">SYNERGY: ${state.synergy}%</div>
          <div class="bar-container">
            <div class="bar-fill synergy-fill" style="width: ${state.synergy}%"></div>
          </div>
        </section>

        <section class="party-grid">
          ${state.party.map((char, i) => `
            <div class="char-card ${state.activeTurnIndex === i ? 'active' : ''} ${!char.isAlive ? 'fainted' : ''}">
              <div class="hex-portrait ${char.characterClass.toLowerCase()}">
                <img src="${char.imageUrl}" alt="${char.name}" data-fallback="${getCharacterFallbackImage(char.id || char.name)}" data-character-name="${char.name}" data-character-franchise="${char.franchise}" />
              </div>
              <h3>${char.name}</h3>
              <div style="font-size: 0.7rem; color: #22c55e; margin-bottom: 2px;">${char.stats.hp} / ${char.stats.maxHp}</div>
              <div class="bar-container" style="height: 6px; margin-bottom: 4px;">
                <div class="bar-fill hp-fill" data-id="p${i}-hp" style="width: ${(char.stats.hp / char.stats.maxHp) * 100}%"></div>
              </div>
              <div class="bar-container atb-container" style="height: 3px;">
                <div class="bar-fill atb-fill" data-id="p${i}-atb" style="width: ${state.atb.find(a => a.characterId === 'p'+i)?.progress || 0}%"></div>
              </div>
              <div style="font-size: 0.68rem; color: #93c5fd; margin-top: 4px;">
                ${char.resource.type}: ${char.resource.current}/${char.resource.max}
              </div>
            </div>
          `).join('')}
        </section>

        <section class="log-window">
            ${state.log.map(msg => `<p>${msg}</p>`).join('')}
            <div id="log-anchor"></div>
        </section>

        <section class="action-grid">
          <button id="btn-attack" ${state.phase !== 'player_turn' ? 'disabled' : ''}>⚔️ ATTACK</button>
          <button id="btn-quiz" ${state.phase !== 'player_turn' ? 'disabled' : ''}>🧠 LORE</button>
          <button id="btn-item" ${state.phase !== 'player_turn' ? 'disabled' : ''}>🎒 ITEM</button>
          <button id="btn-capture" class="sync-btn" ${state.phase !== 'player_turn' || (state.enemy.stats.hp / state.enemy.stats.maxHp) > 0.25 ? 'disabled' : ''} style="background: linear-gradient(90deg, #ec4899, #8b5cf6;">✨ SINCRONIA</button>
          <div style="grid-column: span 2; display: grid; gap: 0.5rem; margin-top: 0.4rem;">
            ${state.phase === "player_turn" ? SkillEngine.getSkillsForCharacter(state.party[state.activeTurnIndex]).map((skill) => `
              <button class="btn-skill-dyn" data-skill-id="${skill.id}" ${state.party[state.activeTurnIndex].resource.current < skill.cost ? "disabled" : ""}>
                ✨ ${skill.name} (${skill.cost} ${state.party[state.activeTurnIndex].resource.type})
              </button>
            `).join("") : ""}
          </div>
        </section>
      </div>
    `;

    // Auto-scroll log
    const logWindow = root.querySelector(".log-window");
    if (logWindow) logWindow.scrollTop = logWindow.scrollHeight;

    // Stats Modal listeners
    document.querySelectorAll(".hex-portrait").forEach((hex, i) => {
        hex.addEventListener("click", () => {
             const charId = i === 0 ? state.enemy.id : state.party[i-1].id;
             (window as any).onShowStats?.(charId);
        });
    });

    document.getElementById("btn-attack")?.addEventListener("click", onAttack);
    document.getElementById("btn-quiz")?.addEventListener("click", onQuiz);
    document.getElementById("btn-item")?.addEventListener("click", () => (window as any).onItemMenuRequested?.());
    document.getElementById("btn-capture")?.addEventListener("click", onCapture);
    root.querySelectorAll(".btn-skill-dyn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const skillId = btn.getAttribute("data-skill-id");
        if (skillId) onSkill(skillId);
      });
    });
    bindImageFallbacks(root);
  }

  static updateBars(state: BattleState) {
    const root = document.getElementById("app");
    if (!root) return;

    // Update ATB bars
    state.atb.forEach(atb => {
        const bar = root.querySelector(`[data-id="${atb.characterId}-atb"]`) as HTMLElement;
        if (bar) bar.style.width = `${atb.progress}%`;
    });

    // Update HP bars (in case they changed during transition, though rare)
    root.querySelectorAll(".hp-fill").forEach(bar => {
        const id = (bar as HTMLElement).dataset.id;
        if (id === "enemy-hp") {
            (bar as HTMLElement).style.width = `${(state.enemy.stats.hp / state.enemy.stats.maxHp) * 100}%`;
        } else if (id && id.startsWith("p")) {
            const idx = parseInt(id.substring(1));
            const char = state.party[idx];
            if (char) (bar as HTMLElement).style.width = `${(char.stats.hp / char.stats.maxHp) * 100}%`;
        }
    });

    // Update synergy bar
    const synergyFill = root.querySelector(".synergy-fill") as HTMLElement;
    if (synergyFill) synergyFill.style.width = `${state.synergy}%`;
    const synergyLabel = root.querySelector(".synergy-label") as HTMLElement;
    if (synergyLabel) synergyLabel.textContent = `SYNERGY: ${state.synergy}%`;
  }
}
