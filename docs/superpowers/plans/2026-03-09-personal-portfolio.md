# Personal Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bold, minimal single-page personal portfolio website in pure HTML/CSS/JS for an active USAF officer and aeronautical engineer.

**Architecture:** Single `index.html` with all sections, one `style.css` for all styling, and a minimal `script.js` for interactivity (smooth scroll, mobile nav). No framework, no build step, no dependencies beyond a Google Fonts stylesheet link.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JavaScript

---

## Chunk 1: Scaffold & Base Styles

### Task 1: Project Scaffold

**Files:**
- Create: `index.html`
- Create: `style.css`
- Create: `script.js`
- Create: `assets/.gitkeep`

- [ ] **Step 1: Create the assets directory**

```bash
mkdir -p /home/spkoehl/personal-website/assets
touch /home/spkoehl/personal-website/assets/.gitkeep
```

- [ ] **Step 2: Create `index.html` with semantic skeleton**

Full content of `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Your Name] — Aeronautical Engineer</title>
  <meta name="description" content="Professional portfolio of [Your Name], USAF Officer and Aeronautical Engineer specializing in space systems." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav id="nav">
    <div class="nav-inner">
      <span class="nav-name">[Your Name]</span>
      <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <section id="hero"><!-- Task 2 --></section>
    <section id="about"><!-- Task 3 --></section>
    <section id="projects"><!-- Task 4 --></section>
    <section id="skills"><!-- Task 5 --></section>
    <section id="contact"><!-- Task 6 --></section>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create `style.css` with CSS custom properties and reset**

Full content of `style.css`:

```css
/* ── Custom Properties ─────────────────────────────── */
:root {
  --color-bg: #ffffff;
  --color-bg-alt: #f8f8f8;
  --color-text: #111111;
  --color-text-muted: #555555;
  --color-accent: #e63946;
  --color-dark: #111111;
  --color-border: #e8e8e8;
  --font: 'Inter', system-ui, sans-serif;
  --nav-height: 64px;
  --max-width: 1100px;
  --section-pad: 96px 24px;
}

/* ── Reset ─────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { cursor: pointer; background: none; border: none; font: inherit; }
```

- [ ] **Step 4: Create `script.js` stub**

Full content of `script.js`:

```js
// Smooth scroll for nav links (CSS scroll-behavior handles most cases,
// this ensures offset for fixed nav)
const NAV_HEIGHT = 64;

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
```

- [ ] **Step 5: Verify the page loads in browser**

Open `index.html` in a browser (double-click or `open index.html`).
Expected: blank white page, no console errors.

- [ ] **Step 6: Commit**

```bash
cd /home/spkoehl/personal-website
git add index.html style.css script.js assets/.gitkeep
git commit -m "feat: scaffold html/css/js skeleton"
```

---

### Task 2: Navigation

**Files:**
- Modify: `index.html` — replace `<nav>` content
- Modify: `style.css` — append nav styles

- [ ] **Step 1: Add nav styles to `style.css`**

Append to `style.css`:

```css
/* ── Navigation ────────────────────────────────────── */
#nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-height);
  background: rgba(255,255,255,0.97);
  border-bottom: 1px solid var(--color-border);
  z-index: 100;
  backdrop-filter: blur(4px);
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-name {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-links a {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-text-muted);
  transition: color 0.2s;
}

.nav-links a:hover { color: var(--color-accent); }

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.nav-hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--color-text);
  transition: transform 0.2s, opacity 0.2s;
}

