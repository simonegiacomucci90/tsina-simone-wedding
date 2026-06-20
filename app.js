/**
 * WEDDING WEBSITE — APP
 * =====================
 * Reads from CONTENT (content.js) and builds the DOM.
 * Supports Italian (it), English (en), Hebrew (he / RTL).
 * Do NOT store content here — edit content.js instead.
 */

/* ── Active language state ──────────────────────────────────── */
let currentLang = CONTENT.defaultLang || 'it';

/** Resolve a translatable value: either a plain string or a { it, en, he } object. */
function t(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[currentLang] || value['en'] || value['it'] || '';
}

/* ── Helpers ────────────────────────────────────────────────── */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = t(value);
}

function setHtml(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = typeof value === 'string' ? value : t(value);
}

function makeImgWrapper(src, altValue) {
  const alt = t(altValue);
  const wrapper = document.createElement('div');
  wrapper.className = 'story-image';

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';

  img.addEventListener('error', () => {
    const ph = document.createElement('div');
    ph.className = 'img-placeholder';
    ph.textContent = alt || '📷';
    wrapper.replaceChild(ph, img);
  });

  wrapper.appendChild(img);
  return wrapper;
}

/* ── Language switcher ──────────────────────────────────────── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;

      // Update pressed state
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
      });

      // RTL for Hebrew
      const isRtl = lang === 'he';
      document.documentElement.dir  = isRtl ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;

      // Re-render all dynamic content
      renderAll();
    });
  });
}

/* ── Hero ───────────────────────────────────────────────────── */
function buildHero() {
  const { couple, date, hero } = CONTENT;

  if (hero.backgroundImage) {
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    const img = (isMobile && hero.backgroundImageMobile) ? hero.backgroundImageMobile : hero.backgroundImage;
    document.querySelector('.section-hero').style.backgroundImage = `url('${img}')`;

    window.matchMedia('(max-width: 720px)').addEventListener('change', e => {
      const src = (e.matches && hero.backgroundImageMobile) ? hero.backgroundImageMobile : hero.backgroundImage;
      document.querySelector('.section-hero').style.backgroundImage = `url('${src}')`;
    });
  }

  const overlay = document.getElementById('hero-overlay');
  if (overlay) overlay.style.background = `rgba(0,0,0,${hero.overlayOpacity})`;

  // Names are static (not translated)
  setHtml('hero-names',
    `${couple.name1} <span class="ampersand">${couple.ampersand}</span> ${couple.name2}`
  );
  document.title = `${couple.name1} & ${couple.name2} · ${t(date.display)}`;
  setText('nav-logo', `${couple.name1} & ${couple.name2}`);
}

function renderHero() {
  const { couple, date, hero } = CONTENT;
  setText('hero-tagline',  couple.tagline);
  setText('hero-subtitle', couple.subtitle);
  setText('hero-date',     `${t(date.dayRange)} · ${t(date.display)}`);
  setText('hero-venue',   hero.venueLabel);
}

/* ── Countdown ──────────────────────────────────────────────── */
let countdownInitialized = false;

function buildCountdown() {
  if (countdownInitialized) return;
  countdownInitialized = true;

  const target = new Date(CONTENT.date.iso).getTime();
  const container = document.getElementById('countdown');
  if (!container) return;

  const labelKeys = {
    it: ['Giorni', 'Ore', 'Minuti', 'Secondi'],
    en: ['Days',   'Hours', 'Minutes', 'Seconds'],
    he: ['ימים',  'שעות',  'דקות',    'שניות'],
  };

  // Build structure once; update numbers and labels on language change
  container.innerHTML = '';
  const units = [0, 1, 2, 3].map(() => {
    const unit  = document.createElement('div');
    unit.className = 'countdown-unit';
    const num   = document.createElement('span');
    num.className = 'countdown-number';
    const label = document.createElement('span');
    label.className = 'countdown-label';
    unit.append(num, label);
    container.appendChild(unit);
    return { num, label };
  });

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      container.innerHTML = `<span style="font-family:var(--font-heading);font-size:1.5rem;font-style:italic">🎉</span>`;
      return;
    }
    const vals  = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000) / 60000),
      Math.floor((diff % 60000) / 1000),
    ];
    const labels = labelKeys[currentLang] || labelKeys['en'];
    vals.forEach((v, i) => {
      units[i].num.textContent   = String(v).padStart(2, '0');
      units[i].label.textContent = labels[i];
    });
  }

  tick();
  setInterval(tick, 1000);
}

/* ── Our Story ──────────────────────────────────────────────── */
let storyLightboxImages = [];

