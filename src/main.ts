import '../styles/index.css'
import { BattleEngine } from './engine/battle.engine.ts'
import { BattleUI } from './ui/battle.ui.ts'
import { HubUI } from './ui/hub.ui.ts'
import { RosterUI } from './ui/roster.ui.ts'
import { QuizUI } from './ui/quiz.ui.ts'
import { InventoryUI } from './ui/inventory.ui.ts'
import { EnemyService } from './services/enemy.service.ts'
import { RosterService } from './engine/roster.service.ts'
import { QuizService } from './services/quiz.service.ts'
import { InventoryService } from './engine/inventory.service.ts'
import { StatsModalUI } from './ui/stats-modal.ui.ts'
import { characterStats } from "./data/characterStats";
import { StatsService } from './services/stats.service.ts'
import { ShopUI } from './ui/shop.ui.ts'
import { CodesUI } from './ui/codes.ui.ts'
import type { GameCharacter } from './types/game.types.ts'

import { LoreArchiveUI } from './ui/lore-archive.ui.ts'

type GameView = 'HUB' | 'BATTLE' | 'ROSTER' | 'INVENTORY' | 'LORE_ARCHIVE' | 'QUIZ';

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  const swUrl = `${import.meta.env.BASE_URL}sw.js`;
  const forceCheck = async () => {
    const existing = await navigator.serviceWorker.getRegistration(import.meta.env.BASE_URL);
    if (existing) await existing.update();
  };

  window.addEventListener('load', async () => {
    try {
      await forceCheck();
      const registration = await navigator.serviceWorker.register(swUrl);
      await registration.update();
      setInterval(() => registration.update(), 60_000);
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            window.location.reload();
          }
        });
      });
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        window.location.reload();
      });
    } catch (error) {
      console.error('Service worker registration failed', error);
    }
  });
}

function setupInstallPrompt() {
  let deferredPrompt: any = null;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;

    const root = document.getElementById('app');
    if (!root || document.getElementById('pwa-install-toast')) return;

    const toast = document.createElement('div');
    toast.id = 'pwa-install-toast';
    toast.style.cssText = 'position:fixed;left:12px;right:12px;bottom:16px;z-index:2000;background:#16162d;border:1px solid #7c3aed;border-radius:12px;padding:12px;color:#e2e8f0;display:flex;gap:10px;align-items:center;justify-content:space-between;';
    toast.innerHTML = `
      <div style="font-size:0.88rem;">📲 Installa Multiverse Nexus sul telefono per giocare full-screen offline.</div>
      <button id="btn-pwa-install" style="background:#7c3aed;color:white;border:none;border-radius:8px;padding:8px 10px;cursor:pointer;">Installa</button>
    `;
    document.body.appendChild(toast);

    document.getElementById('btn-pwa-install')?.addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      toast.remove();
    });
  });
}

class GameManager {
  private currentView: GameView = 'HUB';
  private rosterService: RosterService;
  private inventoryService: InventoryService;
  private battleEngine: BattleEngine | null = null;
  private battleTimer: number | null = null;
  private isHandlingQuiz = false;
  private isHandlingVictory = false;

  private lorePoints: number = 0;
  private unlockedCharacters: string[] = [];

  constructor() {
    this.rosterService = new RosterService();
    this.inventoryService = new InventoryService();

    this.lorePoints = parseInt(localStorage.getItem("lore_points") || "0");
    this.unlockedCharacters = JSON.parse(localStorage.getItem("unlocked_chars") || "[]");

    (window as any).onCaptureRequested = () => this.handleCapture();
    (window as any).onItemMenuRequested = () => { this.currentView = 'INVENTORY'; this.render(); };
    (window as any).onShowStats = (charId: string) => this.handleShowStats(charId);
    (window as any).onOpenArchive = () => { this.currentView = 'LORE_ARCHIVE'; this.render(); };
    this.init();
  }

  async init() {
    console.log("Multiverse Nexus Initializing...");
    await this.rosterService.initializeRoster([
      "scooby-doo",
      "courage",
      "goku"
    ]);
    this.render();
  }

  async startBattle() {
    const party = this.rosterService.getActiveTrio();
    if (party.some(p => p === null)) {
        alert("Devi avere 3 personaggi nel team attivo!");
        return;
    }
    const avgLevel = this.rosterService.getActiveAverageLevel();
    const enemy = await EnemyService.generateEnemy(avgLevel, false);
    
    // Genera sfondo casuale e passalo all'engine
    const bgClass = `bg-style-${Math.floor(Math.random() * 5) + 1}`;
    this.battleEngine = new BattleEngine(party as any, enemy, bgClass);

    this.isHandlingVictory = false;
    this.currentView = 'BATTLE';
    this.render();
    this.startBattleLoop();
  }

