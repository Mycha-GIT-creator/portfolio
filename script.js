/* ═══════════════════════════════════════════════
   MYCHA SHEM C. JIMENEA  •  script.js
   Cybersecurity Portfolio — Enhanced v2
   ═══════════════════════════════════════════════ */

'use strict';

/* EASTER EGG: Spider developer message */
if (typeof window !== 'undefined') {
  console.log('%c🕷️ Welcome to mycha.sh', 'font-size:24px;font-weight:bold;color:#00e5ff;text-shadow:0 0 10px rgba(0,229,255,.5);');
  console.log('%cLooking for vulnerabilities in my portfolio? Try harder! 🔍', 'font-size:14px;color:#ff00ea;');
  console.log('%cCybersecurity Student @ ADSSU | Lurking in every corner of the web', 'font-size:12px;color:#4a6070;font-style:italic;');
}

/* ─────────────────────────────────────────
   SECTION 1 · THEME TOGGLE
   ───────────────────────────────────────── */
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const avatarFrame = document.getElementById('avatarFrame');
const saved = localStorage.getItem('mycha-theme') || 'dark';
html.setAttribute('data-theme', saved);

toggleBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('mycha-theme', next);

  // Avatar glitch effect
  avatarFrame.classList.remove('glitching');
  void avatarFrame.offsetWidth;
  avatarFrame.classList.add('glitching');
  setTimeout(() => avatarFrame.classList.remove('glitching'), 600);

  // Photo theme transition effect
  const avatarImg = document.getElementById('avatarImg');
  if (avatarImg) {
    avatarImg.classList.add('theme-switching');
    setTimeout(() => avatarImg.classList.remove('theme-switching'), 700);
  }

  setTimeout(drawRadar, 450);
  const pb = document.getElementById('progress-bar');
  pb.style.width = '100%'; pb.style.opacity = '1';
  setTimeout(() => { updateProgress(); pb.style.opacity = ''; }, 350);
});

/* ─────────────────────────────────────────
   SECTION 2 · PROGRESS BAR
   ───────────────────────────────────────── */
const pb = document.getElementById('progress-bar');
function updateProgress() {
  const st = window.scrollY;
  const sh = document.documentElement.scrollHeight - window.innerHeight;
  pb.style.width = (sh > 0 ? (st / sh) * 100 : 0) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ─────────────────────────────────────────
   SECTION 3 · TYPING ANIMATION
   ───────────────────────────────────────── */
const roles = [
  'Aspiring Cybersecurity Specialist',
  'BSIT Student @ ADSSU',
  'Web Developer',
  'Ethical Hacking Enthusiast',
  'Python & Java Programmer',
];
let ri = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed-role');
function type() {
  const word = roles[ri];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ci + 1);
    ci++;
    if (ci === word.length) { setTimeout(() => { deleting = true; type(); }, 1800); return; }
  } else {
    typedEl.textContent = word.slice(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 40 : 75);
}
type();

/* ─────────────────────────────────────────
   SECTION 4 · INTERSECTION OBSERVER (fade-in & timeline)
   ───────────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach((e, idx) => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      // Stagger animation for better visual flow
      if (e.target.dataset.animate) {
        e.target.style.animationDelay = (idx * 0.15) + 's';
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fi, .t-item, [data-animate]').forEach((el, i) => {
  if (el.classList.contains('t-item')) el.style.transitionDelay = (i * 0.08) + 's';
  io.observe(el);
});

/* ─────────────────────────────────────────
   SECTION 5 · SPIDER WEB PARTICLE SYSTEM
   ───────────────────────────────────────── */
const canvas = document.getElementById('web-canvas');
const ctx = canvas.getContext('2d');
let W, H, nodes = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', () => { resize(); initNodes(); });

function initNodes() {
  nodes = Array.from({ length: 60 }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
    r: Math.random() * 1.5 + .5,
  }));
}
initNodes();

let mouse = { x: -9999, y: -9999 };
window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

function getAccentRGB() {
  return html.getAttribute('data-theme') === 'light' ? '0,136,170' : '0,229,255';
}

