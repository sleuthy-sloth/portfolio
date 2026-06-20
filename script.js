// Smooth scroll for nav links with fixed nav offset
const NAV_HEIGHT = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--nav-height')
);

// Smooth-scroll same-page links; let cross-page links navigate normally
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
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
  });
});

// Show real photo when it loads, handling cached-image race
const profilePhoto = document.getElementById('profile-photo');
if (profilePhoto) {
  const aboutPhoto = profilePhoto.closest('.about-photo');
  if (profilePhoto.complete && profilePhoto.naturalWidth > 0) {
    aboutPhoto.classList.add('has-photo');
  } else {
    profilePhoto.addEventListener('load', () => aboutPhoto.classList.add('has-photo'));
    profilePhoto.addEventListener('error', () => aboutPhoto.classList.remove('has-photo'));
  }
}

// Set current year in footer
const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

// Scroll reveal
const revealEls = document.querySelectorAll('.project-card, .skill-group, .about-grid');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// Active nav link highlighting on scroll (work page only)
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

// Dark mode toggle, persisted to localStorage
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}
themeToggle?.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});
