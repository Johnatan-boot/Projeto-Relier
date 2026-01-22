class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="container">
          <nav class="navbar">
            <div class="navbar__logo">Relier</div>

            <button class="navbar__toggle" aria-label="Abrir menu">
              ☰
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

  // MENU MOBILE
  initMenu() {
    const toggle = this.querySelector('.navbar__toggle');
    const menu = this.querySelector('.navbar__menu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    // Fecha menu ao clicar em link
    this.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  }

  // EFEITO AO ROLAR A PÁGINA
  handleScroll() {
    const header = this.querySelector('.header');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

customElements.define('navbar-component', NavbarComponent);
