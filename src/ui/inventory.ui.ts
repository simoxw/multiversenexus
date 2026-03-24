import type { Inventory, Item } from "../types/game.types.ts";

export class InventoryUI {
  static render(inventory: Inventory, onBack: () => void, onUse?: (itemId: string) => void) {
    const root = document.getElementById("app");
    if (!root) return;

    root.innerHTML = `
      <div class="inventory-container" style="padding: 1rem; max-width: 500px; margin: 0 auto;">
        <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <button id="btn-inv-back" style="padding: 0.5rem 1rem; background: #334155;">←</button>
            <h1 style="font-size: 1.5rem;">ZAINO</h1>
          </div>
          <div style="color: #fbbf24; font-weight: bold;">✨ ${inventory.currency} Fragm.</div>
        </header>

        <section class="inventory-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem;">
          ${inventory.items.map((item, i) => `
            <div class="inv-item" data-id="${item.id}" data-idx="${i}" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; position: relative;">
               <div class="hex-portrait consumable" style="width: 100%; height: auto; aspect-ratio: 1/1.1;">
                  <div style="font-size: 1.5rem;">📦</div>
               </div>
               <div style="position: absolute; bottom: 5px; right: 5px; font-size: 0.7rem; background: var(--bg-dark); padding: 2px 4px; border-radius: 4px; border: 1px solid var(--primary);">x${item.quantity}</div>
            </div>
          `).join('')}
          ${Array(12 - inventory.items.length).fill(0).map(() => `
            <div style="aspect-ratio: 1/1.1; background: #0f172a; border: 1px dashed #334155; clip-path: var(--hex-path); opacity: 0.3;"></div>
          `).join('')}
        </section>

        <section id="item-details" style="background: #16162d; padding: 1.5rem; border-radius: 12px; min-height: 150px; border-top: 2px solid #7c3aed;">
          <p style="color: #94a3b8; text-align: center;">Seleziona un oggetto per i dettagli</p>
        </section>
      </div>
    `;

    document.getElementById("btn-inv-back")?.addEventListener("click", onBack);

    root.querySelectorAll(".inv-item").forEach(el => {
        el.addEventListener("click", () => {
            const itemId = el.getAttribute("data-id")!;
            const item = inventory.items.find(i => i.id === itemId)!;
            this.showDetails(item, onUse);
        });
    });
  }

  private static showDetails(item: Item, onUse?: (itemId: string) => void) {
    const detailBox = document.getElementById("item-details");
    if (!detailBox) return;

    detailBox.innerHTML = `
      <h3 style="color: #a855f7; margin-bottom: 0.5rem;">${item.name.toUpperCase()}</h3>
      <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">${item.description}</p>
      ${onUse ? `<button id="btn-use-item" style="width: 100%; background: #7c3aed;">USA OGGETTO</button>` : ''}
    `;

    if (onUse) {
        document.getElementById("btn-use-item")?.addEventListener("click", () => onUse(item.id));
    }
  }
}
