/* =========================
   MENU MOBILE
   ========================= */

const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

/* =========================
   SCROLL SUAVE AO CLICAR
   ========================= */

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// ANIMAÇÃO AO APARECER NA TELA
const animatedElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));

