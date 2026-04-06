import type { Item } from "../types/game.types.ts";
import { InventoryService } from "../engine/inventory.service.ts";

export interface ShopItem extends Item {
  price: number;
}

export class ShopUI {
  private static readonly STOCK: ShopItem[] = [
    { id: "scooby-snack", name: "Scooby Snack", description: "Cura 50 HP. Croccanti!", type: "consumable", effect: { hp: 50 }, quantity: 1, price: 25 },
    { id: "hp-elixir", name: "Elisir Hogwarts", description: "Ripristina 40 MP. Magico.", type: "consumable", effect: { mp: 40 }, quantity: 1, price: 50 },
    { id: "phoenix-feather", name: "Piuma Fenice", description: "Rianima un alleato caduto.", type: "consumable", effect: { revive: true }, quantity: 1, price: 150 },
    { id: "iron-blade", name: "Lama di Ferro", description: "ATK +15. Tagliente.", type: "weapon", stats: { atk: 15 }, quantity: 1, price: 300 },
    { id: "leather-vest", name: "Gilet Pelle", description: "DEF +10, RES +5. Robusto.", type: "armor", stats: { def: 10, res: 5 }, quantity: 1, price: 250 },
    { id: "luck-charm", name: "Amuleto Fortuna", description: "LUCK +20. Porta bene.", type: "accessory", stats: { luck: 20 }, quantity: 1, price: 400 }
  ];

  static render(onClose: () => void) {
    const app = document.getElementById("app");
    if (!app) return;

    const inventoryService = new InventoryService();
    const inventory = inventoryService.getInventory();

    const modal = document.createElement("div");
    modal.className = "shop-overlay glass-dark";
    modal.innerHTML = `
      <div class="shop-content animate-pop">
        <header class="shop-header">
          <div class="header-left">
            <h2>🛒 NEXUS BAZAAR</h2>
            <div class="currency-display">💎 ${inventory.currency} Shards</div>
          </div>
          <button id="btn-close-shop" class="close-badge">✕</button>
        </header>

        <div class="shop-grid scrollable-v">
          ${this.STOCK.map(item => `
            <div class="shop-card">
              <div class="shop-card-main">
                <div class="item-icon-circle ${item.type}">
                  ${this.getIcon(item.type)}
                </div>
                <div class="item-info">
                  <span class="item-name">${item.name}</span>
                  <p class="item-desc">${item.description}</p>
                </div>
              </div>
              <div class="shop-card-footer">
                <button class="btn-buy ${inventory.currency >= item.price ? '' : 'disabled'}" 
                        data-id="${item.id}" 
                        ${inventory.currency >= item.price ? '' : 'disabled'}>
                  COMPRA | 💰 ${item.price}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <style>
        .shop-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .shop-content {
          width: 100%;
          max-width: 500px;
          max-height: 85vh;
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0,0,0,0.6);
        }
        .shop-header {
          padding: 1.5rem;
          background: rgba(0,0,0,0.3);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-left h2 { margin: 0; font-size: 1.2rem; color: #facc15; }
        .currency-display { font-size: 0.9rem; color: #fbbf24; font-weight: bold; margin-top: 0.2rem; }
        .close-badge { background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 1.2rem; }
        
        .shop-grid {
          padding: 1rem;
          display: grid;
          gap: 1rem;
          overflow-y: auto;
        }
        .shop-card {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          transition: all 0.2s;
        }
        .shop-card:hover { background: rgba(30, 41, 59, 0.8); border-color: rgba(250, 204, 21, 0.3); }
        .shop-card-main { display: flex; gap: 1rem; align-items: center; }
        .item-icon-circle {
          width: 50px; height: 50px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.5rem;
        }
        .item-icon-circle.consumable { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
        .item-icon-circle.weapon { background: rgba(239, 68, 68, 0.2); color: #f87171; }
        .item-icon-circle.armor { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .item-icon-circle.accessory { background: rgba(168, 85, 247, 0.2); color: #c084fc; }
        
        .item-info { flex: 1; }
        .item-name { font-weight: bold; font-size: 1rem; display: block; }
        .item-desc { font-size: 0.75rem; color: #94a3b8; margin: 0.2rem 0 0; line-height: 1.2; }
        
        .btn-buy {
          width: 100%;
          padding: 0.6rem;
          background: linear-gradient(135deg, #facc15, #eab308);
          border: none;
          border-radius: 8px;
          color: #422006;
          font-weight: bold;
          font-size: 0.85rem;
          cursor: pointer;
          transition: transform 0.1s;
        }
        .btn-buy:active { transform: scale(0.98); }
        .btn-buy.disabled { background: #334155; color: #64748b; cursor: not-allowed; transform: none; }
      </style>
    `;

    app.appendChild(modal);

    // Close Action
    document.getElementById("btn-close-shop")?.addEventListener("click", () => {
      modal.remove();
      onClose();
    });

    // Buy Action
    modal.querySelectorAll(".btn-buy").forEach(btn => {
      btn.addEventListener("click", () => {
        const itemId = btn.getAttribute("data-id");
        const shopItem = this.STOCK.find(i => i.id === itemId);
        if (shopItem && inventory.currency >= shopItem.price) {
          // Process purchase
          inventoryService.addCurrency(-shopItem.price);
          inventoryService.addItem({ ...shopItem, quantity: 1 });
          
          // Audio or visual feedback (simplified Toast)
          this.showToast(`Hai acquistato ${shopItem.name}!`);
          
          // Re-render modal to update balance/buttons
          modal.remove();
          this.render(onClose);
        }
      });
    });
  }

  private static getIcon(type: string) {
    if (type === 'weapon') return '⚔️';
    if (type === 'armor') return '🛡️';
    if (type === 'accessory') return '💍';
    return '🧪';
  }

  private static showToast(msg: string) {
    const toast = document.createElement("div");
    toast.className = "shop-toast animate-slide-up";
    toast.textContent = msg;
    toast.style.cssText = `
      position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
      background: #22c55e; color: white; padding: 10px 20px; border-radius: 30px;
      z-index: 11000; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }
}