  startBattleLoop() {
    let lastPhase = '';
    let lastActiveIndex: number | null = null;
    let lastLogLength = 0;
    this.battleTimer = window.setInterval(() => {
      if (!this.battleEngine || this.currentView !== 'BATTLE') return;

      const state = this.battleEngine.getState();

      // --- VICTORY ---
      if (state.phase === 'victory') {
        if (!this.isHandlingVictory) {
          this.isHandlingVictory = true;
          if (this.battleTimer) clearInterval(this.battleTimer);
          this.handleVictory();
        }
        return;
      }

      // --- DEFEAT ---
      if (state.phase === 'defeat') {
        if (this.battleTimer) clearInterval(this.battleTimer);
        setTimeout(() => {
          // Restore party HP partially (30%) so they are not stuck at 0
          this.rosterService.getActiveTrio().forEach(char => {
            if (char) {
              char.stats.hp = Math.ceil(char.stats.maxHp * 0.3);
              char.resource.current = Math.ceil(char.resource.max * 0.5);
              char.isAlive = true;
            }
          });
          this.rosterService.saveCharacters();
          this.battleEngine = null;
          this.currentView = 'HUB';
          this.render();
        }, 3000);
        return;
      }

      // --- QUIZ ---
      if (state.phase === 'quiz') {
        if (!this.isHandlingQuiz) {
          this.isHandlingQuiz = true;
          this.handleQuiz();
        }
        return;
      } else {
        this.isHandlingQuiz = false;
      }

      // --- RENDER / UPDATE BARS ---
      const changed = state.phase !== lastPhase ||
        (state.phase === 'player_turn' && state.activeTurnIndex !== lastActiveIndex) ||
        state.log.length !== lastLogLength;

      if (changed) {
        BattleUI.render(
          state,
          (move: any) => this.battleEngine?.executeMove(move),
          () => { this.currentView = 'INVENTORY'; this.render(); },
          () => {
            if (this.battleTimer) clearInterval(this.battleTimer);
            this.rosterService.getActiveTrio().forEach(char => {
              if (char) {
                char.stats.hp = char.stats.maxHp;
                char.resource.current = char.resource.max;
                char.isAlive = true;
              }
            });
            this.rosterService.saveCharacters();
            this.battleEngine = null;
            this.currentView = 'HUB';
            this.render();
          }
        );
        lastPhase = state.phase;
        lastActiveIndex = state.activeTurnIndex;
        lastLogLength = state.log.length;
      } else {
        BattleUI.updateBars(state);
      }
    }, 50);
  }

  render() {
    switch(this.currentView) {
      case 'HUB':
        HubUI.render(
            this.rosterService.getActiveTrio(),
            this.inventoryService.getInventory().currency,
            () => this.startBattle(),
            () => { this.currentView = 'ROSTER'; this.render(); },
            () => { this.currentView = 'INVENTORY'; this.render(); },
            () => ShopUI.render(() => this.render()),
            () => CodesUI.render((code) => {
              this.handleApplyCode(code);
              return true;
            }, () => this.render())
        );
        break;
      case 'BATTLE':
        // Battle is driven entirely by startBattleLoop — render() only does initial draw
        if (this.battleEngine) {
            BattleUI.render(
                this.battleEngine.getState(),
                (move) => { if (this.battleEngine) { this.battleEngine.executeMove(move); } },
                () => { this.currentView = 'INVENTORY'; this.render(); },
                () => {
                    if (this.battleTimer) clearInterval(this.battleTimer);
                    this.rosterService.getActiveTrio().forEach(char => {
                      if (char) { char.stats.hp = char.stats.maxHp; char.resource.current = char.resource.max; char.isAlive = true; }
                    });
                    this.rosterService.saveCharacters();
                    this.battleEngine = null;
                    this.currentView = 'HUB';
                    this.render();
                }
            );
        }
        break;
      case 'ROSTER':
        RosterUI.render(
            this.rosterService.getBench(),
            this.rosterService.getActiveTrio(),
            (activeIdx, benchIdx) => {
                this.rosterService.swapWithBench(activeIdx, benchIdx);
                this.render();
            },
            (activeIdx) => {
                this.rosterService.removeFromParty(activeIdx);
                this.render();
            },
            () => { this.currentView = 'HUB'; this.render(); }
        );
        break;
      case 'INVENTORY':
        InventoryUI.render(
            this.inventoryService.getInventory(),
            () => { 
                this.currentView = (this.battleEngine && this.currentView !== 'HUB') ? 'BATTLE' : 'HUB'; 
                this.render(); 
            },
            (itemId) => {
                const isInBattleTemp = !!this.battleEngine; 
                const battleState = isInBattleTemp ? this.battleEngine!.getState() : null;
                const targetIdx = battleState?.activeTurnIndex !== null && battleState?.activeTurnIndex !== undefined ? battleState.activeTurnIndex : 0;
                const target = this.rosterService.getActiveTrio()[targetIdx];
                
                if (target && this.inventoryService.useItem(itemId, target)) {
                    if (isInBattleTemp) {
                        this.battleEngine!.getState().log.push(`🎒 Usato oggetto su ${target.name}!`);
                        this.currentView = 'BATTLE';
                    }
                    this.render();
                }
            }
        );
        break;
      case 'LORE_ARCHIVE':
        LoreArchiveUI.render(
            this.lorePoints,
            this.unlockedCharacters,
            () => { this.currentView = 'HUB'; this.render(); },
            (charId, cost) => this.handleUnlock(charId, cost),
            (points) => {
                this.lorePoints += points;
                localStorage.setItem("lore_points", this.lorePoints.toString());
                this.render();
            }
        );
        break;
    }
  }