function renderStory() {
  const { story } = CONTENT;
  setText('story-title', story.sectionTitle);
  const introEl = document.getElementById('story-intro');
  if (introEl) {
    introEl.innerHTML = t(story.intro)
      .split('\n\n')
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  const grid = document.getElementById('story-gallery');
  if (!grid) return;
  grid.innerHTML = '';

  storyLightboxImages = story.images || [];

  storyLightboxImages.forEach((imgData, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-thumb reveal';
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');

    item.innerHTML = `
      <img src="${imgData.src}" alt="${t(imgData.alt)}" loading="lazy" />
      <div class="gallery-thumb-overlay" aria-hidden="true">&#128269;</div>
    `;

    const open = () => openLightbox(index);
    item.addEventListener('click', open);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });

    grid.appendChild(item);
  });

  initLightbox();
}

/* ── Event Details ──────────────────────────────────────────── */
function renderDetails() {
  const { details } = CONTENT;
  setText('details-title', details.sectionTitle);

  const grid = document.getElementById('details-grid');
  if (!grid) return;
  grid.innerHTML = '';

  details.cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'detail-card reveal';
    div.setAttribute('role', 'listitem');

    const lines = t(card.lines); // array for current lang
    const linesHtml = lines.map(l => `<p>${l}</p>`).join('');

    div.innerHTML = `
      <span class="detail-icon" aria-hidden="true">${card.icon}</span>
      <h3>${t(card.title)}</h3>
      ${linesHtml}
    `;

    grid.appendChild(div);
  });
}

/* ── Schedule ───────────────────────────────────────────────── */
function renderSchedule() {
  const { schedule } = CONTENT;
  setText('schedule-title', schedule.sectionTitle);

  const list = document.getElementById('schedule-list');
  if (!list) return;
  list.innerHTML = '';

  schedule.items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'schedule-item reveal';
    const note = t(item.note);
    li.innerHTML = `
      <span class="schedule-time">${item.time}</span>
      <div class="schedule-body">
        <p class="schedule-label">${t(item.label)}</p>
        ${note ? `<p class="schedule-note">${note}</p>` : ''}
      </div>
    `;
    list.appendChild(li);
  });
}

/* ── Venue ──────────────────────────────────────────────────── */
function renderVenue() {
  const { venue } = CONTENT;
  setText('venue-title', venue.sectionTitle);
  setText('venue-name', venue.name);
  setText('venue-description', venue.description);
  setText('venue-address', venue.address);

  const dir = document.getElementById('venue-directions');
  if (dir) { dir.href = venue.directionsUrl; dir.textContent = t(venue.directionsLabel); }

  const web = document.getElementById('venue-website');
  if (web) { web.href = venue.website; web.textContent = t(venue.websiteLabel); }

  const iframe = document.getElementById('venue-map-iframe');
  if (iframe && !iframe.src) iframe.src = venue.mapsEmbedUrl;
}

