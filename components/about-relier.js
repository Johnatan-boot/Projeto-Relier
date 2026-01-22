class AboutRelier extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="about" class="about fade-in">
        <div class="container about__wrapper">

          <div class="about__content">
            <h3>Sobre a Relier</h3>
            <p>
              Desenvolvemos soluções digitais focadas em performance,
              inovação e resultados reais para empresas.
            </p>

            <div class="about__cards">
              ${this.card('🚀', '120+', 'Projetos entregues')}
              ${this.card('🤝', '80+', 'Clientes atendidos')}
              ${this.card('🏆', '10 anos', 'Experiência')}
            </div>
          </div>

          <div class="about__image">
            <img src="assets/images/slide1.jpg" alt="Equipe Relier">
          </div>

        </div>
      </section>
    `;
  }

  card(icon, value, label) {
    return `
      <article class="info-card">
        <span class="info-card__icon">${icon}</span>
        <strong>${value}</strong>
        <small>${label}</small>
      </article>
    `;
  }
}

customElements.define('about-relier', AboutRelier);
