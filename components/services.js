class ServicesComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="services" class="services fade-in">
        <div class="container">

          <header class="section__header">
            <h3>Nossos Serviços</h3>
            <p>Soluções completas para o seu negócio</p>
          </header>

          <div class="services__grid">

            <!-- CARD 1 -->
            <article class="service-card service-card--blue">
              <div class="service-card__icon">
                ${this.iconCode()}
              </div>
              <h4>Criação de Sites</h4>
              <p>Sites modernos, rápidos e responsivos.</p>
              <a href="#contact" class="btn btn--outline">
                Saiba mais
              </a>
            </article>

            <!-- CARD 2 -->
            <article class="service-card service-card--green">
              <div class="service-card__icon">
                ${this.iconSystem()}
              </div>
              <h4>Sistemas Web</h4>
              <p>Aplicações sob medida para sua empresa.</p>
              <a href="#contact" class="btn btn--outline">
                Saiba mais
              </a>
            </article>

            <!-- CARD 3 -->
            <article class="service-card service-card--purple">
              <div class="service-card__icon">
                ${this.iconGrowth()}
              </div>
              <h4>Transformação Digital</h4>
              <p>Estratégias digitais focadas em resultado.</p>
              <a href="#contact" class="btn btn--outline">
                Saiba mais
              </a>
            </article>

          </div>
        </div>
      </section>
    `;
  }

  /* ÍCONES SVG INLINE (PERFORMANCE + CONTROLE TOTAL) */

  iconCode() {
    return `
      <svg viewBox="0 0 24 24">
        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M10 19l4-14"/>
      </svg>
    `;
  }

  iconSystem() {
    return `
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="2"/>
        <path d="M8 20h8"/>
      </svg>
    `;
  }

  iconGrowth() {
    return `
      <svg viewBox="0 0 24 24">
        <path d="M3 17l6-6 4 4 7-7"/>
        <path d="M14 7h7v7"/>
      </svg>
    `;
  }
}

customElements.define('services-component', ServicesComponent);
