class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer fade-in">
        <div class="container footer__grid">

          <div class="footer__brand">
            <h4 class="footer__logo">Relier</h4>
            <p>
              Soluções digitais modernas focadas
              em performance, design e resultados.
            </p>
          </div>

          <nav class="footer__links">
            <h5>Navegação</h5>
            <a href="#home">Início</a>
            <a href="#services">Serviços</a>
            <a href="#about">Sobre</a>
            <a href="#contact">Contato</a>
          </nav>

          <div class="footer__contact">
            <h5>Contato</h5>
            <span>📍 Campinas - SP</span>
            <span>📧 contato@relier.com.br</span>
            <span>📞 (19) 99999-9999</span>

            <div class="footer__social">
              <a href="#" aria-label="Instagram">
                ${this.iconInstagram()}
              </a>
              <a href="#" aria-label="Facebook">
                ${this.iconFacebook()}
              </a>
              <a href="#" aria-label="YouTube">
                ${this.iconYoutube()}
              </a>
            </div>
          </div>

        </div>

        <div class="footer__bottom">
          <p>© 2026 Relier. Todos os direitos reservados.</p>
        </div>
      </footer>
    `;
  }

  iconInstagram() {
    return `
      <svg viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1"/>
      </svg>
    `;
  }

  iconFacebook() {
    return `
      <svg viewBox="0 0 24 24">
        <path d="M15 3h-3a5 5 0 0 0-5 5v3H4v4h3v6h4v-6h3.1l.9-4H11V8a1 1 0 0 1 1-1h3z"/>
      </svg>
    `;
  }

  iconYoutube() {
    return `
      <svg viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="4"/>
        <polygon points="10,9 16,12 10,15"/>
      </svg>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