/* Mobile nav */
@media (max-width: 768px) {
  .nav-hamburger { display: flex; }

  .nav-links {
    display: none;
    position: fixed;
    inset: var(--nav-height) 0 0 0;
    background: var(--color-bg);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .nav-links.open { display: flex; }

  .nav-links a {
    font-size: 18px;
    color: var(--color-text);
  }
}
```

- [ ] **Step 2: Verify nav renders correctly**

Open `index.html`. Expected: fixed nav bar with name on left and links on right. Resize to mobile — hamburger should appear. Click hamburger — links overlay should open and close.

- [ ] **Step 3: Commit**

```bash
cd /home/spkoehl/personal-website
git add index.html style.css
git commit -m "feat: add sticky nav with mobile hamburger"
```

---

## Chunk 2: Content Sections

### Task 3: Hero Section

**Files:**
- Modify: `index.html` — fill `#hero` section
- Modify: `style.css` — append hero styles

- [ ] **Step 1: Fill in hero HTML in `index.html`**

Replace `<section id="hero"><!-- Task 2 --></section>` with:

```html
<section id="hero">
  <div class="hero-inner">
    <p class="label">Aeronautical Engineer · USAF Officer</p>
    <h1 class="hero-heading">Space Systems.<br>Mission Ready.</h1>
    <div class="hero-divider"></div>
    <p class="hero-sub">
      M.S. Aeronautical Engineering with a focus in Space Studies,
      Embry-Riddle Aeronautical University. Translating deep technical
      expertise into aerospace solutions that matter.
    </p>
    <div class="hero-ctas">
      <a href="#projects" class="btn btn-primary">See My Work</a>
      <a href="assets/cv.pdf" class="btn btn-outline" target="_blank" rel="noopener">Download CV</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append hero styles to `style.css`**

```css
/* ── Hero ──────────────────────────────────────────── */
#hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: var(--section-pad);
  padding-top: calc(var(--nav-height) + 48px);
  background: var(--color-bg);
}

.hero-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}

.label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 20px;
}

.hero-heading {
  font-size: clamp(48px, 8vw, 88px);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -2px;
  color: var(--color-text);
  margin-bottom: 24px;
}

.hero-divider {
  width: 48px;
  height: 4px;
  background: var(--color-accent);
  margin-bottom: 24px;
}

.hero-sub {
  font-size: 17px;
  color: var(--color-text-muted);
  max-width: 520px;
  line-height: 1.7;
  margin-bottom: 40px;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* ── Buttons ───────────────────────────────────────── */
.btn {
  display: inline-block;
  padding: 14px 28px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: opacity 0.2s, background 0.2s, color 0.2s;
}

.btn-primary {
  background: var(--color-accent);
  color: #fff;
}

.btn-primary:hover { opacity: 0.85; }

.btn-outline {
  border: 2px solid var(--color-text);
  color: var(--color-text);
}

.btn-outline:hover {
  background: var(--color-text);
  color: #fff;
}
```

- [ ] **Step 3: Verify hero renders**

Open `index.html`. Expected: full-height hero with large bold heading, red divider, muted subtitle, two CTA buttons. Heading should scale fluidly with viewport width.

- [ ] **Step 4: Commit**

```bash
cd /home/spkoehl/personal-website
git add index.html style.css
git commit -m "feat: add hero section"
```

---

### Task 4: About Section

**Files:**
- Modify: `index.html` — fill `#about` section
- Modify: `style.css` — append about styles

- [ ] **Step 1: Fill in about HTML in `index.html`**

Replace `<section id="about"><!-- Task 3 --></section>` with:

```html
<section id="about">
  <div class="section-inner">
    <div class="about-grid">
      <div class="about-photo">
        <img src="assets/photo.jpg" alt="[Your Name]" onerror="this.style.display='none'" />
        <div class="photo-placeholder" aria-hidden="true">
          <span>Photo</span>
        </div>
      </div>
      <div class="about-content">
        <p class="label">About Me</p>
        <p class="about-bio">
          [Replace this with your bio — who you are, your service background,
          what drives your engineering work, and your passion for space systems.
          Keep it to 3–4 sentences that are direct and confident.]
        </p>
        <div class="about-stats">
          <div class="stat">
            <span class="stat-value">X+</span>
            <span class="stat-label">Years Service</span>
          </div>
          <div class="stat">
            <span class="stat-value">M.S.</span>
            <span class="stat-label">Aeronautical Eng.</span>
          </div>
          <div class="stat">
            <span class="stat-value">ERAU</span>
            <span class="stat-label">Embry-Riddle</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append about styles to `style.css`**

```css
/* ── Section Shared ────────────────────────────────── */
.section-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--section-pad);
}

section { width: 100%; }

/* ── About ─────────────────────────────────────────── */
#about { background: var(--color-bg-alt); }

