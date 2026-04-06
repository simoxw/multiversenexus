import { QuizService } from "../services/quiz.service.ts";
import { QuizUI } from "./quiz.ui.ts";
import { characterPool } from "../data/characterPool.ts";
import { characterExtraData } from "../data/characterExtra.ts";
import { getCharacterFallbackImage, bindImageFallbacks } from "./image-fallback.ts";

export class LoreArchiveUI {
  static render(lorePoints: number, unlockedChars: string[], onBack: () => void, onUnlock: (id: string, cost: number) => void, onChallengeComplete: (points: number) => void) {
    const root = document.getElementById("app");
    if (!root) return;

    // Special characters to unlock
    const specialChars = [
      { id: "vegeta",           cost: 1000, franchise: "anime" },
      { id: "hermione-granger", cost: 800,  franchise: "harry_potter" },
      { id: "shaggy-rogers",    cost: 600,  franchise: "scooby" },
      { id: "sephiroth",        cost: 1500, franchise: "final_fantasy" },
      { id: "itachi",           cost: 1200, franchise: "anime" },
      { id: "elsa",             cost: 900,  franchise: "disney" }
    ];

    root.innerHTML = `
      <div class="archive-container-premium" style="
        min-height: 100vh; background: #020617; color: #e2e8f0; font-family: 'Outfit', sans-serif;
        padding-bottom: 2rem;
      ">
        <!-- HEADER -->
        <header style="
          position: sticky; top: 0; z-index: 100; background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(10px); padding: 1rem 1.5rem; border-bottom: 1px solid rgba(124, 58, 237, 0.2);
          display: flex; justify-content: space-between; align-items: center;
        ">
          <button id="btn-back-hub" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer;">←</button>
          <div style="text-align: center;">
            <h1 style="font-size: 1.1rem; letter-spacing: 2px; margin: 0; color: #fbbf24; font-weight: 900;">BIBLIOTECA DELLE OMBRE</h1>
            <p style="font-size: 0.6rem; color: #64748b; margin: 0; text-transform: uppercase;">Custode della Conoscenza Multiversale</p>
          </div>
          <div style="background: linear-gradient(135deg, #1e293b, #0f172a); padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid #fbbf24; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 0.9rem;">📚</span>
            <span style="font-weight: 900; color: #fbbf24; font-size: 0.9rem;">${lorePoints}</span>
          </div>
        </header>

        <!-- TABS NAV -->
        <nav style="display: flex; gap: 4px; padding: 1rem 1.5rem; justify-content: center;">
           <button class="archive-tab-btn active" data-tab="unlocks" style="flex: 1; padding: 0.8rem; border: none; background: #1e1b4b; color: white; border-radius: 12px 0 0 12px; font-weight: bold; font-size: 0.8rem; cursor: pointer; border: 1px solid #4338ca;">SBLOCCHI</button>
           <button class="archive-tab-btn" data-tab="journal" style="flex: 1; padding: 0.8rem; border: none; background: #0f172a; color: #94a3b8; border-radius: 0 12px 12px 0; font-weight: bold; font-size: 0.8rem; cursor: pointer; border: 1px solid #1e293b;">DIARIO LORE</button>
        </nav>

        <main id="archive-main-content" style="padding: 0 1.5rem;">
           <!-- CONTENT INJECTED BY TABS -->
        </main>
      </div>

      <style>
        .archive-tab-btn.active { background: #4338ca !important; color: white !important; border-color: #6366f1 !important; box-shadow: 0 0 15px rgba(99, 102, 241, 0.3); }
        .daily-card {
          background: linear-gradient(135deg, #1e1b4b, #312e81);
          border-radius: 20px; padding: 1.5rem; position: relative; overflow: hidden; margin-bottom: 2rem;
          border: 1px solid #4338ca; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .daily-card::before { content: ""; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%); pointer-events: none; }
        .unlock-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; }
        .journal-card {
          background: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 1rem;
          display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem; animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        .hex-portrait { border: 2px solid #334155; border-radius: 12px; overflow: hidden; }
        .hex-portrait.anime { border-color: #ef4444; }
        .hex-portrait.harry_potter { border-color: #7c3aed; }
        .hex-portrait.scooby { border-color: #22c55e; }
        .hex-portrait.final_fantasy { border-color: #3b82f6; }
        .hex-portrait.disney { border-color: #fce71b; }
      </style>
    `;

    const main = document.getElementById("archive-main-content")!;
    
    const showTab = (tab: string) => {
      if (tab === 'unlocks') {
        main.innerHTML = `
          <!-- DAILY CHALLENGE -->
          <div class="daily-card">
            <div style="display: flex; gap: 1rem; align-items: center;">
              <div style="font-size: 2.5rem; animation: bounce 2s infinite;">⚡</div>
              <div style="flex: 1;">
                <h3 style="margin: 0; font-size: 1rem; color: #fbbf24;">SFIDA DEL CUSTODE</h3>
                <p style="margin: 0.2rem 0 0.8rem 0; font-size: 0.75rem; color: #94a3b8;">Scegli una categoria e ottieni 50 LP!</p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
                  <button class="btn-start-challenge" data-cat="general" style="background:#fbbf24; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.65rem;">GENERALE</button>
                  <button class="btn-start-challenge" data-cat="anime" style="background:#ef4444; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.65rem;">ANIME</button>
                  <button class="btn-start-challenge" data-cat="harry_potter" style="background:#7c3aed; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.65rem;">MAGIA</button>
                  <button class="btn-start-challenge" data-cat="disney" style="background:#3b82f6; color:white; border:none; padding:0.4rem 0.8rem; border-radius:6px; font-weight:bold; cursor:pointer; font-size:0.65rem;">DISNEY</button>
                </div>
              </div>
            </div>
          </div>

          <h2 style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">Eroi Perduti nel Nexus</h2>
          <div class="unlock-grid">
            ${specialChars.map(char => {
              const poolEntry = characterPool.find(c => c.id === char.id);
              const isUnlocked = unlockedChars.includes(char.id);
              const canAfford = lorePoints >= char.cost;
              return `
                <div style="background: #0f172a; border: 1px solid ${isUnlocked ? '#22c55e' : '#1e293b'}; border-radius: 16px; padding: 1rem; text-align: center; position: relative; opacity: ${isUnlocked ? 1 : 0.8}; transition: transform 0.2s;">
                  <div class="hex-portrait ${char.franchise}" style="width: 60px; height: 68px; margin: 0 auto; filter: ${isUnlocked ? 'none' : 'grayscale(1) contrast(1.2)'}; opacity: ${isUnlocked ? 1 : 0.6}">
                     <img src="" data-fallback="${getCharacterFallbackImage(char.id)}" />
                  </div>
                  <h4 style="margin: 0.8rem 0 0.2rem 0; font-size: 0.8rem;">${poolEntry?.name || char.id}</h4>
                  <p style="font-size: 0.6rem; color: #64748b; margin-bottom: 0.8rem; text-transform: uppercase;">${char.franchise.replace('_', ' ')}</p>
                  
                  ${isUnlocked ? `
                    <div style="color: #22c55e; font-size: 0.7rem; font-weight: bold; background: rgba(34,197,94,0.1); padding: 4px; border-radius: 4px;">SBLOCCATO</div>
                  ` : `
                    <button class="btn-unlock-char" data-id="${char.id}" data-cost="${char.cost}" ${!canAfford ? 'disabled' : ''} style="width: 100%; border: none; background: ${canAfford ? '#fbbf24' : '#1e293b'}; color: ${canAfford ? 'black' : '#94a3b8'}; padding: 0.5rem; border-radius: 8px; font-size: 0.7rem; font-weight: bold; cursor: ${canAfford ? 'pointer' : 'not-allowed'}; box-shadow: ${canAfford ? '0 4px 10px rgba(251,191,36,0.3)' : 'none'};">
                      SBLOCCA (${char.cost} LP)
                    </button>
                  `}
                </div>
              `;
            }).join('')}
          </div>
        `;
        main.querySelectorAll(".btn-start-challenge").forEach(btn => {
          btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-cat") || "general";
            this.startChallenge(onChallengeComplete, cat);
          });
        });
        main.querySelectorAll(".btn-unlock-char").forEach(btn => {
          btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id")!;
            const cost = parseInt(btn.getAttribute("data-cost")!);
            onUnlock(id, cost);
          });
        });
      } else {
        // JOURNAL TAB
        const journalEntries = Object.entries(characterExtraData).filter(([id]) => unlockedChars.includes(id) || ["scooby-doo", "courage", "goku"].includes(id));
        
        main.innerHTML = `
          <h2 style="font-size: 0.9rem; color: #94a3b8; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px;">I Tuoi Incontri</h2>
          <div class="journal-list">
            ${journalEntries.map(([id, rawData]) => {
              const data = rawData as { description: string };
              const meta = characterPool.find(c => c.id === id);
              return `
                <div class="journal-card">
                  <div class="hex-portrait ${meta?.franchise || 'anime'}" style="width: 50px; height: 55px; flex-shrink: 0;">
                    <img src="" data-fallback="${getCharacterFallbackImage(id)}" />
                  </div>
                  <div style="flex: 1;">
                    <h4 style="margin: 0; font-size: 0.9rem; color: #fbbf24;">${meta?.name || id}</h4>
                    <p style="margin: 4px 0 0 0; font-size: 0.7rem; color: #94a3b8; line-height: 1.4;">${data.description}</p>
                  </div>
                </div>
              `;
            }).join('')}
            ${journalEntries.length === 0 ? '<p style="text-align: center; color: #64748b; padding: 2rem;">Nessuna voce registrata nel diario.</p>' : ''}
          </div>
        `;
      }
      bindImageFallbacks(main);
    };

    // TAB LISTENERS
    root.querySelectorAll(".archive-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        root.querySelectorAll(".archive-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        showTab(btn.getAttribute("data-tab")!);
      });
    });

    document.getElementById("btn-back-hub")?.addEventListener("click", onBack);
    
    // Default show unlocks
    showTab('unlocks');
  }

  private static async startChallenge(onComplete: (points: number) => void, category: string = "general") {
    let count = 0;
    const TOTAL = 3; // Reduced to 3 for better engagement

    const askNext = async () => {
        if (count === TOTAL) {
            alert("✨ ECCELLENTE! ✨\nHai dimostrato una profonda conoscenza del Nexus.\n\nRicevi 50 Lore Points!");
            onComplete(50);
            return;
        }

        const quiz = await QuizService.generateHubQuiz(category);
        QuizUI.render(quiz, (isCorrect) => {
            if (isCorrect) {
                count++;
                setTimeout(askNext, 500); // Small delay for better flow
            } else {
                alert("❌ ERRORE NEL NEXUS\n\nLa tua conoscenza è ancora frammentata. Riprova più tardi per ottenere i punti!");
                onComplete(0);
            }
        });
    };

    askNext();
  }
}
