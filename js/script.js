// ── SCROLL FADE-IN ANIMATIE ──
// Elke element met de klasse 'fade-up' wordt zichtbaar zodra het in beeld scrollt.

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop observeren zodra zichtbaar
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));


// ── CONTACTFORMULIER ──
// Geeft feedback aan de gebruiker bij het versturen van het formulier.

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('.form-submit');
  const naam = document.getElementById('naam').value.trim();
  const email = document.getElementById('email').value.trim();
  const bericht = document.getElementById('bericht').value.trim();

  // Eenvoudige validatie
  if (!naam || !email || !bericht) {
    btn.textContent = 'Vul alle velden in!';
    btn.style.background = '#DC2626';
    setTimeout(() => {
      btn.textContent = 'Stuur bericht';
      btn.style.background = '';
    }, 2500);
    return;
  }

  // Succes feedback
  btn.textContent = 'Verstuurd! ✓';
  btn.style.background = '#059669';

  setTimeout(() => {
    btn.textContent = 'Stuur bericht';
    btn.style.background = '';
    contactForm.reset();
  }, 3000);
});


// ── ACTIEVE NAVIGATIELINK ──
// Markeert de navigatielink die overeenkomt met de huidige sectie.

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--purple-600)';
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach((section) => navObserver.observe(section));
