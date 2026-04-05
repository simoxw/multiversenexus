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
    this.battleEngine = new BattleEngine(party as any, enemy);
    this.currentView = 'BATTLE';
    this.render();
    this.startBattleLoop();
  }

  startBattleLoop() {
    let lastPhase = '';
    this.battleTimer = window.setInterval(() => {
      if (this.battleEngine && this.currentView === 'BATTLE') {
        const state = this.battleEngine.getState();
        if (state.phase === 'quiz') {
            if (!this.isHandlingQuiz) {
                this.isHandlingQuiz = true;
                this.handleQuiz();
            }
            return;
        }
        
        if (state.phase !== lastPhase) {
          BattleUI.render(
            state,
            (move: any) => this.battleEngine?.executeMove(move).then(() => this.render()),
            () => { this.currentView = 'INVENTORY'; this.render(); },
            () => { 
                if (this.battleTimer) clearInterval(this.battleTimer);
                this.battleEngine = null;
                this.currentView = 'HUB';
                this.render();
            }
          );
          lastPhase = state.phase;
        } else {
          BattleUI.updateBars(state);
        }
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
            () => { this.currentView = 'INVENTORY'; this.render(); }
        );
        break;
      case 'BATTLE':
        if (this.battleEngine) {
            BattleUI.render(
                this.battleEngine.getState(),
                (move) => { if (this.battleEngine) { this.battleEngine.executeMove(move); this.render(); } },
                () => { this.currentView = 'INVENTORY'; this.render(); },
                () => { 
                    if (this.battleTimer) clearInterval(this.battleTimer);
                    this.battleEngine = null;
                    this.currentView = 'HUB';
                    this.render();
                }
            );
            
            const state = this.battleEngine.getState();
            if (state.phase === 'victory') {
                if (this.battleTimer) clearInterval(this.battleTimer);
                this.handleVictory();
            } else if (state.phase === 'defeat') {
                if (this.battleTimer) clearInterval(this.battleTimer);
                setTimeout(() => {
                    this.currentView = 'HUB';
                    this.render();
                }, 3000);
            } else if (state.phase === 'quiz') {
                this.handleQuiz();
            }
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
                const targetIdx = isInBattleTemp ? this.battleEngine!.getState().activeTurnIndex : 0;
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
    
    // Rewards
    this.inventoryService.addCurrency(50);
    state.log.push(`✨ Hai ottenuto 50 Frammenti di Memoria!`);
    
    // EXP: 100 EXP for each active member
    state.party.forEach(char => {
        if (char.isAlive) {
            const levelUpMsg = this.rosterService.addExperience(char.id, 100);
            if (levelUpMsg) state.log.push(`🎊 ${levelUpMsg}`);
        }
    });
    
    setTimeout(() => {
        this.currentView = 'HUB';
        this.render();
    }, 4000);
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
    if (this.battleEngine) {
        const state = this.battleEngine.getState();
        if (state.enemy.id === charId) char = state.enemy;
        else char = (state.party.find(p => p.id === charId) || null) as GameCharacter | null;
    }
    
    if (!char) {
        char = this.rosterService.getBench().find(p => p.id === charId) || 
               (this.rosterService.getActiveTrio().find(p => p?.id === charId) || null) as GameCharacter | null;
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
