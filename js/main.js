const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Scroll Reveal

ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.bd-text, .about__h2, .projects__h1, .skills__h1', { origin: 'top' });
ScrollReveal().reveal('.img, .projects, .skills__icons', { origin: 'bottom' });
ScrollReveal().reveal('.bd-text .name, .about__img', { origin: 'left' });
ScrollReveal().reveal('.bd-text .intro__txt, .about__txt', { origin: 'right' });

// typed js

const typed = new Typed('.multiple-text', {
  strings: ['Backend Developer', 'UI Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

