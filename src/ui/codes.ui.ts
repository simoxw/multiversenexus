
export class CodesUI {
  static render(onApply: (code: string) => boolean, onBack: () => void) {
    const app = document.getElementById("app");
    if (!app) return;

    const modal = document.createElement("div");
    modal.className = "stats-modal-overlay";
    modal.style.zIndex = "3000";
    modal.innerHTML = `
      <div class="stats-modal-card" style="max-width: 350px; text-align: center; background: #0f172a; border: 2px solid #10b981; box-shadow: 0 0 25px rgba(16, 185, 129, 0.2);">
        <h2 style="color: #10b981; margin-bottom: 0.5rem; letter-spacing: 2px;">NEXUS CODES</h2>
        <p style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 1.5rem;">Inserisci un codice segreto per manipolare il multiverso.</p>
        
        <input type="text" id="input-code" placeholder="####" maxlength="10" 
          style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid #334155; border-radius: 8px; color: white; font-size: 1.5rem; text-align: center; letter-spacing: 5px; margin-bottom: 1rem; outline: none;" />
        
        <div id="code-error" style="color: #ef4444; font-size: 0.8rem; margin-bottom: 1rem; display: none;">Codice non valido o errato!</div>
        <div id="code-success" style="color: #10b981; font-size: 0.8rem; margin-bottom: 1rem; display: none;">Codice accettato! Sincronizzazione...</div>

        <div style="display: flex; gap: 10px;">
          <button id="btn-cancel-codes" style="flex: 1; padding: 0.8rem; background: #1e293b; color: white; border: none; border-radius: 8px; cursor: pointer;">ANNULLA</button>
          <button id="btn-submit-codes" style="flex: 2; padding: 0.8rem; background: #10b981; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">RISCATTA</button>
        </div>
      </div>
    `;

    app.appendChild(modal);

    const input = modal.querySelector("#input-code") as HTMLInputElement;
    const error = modal.querySelector("#code-error") as HTMLDivElement;
    const success = modal.querySelector("#code-success") as HTMLDivElement;

    input.focus();

    const handleSubmit = () => {
      const code = input.value.trim();
      if (onApply(code)) {
        error.style.display = "none";
        success.style.display = "block";
        input.disabled = true;
        setTimeout(() => {
          modal.remove();
          onBack();
        }, 1500);
      } else {
        error.style.display = "block";
        success.style.display = "none";
        input.value = "";
        input.focus();
      }
    };

    document.getElementById("btn-submit-codes")?.addEventListener("click", handleSubmit);
    document.getElementById("btn-cancel-codes")?.addEventListener("click", () => {
      modal.remove();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleSubmit();
    });
  }
}