/* ── Explore / Attractions ──────────────────────────────────── */
function renderExplore() {
  const { explore } = CONTENT;
  setText('explore-title',          explore.sectionTitle);
  setText('explore-intro',          explore.intro);
  const grid = document.getElementById('places-grid');
  if (!grid) return;
  grid.innerHTML = '';

  explore.places.forEach(place => {
    const card = document.createElement('div');
    card.className = 'place-card reveal';

    const imageHtml = place.image
      ? `<img class="place-image" src="${place.image}" alt="${place.name}" loading="lazy" />`
      : '';

    const mustSeeHtml = place.mustSee && place.mustSee.length
      ? `<ul class="place-mustsee">${place.mustSee.map(s => `<li>${t(s)}</li>`).join('')}</ul>`
      : '';

    card.innerHTML = `
      ${imageHtml}
      <div class="place-card-body">
        <div class="place-header">
          <span class="place-emoji" aria-hidden="true">${place.emoji}</span>
          <span class="place-name">${place.name}</span>
          <span class="place-drive">${t(place.drive)}</span>
        </div>
        <p class="place-desc">${t(place.desc)}</p>
        ${mustSeeHtml}
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ── Travel / How to get there ──────────────────────────────── */
function renderTravel() {
  const { travel } = CONTENT;
  setText('travel-title', travel.sectionTitle);
  setText('travel-intro', travel.intro);

  const container = document.getElementById('airports-list');
  if (!container) return;
  container.innerHTML = '';

  // Badge colours
  const badgeColors = { green: '#2d7a4f', blue: '#1a5fa8', yellow: '#b07d00' };
  const badgeBg     = { green: '#e8f5ee', blue: '#e8f0fb', yellow: '#fef9e7' };

  // ── Airports ──────────────────────────────────────────────
  const airportsWrap = document.createElement('div');
  airportsWrap.className = 'travel-section reveal';
  airportsWrap.innerHTML = `<h3 class="travel-subtitle">✈️ ${t({ en:'Recommended Airports', it:'Aeroporti consigliati', he:'נמלי תעופה מומלצים' })}</h3>`;
  const airportsGrid = document.createElement('div');
  airportsGrid.className = 'travel-airports-grid';

  travel.airports.forEach(ap => {
    const color  = badgeColors[ap.badge] || '#555';
    const bg     = badgeBg[ap.badge]     || '#f5f5f5';
    const card   = document.createElement('a');
    card.className = 'travel-airport-card reveal';
    card.href      = ap.url;
    card.target    = '_blank';
    card.rel       = 'noopener';
    card.innerHTML = `
      <span class="travel-airport-code" style="color:${color};background:${bg}">${ap.code}</span>
      <p class="travel-airport-name">${t(ap.name)}</p>
      <p class="travel-airport-desc">${t(ap.desc)}</p>
    `;
    airportsGrid.appendChild(card);
  });
  airportsWrap.appendChild(airportsGrid);
  container.appendChild(airportsWrap);

  // ── Train ────────────────────────────────────────────────
  const tr = travel.trainSection;
  const trainWrap = document.createElement('div');
  trainWrap.className = 'travel-section reveal';
  const routesHtml = tr.routes.map(r => `
    <div class="travel-route">
      <span class="travel-route-from">${t(r.from)}</span>
      <span class="travel-route-desc">${t(r.desc)}</span>
    </div>
  `).join('');
  const trainAppsHtml = tr.apps.map(a => `
    <a href="${a.url}" class="travel-app-chip" target="_blank" rel="noopener">
      🚆 ${a.name} <span>${t(a.desc)}</span>
    </a>
  `).join('');
  trainWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(tr.title)}</h3>
    <p class="travel-text">${t(tr.intro)}</p>
    <div class="travel-routes">${routesHtml}</div>
    <div class="travel-chips">${trainAppsHtml}</div>
  `;
  container.appendChild(trainWrap);

  // ── Coach ────────────────────────────────────────────────
  const co = travel.coachSection;
  const coachWrap = document.createElement('div');
  coachWrap.className = 'travel-section reveal';
  const stepsHtml = co.steps.map((s, i) => `
    <li class="travel-step"><span class="travel-step-num">${i + 1}</span>${t(s)}</li>
  `).join('');
  const coachChips = co.companies.map(c => `
    <a href="${c.url}" class="travel-app-chip" target="_blank" rel="noopener">🚌 ${c.name}</a>
  `).join('');
  coachWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(co.title)}</h3>
    <p class="travel-text">${t(co.intro)}</p>
    <p class="travel-route-title">${t(co.routeTitle)}</p>
    <ol class="travel-steps">${stepsHtml}</ol>
    <div class="travel-chips">${coachChips}</div>
  `;
  container.appendChild(coachWrap);

  // ── Shuttle ──────────────────────────────────────────────
  const sh = travel.shuttleSection;
  const shuttleWrap = document.createElement('div');
  shuttleWrap.className = 'travel-section travel-highlight reveal';
  shuttleWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(sh.title)}</h3>
    <p class="travel-text">${t(sh.text)}</p>
  `;
  container.appendChild(shuttleWrap);

  // ── Car Rental ───────────────────────────────────────────
  const ca = travel.carSection;
  const carWrap = document.createElement('div');
  carWrap.className = 'travel-section reveal';
  const carChips = ca.companies.map(c => `
    <a href="${c.url}" class="travel-app-chip" target="_blank" rel="noopener">🚗 ${c.name}</a>
  `).join('');
  carWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(ca.title)}</h3>
    <p class="travel-text">${t(ca.intro)}</p>
    <div class="travel-chips">${carChips}</div>
  `;
  container.appendChild(carWrap);

  // ── Apps ─────────────────────────────────────────────────
  const ap = travel.appsSection;
  const appsWrap = document.createElement('div');
  appsWrap.className = 'travel-section reveal';
  const appsHtml = ap.apps.map(a => `
    <a href="${a.url}" class="travel-app-chip" target="_blank" rel="noopener">
      ${a.emoji} ${a.name} <span>${t(a.desc)}</span>
    </a>
  `).join('');
  appsWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(ap.title)}</h3>
    <div class="travel-chips">${appsHtml}</div>
  `;
  container.appendChild(appsWrap);

  // ── Contact note ─────────────────────────────────────────
  const noteWrap = document.createElement('p');
  noteWrap.className = 'travel-contact-note reveal';
  noteWrap.textContent = t(travel.contactNote);
  container.appendChild(noteWrap);
}

