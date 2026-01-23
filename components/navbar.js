class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="container">
          <nav class="navbar">
            <div class="navbar__logo">Relier</div>

            <button class="navbar__toggle" aria-label="Abrir menu">
              <span class="icon icon-menu">☰</span>
              <span class="icon icon-close">✕</span>
            </button>

            <ul class="navbar__menu">
              <li><a href="#home">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;

    this.initMenu();
    this.handleScroll();
  }

  initMenu() {
    const toggle = this.querySelector('.navbar__toggle');
    const menu = this.querySelector('.navbar__menu');

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('active');
      toggle.classList.toggle('open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });

    this.querySelectorAll('.navbar__menu a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('open');
        document.body.classList.remove('menu-open');
      });
    });
  }

  handleScroll() {
    const header = this.querySelector('.header');

    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
}

customElements.define('navbar-component', NavbarComponent);