  async handleUnlock(charId: string, cost: number) {
    if (this.lorePoints >= cost) {
        this.lorePoints -= cost;
        this.unlockedCharacters.push(charId);
        localStorage.setItem("lore_points", this.lorePoints.toString());
        localStorage.setItem("unlocked_chars", JSON.stringify(this.unlockedCharacters));
        
        await (this.rosterService as any).unlockCharacterById(charId);
        this.render();
    }
  }

  handleApplyCode(code: string): boolean {
    if (code === "1111") {
        this.rosterService.getActiveTrio().forEach(char => {
            if (char) {
                char.stats.hp = char.stats.maxHp;
                char.resource.current = char.resource.max;
            }
        });
      alert("⚠️ Sincronizzazione Party Ripristinata!");
      return true;
    } else if (code === "3333") {
      this.inventoryService.addCurrency(1000);
      alert("✨ 1000 Nexus Shards ottenuti!");
      return true;
    } else if (code === "9999") {
      this.rosterService.getActiveTrio().forEach(char => {
          if (char) {
              char.stats.loreLevel = Math.max(char.stats.loreLevel, 2);
              char.currentExp = 0;
              char.expToNextLevel = StatsService.calculateExpToNextLevel(char.stats.loreLevel);
              const base = characterStats[char.id];
              if (base) {
                char.stats = StatsService.calculateLevelUpStats(base, char.stats.loreLevel, base.growthRates);
              }
              char.stats.hp = char.stats.maxHp;
          }
      });
      this.rosterService.saveCharacters();
      alert("🚀 REFRESH COMPLETO: Team livellato e sincronizzato!");
      return true;
    } else {
      alert("❌ Codice non valido");
    }
    this.render();
    return false;
  }

  async handleQuiz() {
    if (!this.battleEngine) return;
    const state = this.battleEngine.getState();
    if (state.phase !== 'quiz') { this.isHandlingQuiz = false; return; }
    
    const enemy = state.enemy;
    const move = state.pendingMove;
    const quiz = await QuizService.generateQuiz(enemy, move?.id);
    
    QuizUI.render(quiz, (isCorrect) => {
        this.isHandlingQuiz = false;
        this.battleEngine!.setQuizResult(isCorrect);
        this.render();
    });
  }

