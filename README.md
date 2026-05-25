# 🕷️ mycha.sh — Cybersecurity Portfolio

> *"Lurking in every corner of the web."*

A personal cybersecurity and development portfolio for **Mycha Shem C. Jimenea** — BS Information Technology student, aspiring cybersecurity specialist, and developer based in Digos City, Philippines.

---

## 🔗 Live Preview

> (https://mycha-git-creator.github.io/portfolio/)

---

## 📸 Preview

![Portfolio Preview](ID.png)

---

## ✨ Features

- **Boot Splash Screen** — Terminal-style animated loading sequence (`initializing mycha.sh...`) that greets visitors on first load
- **Custom Cursor** — Dual-layer dot + ring cursor that follows mouse movement with smooth lag
- **Animated Spider Web Canvas** — Generative spider-web background drawn on `<canvas>` that reacts to the cursor
- **Scroll Progress Bar** — Thin progress indicator at the top of the page tracking read depth
- **Glitch Text Effect** — CSS glitch animation on the hero name for a cyberpunk aesthetic
- **Typewriter Role Text** — Cycling typed roles in the hero section (`Aspiring Cybersecurity Specialist`, etc.)
- **Dark / Light Theme Toggle** — Full dark and light mode with a 🌙 / ☀️ toggle button, preference persisted
- **Responsive Navigation** — Desktop nav links + hamburger mobile menu with smooth open/close
- **Floating Social Bar** — Fixed GitHub, LinkedIn, and Email buttons on the side
- **Animated Stats Counter** — Numbers count up from zero when the About section scrolls into view
- **Skills Radar Chart** — Custom-drawn radar/spider chart on `<canvas>` visualizing skill levels
- **Animated Skill Bars** — Progress bars for each language/tool that animate in on scroll
- **Project Cards with Modal** — Clickable project cards that open a detailed modal with tags, description, and GitHub link
- **Certifications Grid with Lightbox** — Certificate cards (Cisco, HackerRank) that open a full-screen lightbox viewer
- **Gallery with Lightbox** — Photo gallery with overlay zoom viewer and keyboard/click-to-close support
- **Contact Form** — Live-validated form powered by [Formspree](https://formspree.io) with auto-response
- **Toast Notifications** — Subtle pop-up toasts for user feedback
- **Back to Top Button** — Appears on scroll, smooth-scrolls back to the top
- **SEO & Open Graph Meta Tags** — Full OG and Twitter Card metadata for link previews
- **Fade-in Scroll Animations** — Sections animate in using `IntersectionObserver` as they enter the viewport

---

## 🗂️ Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Name, role chips, CTA buttons (email / about / CV download), avatar |
| 2 | **About** | Bio, background, interests, animated stats (4 projects, 6 languages, 2 years) |
| 3 | **Experience** | Timeline: ADSSU (present), Cor Jesu College (2022–2024), OJT (Grade 12) |
| 4 | **Stack & Skills** | Proficiency tiers, radar chart, animated skill bars |
| 5 | **Projects** | 4 featured projects with modal detail view |
| 6 | **Certifications** | 4 certificates with lightbox viewer |
| 7 | **Gallery** | 6-photo gallery with lightbox |
| 8 | **Contact** | Info links + validated contact form via Formspree |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, animations, responsive grid/flexbox) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) · [Syne](https://fonts.google.com/specimen/Syne) via Google Fonts |
| Form Backend | [Formspree](https://formspree.io) |
| Charts | Custom `<canvas>` drawing (no external chart library) |
| Icons | Inline SVG |
| Hosting | _(add your platform here)_ |

No frameworks, no build tools, no dependencies — pure HTML/CSS/JS.

---

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML — all sections and modals
├── style.css               # All styles — themes, animations, layout
├── script.js               # All JS — interactions, canvas, animations
├── ID.png                  # Profile photo (avatar + favicon + OG image)
├── cv/
│   └── CV.pdf              # Downloadable CV
├── certs/
│   ├── cert_networking_basics.png
│   ├── cert_network_addressing.png
│   ├── cert_java_basic.png
│   └── cert_problem_solving.png
└── gallery/
    ├── act.jpg
    ├── 1st.jpg
    ├── 3rd.jpg
    ├── champ.jpg
    ├── best act.jpg
    └── playing.jpg
```

---

## 🚀 Projects Featured

### 01 · Library Management System
> Java · JavaFX · OOP · File I/O

Complete desktop library system with book cataloging, borrower management, and checkout/return tracking.

---

### 02 · Restaurant Ordering System
> Java · JavaFX · OOP · UI Design

Full-featured restaurant app with menu browsing, order placement, real-time status tracking, and receipt generation.

---

### 03 · Smart Waste Management System
> Java · JavaFX · IoT Concepts · Data Analytics

IoT-enabled waste tracking system with collection scheduling, waste categorization, and disposal analytics promoting sustainable practices.

---

### 04 · My First Calculator
> Java · JavaFX · Beginner

The project that started it all — a clean, functional calculator that laid the foundation for learning programming fundamentals.

---

## 🏅 Certifications

| Certificate | Issuer | Date |
|-------------|--------|------|
| Networking Basics | Cisco Networking Academy | Nov 1, 2025 |
| Network Addressing & Basic Troubleshooting | Cisco Networking Academy | Nov 2, 2025 |
| Java (Basic) | HackerRank | Mar 13, 2025 |
| Problem Solving (Intermediate) | HackerRank | Mar 13, 2025 |

---

## ⚙️ Getting Started

No build step required. Clone and open.

```bash
git clone https://github.com/Mycha-GIT-creator/portfolio.git
cd portfolio
```

Then open `index.html` in your browser, or use a local server for best results:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Visit `http://localhost:8080` in your browser.

---

## 🌐 Deploying to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select `main` branch and `/ (root)`.
4. Click **Save** — your site will be live at `https://Mycha-GIT-creator.github.io/portfolio`.

---

## 🎨 Theming

The entire color system is driven by CSS custom properties on `:root`. Toggle the `data-theme` attribute on `<html>` between `"dark"` and `"light"` to switch themes. The theme preference is saved to `localStorage` and restored on next visit.

Key CSS variables:

```css
--bg        /* Page background     */
--surface   /* Card backgrounds    */
--text      /* Primary text        */
--accent    /* Cyan highlight       */
--accent2   /* Yellow highlight    */
--muted     /* Subdued text        */
--mono      /* Monospace font      */
```

---

## 📬 Contact Form Setup

The contact form submits to [Formspree](https://formspree.io). If you fork this portfolio:

1. Create a free account at formspree.io.
2. Create a new form and copy your form ID.
3. In `index.html`, replace the `action` URL:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```

---

## 📄 License

This project is open for inspiration and reference. If you use significant portions of the code or design, a credit mention is appreciated. 🕷️

---

## 👤 About the Author

**Mycha Shem C. Jimenea**
BS Information Technology · Agusan del Sur State University (ADSSU)
Digos City, Philippines

[![GitHub](https://img.shields.io/badge/GitHub-Mycha--GIT--creator-181717?style=flat&logo=github)](https://github.com/Mycha-GIT-creator)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mycha--shem--jimenea-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/mycha-shem-jimenea-19b150330)
[![Email](https://img.shields.io/badge/Email-mychasjimenea%40gmail.com-EA4335?style=flat&logo=gmail)](mailto:mychasjimenea@gmail.com)

---

*© 2026 Mycha Shem C. Jimenea. All rights reserved.*
