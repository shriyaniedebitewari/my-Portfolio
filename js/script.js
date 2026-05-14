const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));


const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('.form-submit');
    const naam = document.getElementById('naam').value.trim();
    const email = document.getElementById('email').value.trim();
    const bericht = document.getElementById('bericht').value.trim();

    if (!naam || !email || !bericht) {
      btn.textContent = 'Vul alle velden in!';
      btn.classList.add('btn-error');
      setTimeout(() => {
        btn.textContent = 'Stuur bericht';
        btn.classList.remove('btn-error');
      }, 2500);
      return;
    }

    btn.textContent = 'Verstuurd! ✓';
    btn.classList.add('btn-success');

    setTimeout(() => {
      btn.textContent = 'Stuur bericht';
      btn.classList.remove('btn-success');
      contactForm.reset();
    }, 3000);
  });
}


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.remove('nav-active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('nav-active');
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach((section) => navObserver.observe(section));