function drawWeb() {
  ctx.clearRect(0, 0, W, H);
  const rgb = getAccentRGB();
  const maxDist = 130;

  nodes.forEach(n => {
    n.x += n.vx; n.y += n.vy;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;
    const dx = n.x - mouse.x, dy = n.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 80) { n.x += dx / dist * 1.2; n.y += dy / dist * 1.2; }
  });

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < maxDist) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(${rgb},${(1 - d / maxDist) * .18})`;
        ctx.lineWidth = .6; ctx.stroke();
      }
    }
    ctx.beginPath();
    ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${rgb},.35)`;
    ctx.fill();
  }
  requestAnimationFrame(drawWeb);
}
drawWeb();

/* ─────────────────────────────────────────
   SECTION 6 · CURSOR TRAIL (NEW)
   ───────────────────────────────────────── */
const trailCount = 8;
const trailDots = [];
const trailPositions = Array.from({ length: trailCount }, () => ({ x: -100, y: -100 }));

for (let i = 0; i < trailCount; i++) {
  const d = document.createElement('div');
  d.className = 'trail-dot';
  d.style.opacity = (1 - i / trailCount) * 0.5;
  d.style.width = d.style.height = (5 - i * 0.4) + 'px';
  document.body.appendChild(d);
  trailDots.push(d);
}

let mx = -100, my = -100, rx = -100, ry = -100;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');

(function animCursor() {
  // Main cursor
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';

  // Trail — shift positions
  trailPositions.unshift({ x: mx, y: my });
  trailPositions.pop();
  trailDots.forEach((d, i) => {
    const p = trailPositions[i];
    d.style.left = p.x + 'px';
    d.style.top = p.y + 'px';
  });

  requestAnimationFrame(animCursor);
})();

/* ─────────────────────────────────────────
   SECTION 7 · SKILL BARS (NEW)
   ───────────────────────────────────────── */
function animateSkillBars(container) {
  container.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const target = bar.dataset.pct;
    setTimeout(() => { bar.style.width = target + '%'; }, 100);
  });
}

const skillBarObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateSkillBars(e.target);
      skillBarObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-bars').forEach(el => skillBarObserver.observe(el));

/* ─────────────────────────────────────────
   SECTION 8 · SKILLS RADAR
   ───────────────────────────────────────── */
function drawRadar() {
  const radarCanvas = document.getElementById('radarCanvas');
  if (!radarCanvas) return;
  const rCtx = radarCanvas.getContext('2d');
  const W2 = radarCanvas.width, H2 = radarCanvas.height;
  const cx = W2 / 2, cy = H2 / 2, R = Math.min(W2, H2) * 0.38;
  const skills = [
    { label: 'Java', val: .80, color: '#ffd700' },
    { label: 'HTML/CSS', val: .72, color: '#00e5ff' },
    { label: 'Python', val: .60, color: '#ff00ea' },
    { label: 'JS', val: .55, color: '#39ff14' },
    { label: 'Networking', val: .40, color: '#ff6b35' },
    { label: 'Linux', val: .35, color: '#a855f7' },
  ];
  const N = skills.length;
  const isDark = html.getAttribute('data-theme') !== 'light';
  const gridColor = isDark ? 'rgba(0,229,255,0.1)' : 'rgba(0,136,170,0.12)';
  const labelColor = isDark ? '#4a6070' : '#7a94a8';

  rCtx.clearRect(0, 0, W2, H2);

  for (let r = 1; r <= 4; r++) {
    rCtx.beginPath();
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(a) * (R * r / 4);
      const y = cy + Math.sin(a) * (R * r / 4);
      i === 0 ? rCtx.moveTo(x, y) : rCtx.lineTo(x, y);
    }
    rCtx.closePath();
    rCtx.strokeStyle = gridColor; rCtx.lineWidth = 1; rCtx.stroke();
  }

  for (let i = 0; i < N; i++) {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2;
    rCtx.beginPath();
    rCtx.moveTo(cx, cy);
    rCtx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
    rCtx.strokeStyle = gridColor; rCtx.lineWidth = 1; rCtx.stroke();
    const lx = cx + Math.cos(a) * (R + 22), ly = cy + Math.sin(a) * (R + 22);
    rCtx.fillStyle = labelColor;
    rCtx.font = '10px Share Tech Mono, monospace';
    rCtx.textAlign = 'center'; rCtx.textBaseline = 'middle';
    rCtx.fillText(skills[i].label, lx, ly);
  }

  rCtx.beginPath();
  skills.forEach((s, i) => {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * R * s.val, y = cy + Math.sin(a) * R * s.val;
    i === 0 ? rCtx.moveTo(x, y) : rCtx.lineTo(x, y);
  });
  rCtx.closePath();
  rCtx.fillStyle = isDark ? 'rgba(0,229,255,0.12)' : 'rgba(0,136,170,0.1)';
  rCtx.fill();
  rCtx.strokeStyle = isDark ? 'rgba(0,229,255,0.7)' : 'rgba(0,136,170,0.7)';
  rCtx.lineWidth = 1.5; rCtx.stroke();

  skills.forEach((s, i) => {
    const a = (i / N) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * R * s.val, y = cy + Math.sin(a) * R * s.val;
    rCtx.beginPath(); rCtx.arc(x, y, 4, 0, Math.PI * 2);
    rCtx.fillStyle = s.color; rCtx.fill();
    rCtx.strokeStyle = isDark ? '#070b0f' : '#f0f4f8';
    rCtx.lineWidth = 2; rCtx.stroke();
  });
}

const radarObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) drawRadar(); });
}, { threshold: 0.2 });
const radarCanvas = document.getElementById('radarCanvas');
if (radarCanvas) radarObserver.observe(radarCanvas);

/* ─────────────────────────────────────────
   SECTION 9 · PROJECT DATA & MODAL
   ───────────────────────────────────────── */
const projects = [
  {
    num: '01', title: 'Library Management System',
    desc: 'Complete library system with book cataloging, borrower management, and checkout/return tracking. Built with JavaFX for an intuitive desktop experience.',
    tags: ['Java', 'JavaFX', 'OOP', 'Desktop App'], status: 'Completed',
    github: 'https://github.com/Mycha-GIT-creator/LibraryMS',
    icon: '📚'
  },
  {
    num: '02', title: 'Restaurant Ordering System',
    desc: 'Full-featured restaurant app: browse menus, place orders, track status in real-time, and generate receipts. Simulates a complete ordering workflow.',
    tags: ['Java', 'JavaFX', 'OOP', 'Desktop App'], status: 'Completed',
    github: 'https://github.com/Mycha-GIT-creator/La-Tavola',
    icon: '🍽️'
  },
  {
    num: '03', title: 'Smart Waste Management System',
    desc: 'IoT-enabled waste tracking system with collection scheduling, waste categorization, and disposal analytics. Promotes sustainable practices through data insights.',
    tags: ['Java', 'JavaFX', 'OOP', 'Desktop App'], status: 'Completed',
    github: 'https://github.com/Mycha-GIT-creator/TerraNova-Smart-Waste-Management-System',
    icon: '♻️'
  },
  {
    num: '04', title: 'My First Calculator',
    desc: 'The project that sparked my coding journey. A clean, functional calculator built with JavaFX—simple logic, major impact on learning fundamentals. 🕷️',
    tags: ['Java', 'JavaFX', 'Beginner'], status: 'Completed',
    github: 'https://github.com/Mycha-GIT-creator/CalculatorJavaFX',
    icon: '🧮'
  },
];

