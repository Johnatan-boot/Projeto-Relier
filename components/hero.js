class HeroComponent extends HTMLElement {
  connectedCallback() {
    this.currentIndex = 0;

    this.images = [
      'assets/images/slide1.jpg',
      'assets/images/slide2.jpg',
      'assets/images/slide3.jpg'
    ];

    this.startX = 0;
    this.endX = 0;

    this.render();
    this.startCarousel();
    this.addEvents();
  }

  render() {
    this.innerHTML = `
      <section id="home" class="hero">
        <div class="container hero__wrapper">

          <!-- TEXTO -->
          <div class="hero__content fade-in">
            <h2>Soluções digitais que conectam ideias</h2>
            <p>
              Desenvolvemos sites, sistemas e experiências digitais
              com foco em performance e resultados.
            </p>
            <a href="#contact" class="btn btn--primary">Fale conosco</a>
          </div>

          <!-- CARROSSEL -->
          <div class="hero__carousel fade-in">

            <img 
              src="${this.images[0]}" 
              class="hero__image active"
              alt="Imagem destaque"
            >

            <!-- BOTÕES -->
            <button class="carousel__btn prev">‹</button>
            <button class="carousel__btn next">›</button>

            <!-- INDICADORES -->
            <div class="carousel__dots">
              ${this.images
                .map(
                  (_, i) =>
                    `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
                )
                .join('')}
            </div>
          </div>

        </div>
      </section>
    `;
  }

  updateImage(index) {
    const image = this.querySelector('.hero__image');
    const dots = this.querySelectorAll('.dot');

    image.classList.remove('active');

    setTimeout(() => {
      this.currentIndex = index;
      image.src = this.images[this.currentIndex];
      image.classList.add('active');

      dots.forEach(dot => dot.classList.remove('active'));
      dots[this.currentIndex].classList.add('active');
    }, 300);
  }

  next() {
    const index = (this.currentIndex + 1) % this.images.length;
    this.updateImage(index);
  }

  prev() {
    const index =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateImage(index);
  }

  startCarousel() {
    this.interval = setInterval(() => this.next(), 5000);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.startCarousel();
  }

  addEvents() {
    this.querySelector('.next').addEventListener('click', () => {
      this.next();
      this.resetInterval();
    });

    this.querySelector('.prev').addEventListener('click', () => {
      this.prev();
      this.resetInterval();
    });

    this.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', e => {
        this.updateImage(Number(e.target.dataset.index));
        this.resetInterval();
      });
    });

    /* SWIPE MOBILE */
    const carousel = this.querySelector('.hero__carousel');

    carousel.addEventListener('touchstart', e => {
      this.startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', e => {
      this.endX = e.changedTouches[0].clientX;

      if (this.startX - this.endX > 50) {
        this.next();
      } else if (this.endX - this.startX > 50) {
        this.prev();
      }

      this.resetInterval();
    });
  }
}

customElements.define('hero-component', HeroComponent);
