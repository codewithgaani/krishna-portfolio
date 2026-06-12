// ── NAV SCROLL EFFECT ──
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.borderBottomColor = window.scrollY > 20 ? 'rgba(42,42,58,0.8)' : 'var(--border)';
});

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── SMOOTH ACTIVE NAV ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => {
        l.style.color = l.getAttribute('href') === '#' + entry.target.id
          ? 'var(--text)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ── CONTACT FORM ──
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMessage');
form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    formMsg.textContent = '✓ Message sent! I\'ll get back to you soon.';
    form.reset();
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    setTimeout(() => { formMsg.textContent = ''; }, 5000);
  }, 1200);
});

// ── FADE IN ON SCROLL ──
const fadeEls = document.querySelectorAll(
  '.project-card, .skill-block, .cert-card, .achievement-card, .timeline-item, .about-card'
);
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