/* ── FAQ ────────────────────────────────────────────────────── */
function renderFaq() {
  const { faq } = CONTENT;
  setText('faq-title', faq.sectionTitle);

  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = '';

  faq.items.forEach((item, i) => {
    const answerId = `faq-answer-${i}`;

    const dt = document.createElement('dt');
    dt.className = 'faq-item reveal';
    dt.innerHTML = `
      <button class="faq-question" aria-expanded="false" aria-controls="${answerId}">
        ${t(item.q)}
        <span class="faq-icon" aria-hidden="true">+</span>
      </button>
    `;

    const dd = document.createElement('dd');
    dd.className = 'faq-answer';
    dd.id = answerId;
    dd.innerHTML = `<p>${t(item.a)}</p>`;

    dt.appendChild(dd);
    list.appendChild(dt);

    dt.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = dt.classList.toggle('open');
      dt.querySelector('.faq-question').setAttribute('aria-expanded', isOpen);
    });
  });
}

/* ── Gifts ──────────────────────────────────────────────────── */
function renderGifts() {
  const { gifts } = CONTENT;
  setText('gifts-title', gifts.sectionTitle);
  setText('gifts-intro', gifts.intro);

  const grid = document.getElementById('gifts-grid');
  if (!grid) return;
  grid.innerHTML = '';

  gifts.options.forEach(option => {
    const div = document.createElement('div');
    div.className = 'gift-card reveal';

    const btnHtml = option.url
      ? `<a href="${option.url}" class="btn btn-outline" target="_blank" rel="noopener">${t(option.label)}</a>`
      : '';

    div.innerHTML = `
      <span class="gift-icon" aria-hidden="true">${option.icon}</span>
      <h3>${t(option.title)}</h3>
      <p>${t(option.text)}</p>
      ${btnHtml}
    `;

    grid.appendChild(div);
  });
}


/* ── Lightbox ───────────────────────────────────────────────── */
let lightboxIndex = 0;

function initLightbox() {
  const lb    = document.getElementById('lightbox');
  const close = document.getElementById('lightbox-close');
  const prev  = document.getElementById('lightbox-prev');
  const next  = document.getElementById('lightbox-next');
  if (!lb) return;

  close.addEventListener('click', closeLightbox);
  prev.addEventListener('click',  () => navigateLightbox(-1));
  next.addEventListener('click',  () => navigateLightbox(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function navigateLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + storyLightboxImages.length) % storyLightboxImages.length;
  setLightboxImage(lightboxIndex);
}

function setLightboxImage(index) {
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  const { src, alt } = storyLightboxImages[index];
  if (img) { img.src = src; img.alt = t(alt); }
  if (cap) cap.textContent = t(alt);
}

function openLightbox(index) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lightboxIndex = index;
  setLightboxImage(index);
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.hidden = true;
  document.body.style.overflow = '';
}

/* ── RSVP ───────────────────────────────────────────────────── */
function renderRsvp() {
  const { rsvp } = CONTENT;
  setText('rsvp-title', rsvp.sectionTitle);
  setText('rsvp-intro', rsvp.intro);

  const iframe = document.getElementById('rsvp-iframe');
  if (!iframe) return;

  const newSrc = rsvp.formUrls[currentLang] || rsvp.formUrls['en'];
  iframe.height = rsvp.formHeight;

  // Only update src when the language actually changes to avoid a reload flicker
  if (iframe.src !== newSrc) {
    iframe.src = newSrc;
  }

  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn) {
    waBtn.href      = rsvp.whatsapp.url;
    waBtn.innerHTML = rsvp.whatsapp.icon + t(rsvp.whatsapp.label);
  }

  const calBtn = document.getElementById('calendar-btn');
  if (calBtn) {
    calBtn.href      = rsvp.calendar.url;
    calBtn.innerHTML = rsvp.calendar.icon + t(rsvp.calendar.label);
  }
}

/* ── Footer ─────────────────────────────────────────────────── */
function renderFooter() {
  setText('footer-text', CONTENT.footer.text);
}

/* ── Nav labels ─────────────────────────────────────────────── */
function renderNav() {
  document.querySelectorAll('[data-nav]').forEach(link => {
    const key = link.dataset.nav;
    if (CONTENT.nav[key]) link.textContent = t(CONTENT.nav[key]);
  });
}

/* ── Navbar behaviour (scroll + hamburger) ──────────────────── */
function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Scroll-reveal (IntersectionObserver) ───────────────────── */
let revealObserver = null;

function initReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    revealObserver.observe(el);
  });
}

/* ── Full re-render (called on language switch) ─────────────── */
function renderAll() {
  renderHero();
  renderNav();
  renderStory();
  renderDetails();
  renderSchedule();
  renderVenue();
  renderExplore();
  renderTravel();

  renderGifts();
  renderRsvp();
  renderFooter();

  // Re-observe all .reveal elements after DOM is updated
  requestAnimationFrame(initReveal);
}

/* ── Boot ───────────────────────────────────────────────────── */
function boot() {
  // One-time structural builds (things that don't change layout on lang switch)
  buildHero();
  buildCountdown();
  initNav();
  initLangSwitcher();

  // Initial full render in defaultLang
  renderAll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
