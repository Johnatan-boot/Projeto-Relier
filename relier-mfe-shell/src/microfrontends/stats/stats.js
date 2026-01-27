class StatsMicrofrontend extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .stats {
          padding: 24px;
          border-radius: 12px;
          background: #ecfeff;
          border: 2px dashed #06b6d4;
        }
      </style>

      <div class="stats">
        <h2>Microfrontend Stats</h2>
        <p>Outro microfrontend carregado dinamicamente 📊</p>
      </div>
    `;
  }
}

customElements.define('stats-microfrontend', StatsMicrofrontend);
console.log('📊 Stats microfrontend carregado');
