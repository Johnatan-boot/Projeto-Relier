class PlaygroundMicrofrontend extends HTMLElement {
  connectedCallback() {
    
    window.addEventListener('shell:data', (e) => {
  this.querySelector('p').innerText =
    `Dados recebidos do Shell: ${JSON.stringify(e.detail)}`;
});

    this.innerHTML = `
      <style>
        .playground {
          border: 2px dashed #6366f1;
          padding: 24px;
          border-radius: 12px;
          background: #f9fafb;
          animation: fadeIn .4s ease;
        }

        h2 {
          margin: 0 0 8px;
        }

        button {
          margin-top: 12px;
          padding: 8px 14px;
          border: none;
          border-radius: 8px;
          background: #6366f1;
          color: #fff;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>

      <div class="playground">
        <h2>Microfrontend Playground</h2>
        <p>Status: carregado com sucesso 🚀</p>
        <button id="emit">Emitir evento para o Shell</button>
      </div>
    `;

    this.querySelector('#emit')
      .addEventListener('click', () => {
        window.dispatchEvent(
          new CustomEvent('microfrontend:playground', {
            detail: {
              source: 'playground',
              message: 'Evento disparado com sucesso 🎯'
            }
          })
        );
      });
  }
}

customElements.define(
  'playground-microfrontend',
  PlaygroundMicrofrontend
);

console.log('🔥 Playground Web Component registrado');