function openModal(i) {
  const p = projects[i];
  document.getElementById('m-num').textContent = '// project ' + p.num;
  document.getElementById('m-title').textContent = p.title;
  document.getElementById('m-desc').textContent = p.desc;
  document.getElementById('m-tags').innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('m-status').textContent = p.status;
  
  // Set GitHub link
  const githubBtn = document.getElementById('m-github');
  if (p.github) {
    githubBtn.href = p.github;
    githubBtn.style.display = 'inline-block';
  } else {
    githubBtn.style.display = 'none';
  }
  
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModalOnBg(e) { if (e.target.id === 'modalOverlay') closeModal(); }

/* ─────────────────────────────────────────
   SECTION 10 · GALLERY LIGHTBOX (NEW)
   ───────────────────────────────────────── */
const galleryData = [
  { icon: '🕷️', title: 'Action photo', sub: 'Gallery image from the portfolio folder', src: 'gallery/act.jpg' },
  { icon: '📸', title: 'First photo', sub: 'Gallery image from the portfolio folder', src: 'gallery/1st.jpg' },
  { icon: '🖼️', title: 'Third photo', sub: 'Gallery image from the portfolio folder', src: 'gallery/3rd.jpg' },
  { icon: '📷', title: 'Champion photo', sub: 'Gallery image from the portfolio folder', src: 'gallery/champ.jpg' },
  { icon: '✨', title: 'Best action', sub: 'Gallery image from the portfolio folder', src: 'gallery/best%20act.jpg' },
  { icon: '🎮', title: 'Playing', sub: 'Gallery image from the portfolio folder', src: 'gallery/playing.jpg' },
];

function openLightbox(i) {
  const d = galleryData[i];
  document.getElementById('lb-icon').textContent = d.icon;
  document.getElementById('lb-title').textContent = d.title;
  document.getElementById('lb-sub').textContent = d.sub;
  const img = document.getElementById('lb-img');
  img.src = d.src;
  img.alt = d.title;
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeLightboxOnBg(e) { if (e.target.id === 'lightboxOverlay') closeLightbox(); }

/* ─────────────────────────────────────────
   SECTION 11 · LIVE FORM VALIDATION (NEW)
   ───────────────────────────────────────── */
function validateName(val) {
  if (!val.trim()) return 'Name is required';
  if (val.trim().length < 2) return 'Name must be at least 2 characters';
  return '';
}
function validateEmail(val) {
  if (!val.trim()) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Enter a valid email address';
  return '';
}
function validateMsg(val) {
  if (!val.trim()) return 'Message is required';
  if (val.trim().length < 10) return 'Message must be at least 10 characters';
  return '';
}

function attachValidation(inputId, errorId, validator) {
  const input = document.getElementById(inputId);
  const errEl = document.getElementById(errorId);
  if (!input || !errEl) return;

  const check = () => {
    const err = validator(input.value);
    errEl.textContent = err;
    input.classList.toggle('valid', !err && input.value.trim().length > 0);
    input.classList.toggle('invalid', !!err && input.value.trim().length > 0);
    return !err;
  };

  input.addEventListener('input', check);
  input.addEventListener('blur', check);
  return check;
}

const checkName = attachValidation('cf-name', 'cf-name-err', validateName);
const checkEmail = attachValidation('cf-email', 'cf-email-err', validateEmail);
const checkMsg = attachValidation('cf-msg', 'cf-msg-err', validateMsg);

async function submitForm(e) {
  e.preventDefault();
  const ok = checkName() && checkEmail() && checkMsg();
  if (!ok) { showToast('// please fix errors above'); return; }

  const form = document.getElementById('contactForm');
  const btn = document.getElementById('cf-btn');
  const formData = new FormData(form);

  btn.textContent = '// sending...';
  btn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) throw new Error('Submission failed');

    document.getElementById('cf-ok').classList.add('show');
    btn.textContent = '// sent ✓';
    form.reset();
    ['cf-name','cf-email','cf-msg'].forEach(id => {
      const el = document.getElementById(id);
      el.classList.remove('valid','invalid');
    });
  } catch (err) {
    showToast('// submission failed, please try again');
    btn.textContent = '// send message';
    btn.disabled = false;
    return;
  }

  setTimeout(() => {
    document.getElementById('cf-ok').classList.remove('show');
    btn.textContent = '// send message';
    btn.disabled = false;
  }, 5000);
}

/* ─────────────────────────────────────────
   SECTION 12 · BOOT SPLASH
   ───────────────────────────────────────── */
(function () {
  const lines = ['bl0', 'bl1', 'bl2', 'bl3'];
  const bar = document.getElementById('boot-bar');
  const splash = document.getElementById('boot-splash');
  let p = 0;
  const iv = setInterval(() => {
    if (lines[p]) document.getElementById(lines[p]).classList.add('show');
    p++;
    bar.style.width = (p / lines.length * 100) + '%';
    if (p >= lines.length) {
      clearInterval(iv);
      setTimeout(() => {
        splash.classList.add('hidden');
        setTimeout(() => { splash.style.display = 'none'; }, 700);
      }, 500);
    }
  }, 340);
})();