.about-grid {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 64px;
  align-items: start;
}

.about-photo {
  position: relative;
  aspect-ratio: 1;
  background: var(--color-border);
  border-radius: 4px;
  overflow: hidden;
}

.about-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.about-photo img:not([src="assets/photo.jpg"]) + .photo-placeholder,
.about-photo img[src="assets/photo.jpg"] + .photo-placeholder {
  display: none;
}

.about-bio {
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 40px;
}

.about-stats {
  display: flex;
  gap: 40px;
}

.stat { display: flex; flex-direction: column; gap: 4px; }

.stat-value {
  font-size: 28px;
  font-weight: 900;
  color: var(--color-text);
  line-height: 1;
}

.stat-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .about-photo {
    width: 120px;
    height: 120px;
    aspect-ratio: 1;
  }

  .about-stats { flex-wrap: wrap; gap: 24px; }
}
```

- [ ] **Step 3: Verify about section renders**

Open `index.html` and scroll to About. Expected: gray background, photo placeholder on left (or real photo if added), bio text on right, three stat callouts below bio. On mobile, stacks vertically.

- [ ] **Step 4: Commit**

```bash
cd /home/spkoehl/personal-website
git add index.html style.css
git commit -m "feat: add about section"
```

---

### Task 5: Projects Section

**Files:**
- Modify: `index.html` — fill `#projects` section
- Modify: `style.css` — append projects styles

- [ ] **Step 1: Fill in projects HTML in `index.html`**

Replace `<section id="projects"><!-- Task 4 --></section>` with:

```html
<section id="projects">
  <div class="section-inner">
    <p class="label">Selected Projects</p>
    <h2 class="section-heading">Engineering Work</h2>
    <div class="projects-grid">

      <article class="project-card project-card--featured">
        <p class="project-category">Space Systems</p>
        <h3 class="project-title">[Project Title]</h3>
        <p class="project-desc">
          [Describe the project — what problem it solved, what you built,
          and your specific role. 2–3 sentences.]
        </p>
        <ul class="project-tags">
          <li>Orbital Mechanics</li>
          <li>MATLAB</li>
          <li>Systems Analysis</li>
        </ul>
      </article>

      <article class="project-card project-card--featured">
        <p class="project-category">Research</p>
        <h3 class="project-title">[Project Title]</h3>
        <p class="project-desc">
          [Describe the project — what problem it solved, what you built,
          and your specific role. 2–3 sentences.]
        </p>
        <ul class="project-tags">
          <li>Python</li>
          <li>Data Analysis</li>
          <li>Propulsion</li>
        </ul>
      </article>

      <article class="project-card">
        <p class="project-category">Aerospace Engineering</p>
        <h3 class="project-title">[Project Title]</h3>
        <p class="project-desc">
          [Describe the project. 2–3 sentences.]
        </p>
        <ul class="project-tags">
          <li>CAD</li>
          <li>Structural Analysis</li>
        </ul>
      </article>

      <article class="project-card">
        <p class="project-category">Leadership</p>
        <h3 class="project-title">[Project Title]</h3>
        <p class="project-desc">
          [Describe the project. 2–3 sentences.]
        </p>
        <ul class="project-tags">
          <li>Operations</li>
          <li>Program Management</li>
        </ul>
      </article>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Append projects styles to `style.css`**

```css
/* ── Section Headings ──────────────────────────────── */
.section-heading {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 900;
  letter-spacing: -1px;
  margin-bottom: 48px;
  margin-top: 8px;
}

/* ── Projects ──────────────────────────────────────── */
#projects { background: var(--color-bg); }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.project-card {
  border: 1px solid var(--color-border);
  border-top: 3px solid var(--color-text);
  padding: 28px;
  transition: box-shadow 0.2s;
}

.project-card--featured {
  border-top-color: var(--color-accent);
}

.project-card:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}

.project-category {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 10px;
}

.project-card:not(.project-card--featured) .project-category {
  color: var(--color-text-muted);
}

.project-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 12px;
  line-height: 1.3;
}

