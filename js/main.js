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

ScrollReveal().reveal('.bd-text, .about__h1, .projects__h1, .skill-h1', { origin: 'top' });
ScrollReveal().reveal('.img, .project__2, .skills__icons, .card-three, .card-four', { origin: 'bottom' });
ScrollReveal().reveal('.bd-text .name, .project__1, .about__img, .card-one', { origin: 'left' });
ScrollReveal().reveal('.bd-text .intro__txt, .project__3, .about__txt, .about__h2, .card-two', { origin: 'right' });

// typed js

const typed = new Typed('.multiple-text', {
  strings: ['Backend Developer', 'UI Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