/* ─────────────────────────────────────────
   SECTION 13 · BACK TO TOP
   ───────────────────────────────────────── */
const backTop = document.getElementById('back-top');
let scrollTimeout;
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 300);
  
  // Smooth fade-in/fade-out with opacity
  if (window.scrollY > 300) {
    clearTimeout(scrollTimeout);
    backTop.style.opacity = '1';
  }
  scrollTimeout = setTimeout(() => {
    if (window.scrollY <= 300) {
      backTop.style.opacity = '0';
    }
  }, 150);
}, { passive: true });

// Add smooth scroll behavior to button
backTop.style.transition = 'opacity 0.3s ease';
backTop.style.opacity = '0';

/* ─────────────────────────────────────────
   SECTION 14 · ACTIVE NAV ON SCROLL
   ───────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a, .mobile-menu a');
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => navObserver.observe(s));

/* ─────────────────────────────────────────
   SECTION 15 · MOBILE MENU
   ───────────────────────────────────────── */
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  
  // Prevent body scroll when menu is open
  if (menu.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMenu() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// Enhance touch targets for mobile
if (window.innerWidth <= 768) {
  document.querySelectorAll('.soc-btn, .btn, .c-link').forEach(el => {
    el.style.minHeight = '48px';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
  });
}

/* ─────────────────────────────────────────
   SECTION 16 · ANIMATED STAT COUNTERS
   ───────────────────────────────────────── */
function animCount(el) {
  const target = parseInt(el.dataset.count);
  let cur = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const iv = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur + (target > 10 ? '+' : '');
    if (cur >= target) clearInterval(iv);
  }, 40);
}
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(animCount);
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
document.querySelectorAll('.stats-row').forEach(el => statObserver.observe(el));

/* ─────────────────────────────────────────
   SECTION 17 · TOAST
   ───────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// Nav logo copy
document.querySelector('.nav-logo').addEventListener('click', (e) => {
  if (window.scrollY < 100) {
    e.preventDefault();
    navigator.clipboard?.writeText(window.location.href).then(() => showToast('// link copied to clipboard ✓'));
  }
});

// CV button toast
document.querySelector('.btn-cv')?.addEventListener('click', e => {
  // CV download functionality
  // File is correctly placed at cv/CV.pdf
});

/* ─────────────────────────────────────────
   SECTION 18 · CERTIFICATE LIGHTBOX
   ───────────────────────────────────────── */
const certData = [
  {
    label: '// Cisco — Networking Basics',
    img: 'certs/cert_networking_basics.png',
    issuer: 'Cisco Networking Academy  ·  Issued: Nov 01, 2025'
  },
  {
    label: '// Cisco — Network Addressing & Basic Troubleshooting',
    img: 'certs/cert_network_addressing.png',
    issuer: 'Cisco Networking Academy  ·  Issued: Nov 02, 2025'
  },
  {
    label: '// HackerRank — Java (Basic)',
    img: 'certs/cert_java_basic.png',
    issuer: 'HackerRank  ·  Earned: Mar 13, 2025  ·  ID: 42546C67ACB7'
  },
  {
    label: '// HackerRank — Problem Solving (Intermediate)',
    img: 'certs/cert_problem_solving.png',
    issuer: 'HackerRank  ·  Earned: Mar 13, 2025  ·  ID: 2EC2819BB662'
  },
];

function openCertLightbox(i) {
  const c = certData[i];
  document.getElementById('cert-lb-label').textContent = c.label;
  document.getElementById('cert-lb-img').src = c.img;
  document.getElementById('cert-lb-img').alt = c.label;
  document.getElementById('cert-lb-issuer').textContent = c.issuer;
  document.getElementById('certLbOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCertLightbox() {
  document.getElementById('certLbOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeCertLbOnBg(e) { if (e.target.id === 'certLbOverlay') closeCertLightbox(); }

// Also close cert lightbox on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLightbox(); closeCertLightbox(); }
});