.project-desc {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 20px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tags li {
  background: var(--color-bg-alt);
  border: 1px solid var(--color-border);
  padding: 3px 10px;
  font-size: 11px;
  font-weight: 500;
  color: var(--color-text-muted);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .projects-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verify projects section renders**

Scroll to Projects. Expected: 2-column card grid with red top border on featured cards, black on secondary. Tags render as pills. On mobile, grid collapses to 1 column.

- [ ] **Step 4: Commit**

```bash
cd /home/spkoehl/personal-website
git add index.html style.css
git commit -m "feat: add projects section"
```

---

### Task 6: Skills Section

**Files:**
- Modify: `index.html` — fill `#skills` section
- Modify: `style.css` — append skills styles

- [ ] **Step 1: Fill in skills HTML in `index.html`**

Replace `<section id="skills"><!-- Task 5 --></section>` with:

```html
<section id="skills">
  <div class="section-inner">
    <p class="label">Technical Skills</p>
    <h2 class="section-heading">Expertise</h2>
    <div class="skills-grid">

      <div class="skill-group">
        <h3 class="skill-group-title">Engineering</h3>
        <ul class="skill-list">
          <li>Orbital Mechanics</li>
          <li>Spacecraft Systems Design</li>
          <li>Aerodynamics</li>
          <li>Structural Analysis</li>
          <li>Propulsion Systems</li>
          <li>[Add skill]</li>
        </ul>
      </div>

      <div class="skill-group">
        <h3 class="skill-group-title">Software & Tools</h3>
        <ul class="skill-list">
          <li>MATLAB / Simulink</li>
          <li>Python</li>
          <li>STK (Systems Tool Kit)</li>
          <li>AutoCAD / SolidWorks</li>
          <li>Microsoft Office Suite</li>
          <li>[Add tool]</li>
        </ul>
      </div>

      <div class="skill-group">
        <h3 class="skill-group-title">Leadership</h3>
        <ul class="skill-list">
          <li>Mission Planning</li>
          <li>Program Management</li>
          <li>Team Leadership</li>
          <li>Briefing & Presentations</li>
          <li>Operations Management</li>
          <li>[Add skill]</li>
        </ul>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Append skills styles to `style.css`**

```css
/* ── Skills ────────────────────────────────────────── */
#skills { background: var(--color-bg-alt); }

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.skill-group-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--color-accent);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill-list li {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.4;
  padding-left: 12px;
  position: relative;
}

.skill-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 4px;
  height: 4px;
  background: var(--color-accent);
  border-radius: 50%;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

- [ ] **Step 3: Verify skills section renders**

Scroll to Skills. Expected: 3-column layout with red underlined group titles and bulleted skill lists. On mobile, stacks to 1 column.

- [ ] **Step 4: Commit**

```bash
cd /home/spkoehl/personal-website
git add index.html style.css
git commit -m "feat: add skills section"
```

---

### Task 7: Contact Section

**Files:**
- Modify: `index.html` — fill `#contact` section
- Modify: `style.css` — append contact styles

- [ ] **Step 1: Fill in contact HTML in `index.html`**

Replace `<section id="contact"><!-- Task 6 --></section>` with:

```html
<section id="contact">
  <div class="section-inner contact-inner">
    <p class="label label--light">Get In Touch</p>
    <h2 class="section-heading section-heading--light">Let's Connect</h2>
    <p class="contact-sub">
      Open to aerospace research opportunities, engineering roles, and professional collaboration.
    </p>
    <div class="contact-links">
      <a href="mailto:[your@email.com]" class="btn btn-accent">Email Me</a>
      <a href="https://linkedin.com/in/[yourhandle]" class="btn btn-ghost" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://github.com/[yourhandle]" class="btn btn-ghost" target="_blank" rel="noopener">GitHub</a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Append contact styles to `style.css`**

```css
/* ── Contact ───────────────────────────────────────── */
#contact { background: var(--color-dark); }

.contact-inner { text-align: center; }

.label--light { color: var(--color-accent); }

.section-heading--light { color: #ffffff; }

.contact-sub {
  font-size: 16px;
  color: #999;
  max-width: 480px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.contact-links {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-accent {
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  padding: 12px 28px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: background 0.2s, color 0.2s;
}

.btn-accent:hover {
  background: var(--color-accent);
  color: #fff;
}

.btn-ghost {
  border: 2px solid #444;
  color: #999;
  padding: 12px 28px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: border-color 0.2s, color 0.2s;
}

.btn-ghost:hover {
  border-color: #999;
  color: #fff;
}

/* ── Footer ────────────────────────────────────────── */
#contact .section-inner {
  padding-bottom: 48px;
}

#contact::after {
  content: '© ' attr(data-year) ' [Your Name]. All rights reserved.';
  display: block;
  text-align: center;
  font-size: 12px;
  color: #555;
  padding: 20px 24px 40px;
  border-top: 1px solid #222;
}
```

- [ ] **Step 3: Add current year to contact section in `script.js`**

Append to `script.js`:

```js
// Set current year in footer
const contact = document.getElementById('contact');
if (contact) contact.setAttribute('data-year', new Date().getFullYear());
```

- [ ] **Step 4: Verify contact section renders**

Scroll to Contact. Expected: dark background, red accent label, white heading, gray subline, three link buttons. Hover states should work. Footer copyright shows current year.

- [ ] **Step 5: Commit**

```bash
cd /home/spkoehl/personal-website
git add index.html style.css script.js
git commit -m "feat: add contact section with footer"
```

---

## Chunk 3: Polish & Deployment

### Task 8: Final Polish

**Files:**
- Modify: `style.css` — add scroll animations and final touch-ups
- Modify: `script.js` — add scroll reveal

- [ ] **Step 1: Add scroll reveal to `script.js`**

Append to `script.js`:

```js
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
```

- [ ] **Step 2: Add reveal animation to `style.css`**

Append to `style.css`:

```css
/* ── Scroll Reveal ─────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

- [ ] **Step 3: Add active nav link highlighting to `script.js`**

Append to `script.js`:

```js
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
```

- [ ] **Step 4: Add active nav style to `style.css`**

Append to `style.css`:

```css
.nav-links a.active { color: var(--color-accent); }
```

- [ ] **Step 5: Verify animations and active nav**

Open `index.html`. Scroll through page — cards and skill groups should fade in as they enter view. Active nav link should update as you scroll between sections.

- [ ] **Step 6: Commit**

```bash
cd /home/spkoehl/personal-website
git add index.html style.css script.js
git commit -m "feat: add scroll reveal animations and active nav tracking"
```

---

### Task 9: Deployment Setup

**Files:**
- Create: `.gitignore`
- Create: `README.md` (minimal)

- [ ] **Step 1: Create `.gitignore`**

```
.superpowers/
.DS_Store
Thumbs.db
```

- [ ] **Step 2: Create minimal `README.md`**

```markdown
# Personal Portfolio

Personal portfolio website — pure HTML/CSS/JS, no build step required.

## Editing Content

All content is in `index.html`. Search for `[` to find all placeholder text.
Replace photo by adding `assets/photo.jpg`.
Replace CV by adding `assets/cv.pdf`.

## Deployment

**GitHub Pages:** Push to GitHub, enable Pages in repo settings, set source to `main` branch root.

**Netlify:** Drag the project folder into app.netlify.com/drop.
```

- [ ] **Step 3: Final commit**

```bash
cd /home/spkoehl/personal-website
git add .gitignore README.md
git commit -m "chore: add gitignore and readme"
```

- [ ] **Step 4: Verify all placeholders are findable**

```bash
grep -n "\[" /home/spkoehl/personal-website/index.html
```

Expected: list of lines with `[Your Name]`, `[Project Title]`, etc. These are the spots to fill in with real content.

---

## Content Checklist (post-implementation)

After implementation, the owner needs to fill in:

- [ ] Replace `[Your Name]` everywhere in `index.html` and `<title>`
- [ ] Replace `[your@email.com]` in the contact section
- [ ] Replace `[yourhandle]` for LinkedIn and GitHub URLs
- [ ] Write bio paragraph (About section)
- [ ] Replace `X+` with actual years of service
- [ ] Add 2–4 real project titles, descriptions, and tech tags
- [ ] Update skills lists with real skills
- [ ] Add `assets/photo.jpg` (professional headshot)
- [ ] Add `assets/cv.pdf` (current CV)
