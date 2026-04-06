import { HubUI } from "./hub.ui.ts";
import { RosterUI } from "./roster.ui.ts";
import { InventoryUI } from "./inventory.ui.ts";
// ... altri import ...

export type AppScreen = "hub" | "battle" | "roster" | "inventory" | "equipment" | "pause" | "shop";

export class UIManager {
  private static currentScreen: AppScreen = "hub";

  static init() {
    this.setupGlobalShortcuts();
  }

  static setupGlobalShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.currentScreen === "pause") {
            this.hidePauseMenu();
        } else if (this.currentScreen !== "battle") {
            this.showPauseMenu();
        }
      }
    });
  }

  static renderScreen(screen: AppScreen, data: any) {
    this.currentScreen = screen;
    const app = document.getElementById("app");
    if (!app) return;

    // Clear previous
    app.innerHTML = "";

    switch (screen) {
      case "hub":
        HubUI.render(data.party, data.currency, data.onStartBattle, data.onOpenRoster, data.onOpenInventory, data.onOpenShop, data.onOpenCodes);
        break;
      case "roster":
        RosterUI.render(data.bench, data.activeTrio, data.onSwap, data.onRemove, data.onBack);
        break;
      case "inventory":
        InventoryUI.render(data.inventory, data.onUse, data.onBack);
        break;
      default:
        console.warn(`Screen ${screen} not implemented in UIManager`);
    }
  }

  static showPauseMenu() {
    let overlay = document.getElementById("pause-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "pause-overlay";
      overlay.className = "pause-menu-overlay glass-heavy";
      document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
      <div class="pause-card">
        <h2>PAUSA</h2>
        <div class="pause-buttons">
          <button id="btn-pause-resume" class="btn-pause">RIPRENDI</button>
          <button id="btn-pause-roster" class="btn-pause">SQUADRA</button>
          <button id="btn-pause-inventory" class="btn-pause">ZAINO</button>
          <button id="btn-pause-save" class="btn-pause">SALVA</button>
          <button id="btn-pause-quit" class="btn-pause quit">TORNA AL TITOLO</button>
        </div>
      </div>
    `;

    overlay.style.display = "flex";
    
    // Listeners
    document.getElementById("btn-pause-resume")?.addEventListener("click", () => this.hidePauseMenu());
    // ... etc ...
  }

  static hidePauseMenu() {
    const overlay = document.getElementById("pause-overlay");
    if (overlay) overlay.style.display = "none";
  }
}
