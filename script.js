// Smooth scroll for nav links (CSS scroll-behavior handles most cases,
// this ensures offset for fixed nav)
const NAV_HEIGHT = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
);

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Mobile nav toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is clicked
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
  });
});

// Show real photo when it loads; show placeholder if it fails
const profilePhoto = document.getElementById('profile-photo');
if (profilePhoto) {
  profilePhoto.addEventListener('load', () => {
    profilePhoto.closest('.about-photo').classList.add('has-photo');
  });
  profilePhoto.addEventListener('error', () => {
    profilePhoto.closest('.about-photo').classList.remove('has-photo');
  });
}

// Set current year in footer
const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// Scroll reveal — fade sections in as they enter viewport
const revealEls = document.querySelectorAll('.project-card, .skill-group, .about-grid');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAs.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));