  async handleVictory() {
    if (!this.battleEngine) return;
    const state = this.battleEngine.getState();

    // 1. RIPRISTINO IMMEDIATO (Safe Check)
    this.rosterService.getActiveTrio().forEach(char => {
      if (char) {
        char.stats.hp = char.stats.maxHp;
        if (char.resource) char.resource.current = char.resource.max;
        char.isAlive = true;
      }
    });

    // EXP proporzionale al livello del nemico
    const enemyLevel = state.enemy.stats.loreLevel || 1;
    const baseExp = 80 + (enemyLevel * 20);
    const currency = 30 + (enemyLevel * 10);

    // Rewards
    this.inventoryService.addCurrency(currency);
    state.log.push(`✨ Vittoria! +${currency} Frammenti di Memoria!`);

    // 2. AGGIUNTO EXP (con protezione)
    state.party.forEach(char => {
      if (!char) return;
      const exp = char.isAlive ? baseExp : Math.floor(baseExp * 0.5);
      
      try {
        const levelUpMsg = this.rosterService.addExperience(char.id, exp);
        if (levelUpMsg) state.log.push(`🎊 ${levelUpMsg}`);
      } catch (e) {
        console.error("Error adding exp to", char.name, e);
      }
      state.log.push(`⭐ ${char.name} +${exp} EXP`);
    });

    this.rosterService.saveCharacters();

    // Aggiorna UI con le ricompense visibili
    BattleUI.render(
      state,
      () => {},
      () => {},
      () => {}
    );

    setTimeout(() => {
      this.battleEngine = null;
      this.currentView = 'HUB';
      this.render();
    }, 3500);
  }

  async handleCapture() {
    if (!this.battleEngine) return;
    const enemy = this.battleEngine.getState().enemy;
    
    this.battleEngine.getState().log.push(`⚠️ SINCRONIZZAZIONE AVVIATA: Sfida Finale (3 domande)!`);
    this.render();

    let correctCount = 0;
    const askNext = async () => {
        if (correctCount === 3) {
            this.battleEngine!.getState().log.push(`✨ SINCRONIZZAZIONE COMPLETA! ${enemy.name} è tuo!`);
            this.rosterService.addToRoster(enemy);
            this.battleEngine!.setPhase('victory');
            this.render();
            return;
        }

        const quiz = await QuizService.generateQuiz(enemy);
        QuizUI.render(quiz, (isCorrect) => {
            if (isCorrect) {
                correctCount++;
                this.battleEngine!.getState().log.push(`✅ Domanda ${correctCount}/3 Corretta!`);
                this.render();
                setTimeout(askNext, 500);
            } else {
                this.battleEngine!.getState().log.push(`❌ ERRORE! ${enemy.name} è fuggito nell'iperspazio!`);
                this.battleEngine!.setPhase('defeat');
                this.render();
            }
        });
    };

    askNext();
  }


  handleShowStats(charId: string) {
    let char: GameCharacter | null = null;

    // Use roster data first to ensure saved level/XP values are authoritative.
    char = this.rosterService.getActiveTrio().find(p => p?.id === charId) || null as GameCharacter | null;
    if (!char) {
      char = this.rosterService.getBench().find(p => p?.id === charId) || null as GameCharacter | null;
    }

    // Fallback to battle state only if roster does not contain the requested character.
    if (!char && this.battleEngine) {
      const state = this.battleEngine.getState();
      if (state.enemy.id === charId) char = state.enemy;
      else char = (state.party.find(p => p?.id === charId) || null) as GameCharacter | null;
    }

    if (char) {
        StatsModalUI.render(
          char, 
          this.rosterService.getActiveTrio(),
          (slotIdx) => {
            if (slotIdx === -1) {
              const activeIdx = this.rosterService.getActiveTrio().findIndex(c => c?.id === charId);
              if (activeIdx !== -1) {
                this.rosterService.removeFromParty(activeIdx);
                this.render();
              }
            } else {
              // Equip logic
              const benchIdx = this.rosterService.getBench().findIndex(c => c.id === charId);
              if (benchIdx !== -1) {
                this.rosterService.swapWithBench(slotIdx, benchIdx);
                this.render();
              } else {
                // Already in party, maybe move to another slot?
                const currentSlot = this.rosterService.getActiveTrio().findIndex(c => c?.id === charId);
                // Simple move: for now just swap if already in party
                if (currentSlot !== -1 && currentSlot !== slotIdx) {
                   // Optional: implement intra-party swap if needed
                }
              }
            }
          }
        );
    }
  }
}

function clearLegacyCache() {
  const CURRENT_ROSTER_VERSION = "6"
  const savedVersion = localStorage.getItem("mv_roster_version")
  if (savedVersion !== CURRENT_ROSTER_VERSION) {
    localStorage.removeItem("mv_character_cache_v3")
    localStorage.removeItem("mv_character_cache_v2")
    localStorage.removeItem("quiz_history")
    localStorage.removeItem("multiverse_roster")  // Force full roster reset to remove ghost entries (e.g. duplicate Silente)
    localStorage.setItem("mv_roster_version", CURRENT_ROSTER_VERSION)
    console.log("Roster resettato alla v6: rimosse voci obsolete.")
  }
}

clearLegacyCache()
registerServiceWorker();
setupInstallPrompt();
new GameManager();
