import {
  navItems,
  footerNavItems,
  tracks,
  curriculumTopics,
  whoItsFor,
  formatStats,
  precedentStats,
  coreTeam,
  teachingAssistants,
  iliadAdvisors,
  joinLink,
  externalAdvisors,
  getInvolvedOptions,
  curriculumData,
  carouselSlides
} from './data';
import type { NavItem, Track, Card, Stat, TeamMember, GetInvolvedOption, JoinLink } from './types';

// --- Render helpers: each fills one container from a data.ts array ---

function renderNav(containerId: string, items: NavItem[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map((item) => `<a href="${item.href}">${item.label}</a>`).join('');
}

function renderTracks(containerId: string, items: Track[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map(
      (track) => `
    <div class="track-card reveal${track.featured ? ' track-card-featured' : ''}">
      <span class="track-tag">${track.tag}</span>
      <h3>${track.name}</h3>
      <p class="track-desc">${track.description}</p>
      <ul class="track-list">
        ${track.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
    </div>`
    )
    .join('');
}

function renderCards(containerId: string, items: Card[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map(
      (item) => `
    <div class="card reveal">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>`
    )
    .join('');
}

function renderStats(containerId: string, items: Stat[], valueClass: string, labelClass: string, cardClass: string): void {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items
    .map(
      (stat) => `
    <div class="${cardClass}">
      <span class="${valueClass}">${stat.value}</span>
      <span class="${labelClass}">${stat.label}</span>
    </div>`
    )
    .join('');
}

const presenterColors: Record<string, string> = {
  'Shashvat': '#e0ecff',
  'Daniel': '#e5f7ec',
  'Nicholas': '#fdeee0',
  'Ming Liang': '#f3e8fd',
};

const presenterTextColors: Record<string, string> = {
  'Shashvat': '#2450b3',
  'Daniel': '#1f8a4c',
  'Nicholas': '#c25a12',
  'Ming Liang': '#7a3fc2',
};

function renderPresenterBadge(name: string): string {
  const bg = presenterColors[name] || '#eef0f3';
  const fg = presenterTextColors[name] || '#333';
  return `<span class="presenter-badge" style="background-color:${bg}; color:${fg};">${name}</span>`;
}

function renderCurriculum(): void {
  const container = document.getElementById('curriculum-body');
  if (!container) return;

  container.innerHTML = curriculumData
    .map(
      (row) => `
      <tr>
        <td data-label="Week">${row.week}</td>
        <td data-label="Date">${row.date}</td>
        <td data-label="Chapter">${row.chapter}</td>
        <td data-label="Themes">
          <ul class="theme-list">
            ${row.themes.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </td>
        <td data-label="Presenter">${renderPresenterBadge(row.presenter)}</td>
      </tr>
    `
    )
    .join('');
}

function renderTeamSection(containerId: string, teamData: TeamMember[]): void {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = teamData.map(member => {
    // Generate avatar HTML
    const avatarHtml = (member.image && member.image.trim() !== '') ? `
      <div class="team-avatar-wrap">
        ${member.link 
          ? `<a href="${member.link}" target="_blank" rel="noopener noreferrer" aria-label="${member.name}'s profile">
              <img src="${member.image}" alt="${member.name}" class="team-avatar" loading="lazy" />
            </a>`
          : `<img src="${member.image}" alt="${member.name}" class="team-avatar" loading="lazy" />`
        }
      </div>
    ` : '';

    // Generate themed globe icon positioned at top right
    const globeHtml = member.link ? `
      <a href="${member.link}" target="_blank" rel="noopener noreferrer" class="card-globe-link" aria-label="${member.name}'s profile" title="Profile / Website">
        <svg class="icon-globe" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.07c.83 1.2 1.5 2.62 1.91 3.93h-3.82c.41-1.31 1.08-2.73 1.91-3.93zM4.26 14a7.82 7.82 0 0 1 0-4h3.38a17.2 17.2 0 0 0 0 4zm.81 2h2.95a15.65 15.65 0 0 0 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 2.53-3.56A15.65 15.65 0 0 0 8.02 8zM12 19.93c-.83-1.2-1.5-2.62-1.91-3.93h3.82c-.41 1.31-1.08 2.73-1.91 3.93zM13.97 14h-3.94a15.2 15.2 0 0 1 0-4h3.38a15.2 15.2 0 0 1 0 4zm2.01 5.56a15.65 15.65 0 0 0 1.38-3.56h2.95a8.03 8.03 0 0 1-2.53 3.56zM16.36 14a17.2 17.2 0 0 0 0-4h3.38a7.82 7.82 0 0 1 0 4z"/>
        </svg>
      </a>
    ` : '';

    return `
      <div class="card team-card">
        ${globeHtml}
        ${avatarHtml}
        <div class="team-info">
          <h4>${member.name}</h4>
          <p class="team-role">${member.role}</p>
          ${member.description ? `<p class="team-desc">${member.description}</p>` : ''}
        </div>
      </div>
    `;
  }).join("");
}

function renderGetInvolved(containerId: string, options: GetInvolvedOption[]): void {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = options
    .map(
      (opt) => `
    <div class="get-involved-card">
      <span class="card-icon" aria-hidden="true">${opt.icon}</span>
      <div>
        <h3>${opt.title}</h3>
        <p>${opt.description}</p>
      </div>
      <a class="get-involved-link" data-placeholder="${opt.placeholder}" href="${opt.href}">
        ${opt.linkText} <span>→</span>
      </a>
    </div>`
    )
    .join('');
}

function renderJoinLink(elementId: string, link: JoinLink): void {
  const el = document.getElementById(elementId) as HTMLAnchorElement | null;
  if (!el) return;
  el.textContent = link.text;
  el.setAttribute('href', link.href);
  if (link.placeholder) {
    el.dataset.placeholder = link.placeholder;
  }
}

function initGallery(): void {
  const section = document.getElementById('gallery');
  const track = document.getElementById('carousel-track');
  const dots = document.getElementById('carousel-indicators');
  const prev = document.getElementById('carousel-prev');
  const next = document.getElementById('carousel-next');
  const carousel = document.querySelector<HTMLElement>('.carousel');
  const viewport = document.querySelector<HTMLElement>('.carousel-viewport');
  if (!section || !track || !dots || !prev || !next || !carousel || !viewport) return;

  const total = carouselSlides.length;
  if (total === 0) {
    section.hidden = true;
    return;
  }

  track.innerHTML = carouselSlides
    .map(
      (s, i) => `
    <figure class="carousel-slide" aria-roledescription="slide" aria-label="${i + 1} of ${total}">
      <div class="carousel-image-wrap">
        <img src="${s.imageSrc}" alt="${s.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
      </div>
      <figcaption class="carousel-caption">
        <span class="carousel-label">${s.label}</span>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </figcaption>
    </figure>`
    )
    .join('');

  dots.innerHTML = carouselSlides
    .map((_, i) => `<button class="indicator" type="button" data-index="${i}" aria-label="Go to photo ${i + 1}"></button>`)
    .join('');

  const slides = track.querySelectorAll<HTMLElement>('.carousel-slide');
  const indicators = dots.querySelectorAll<HTMLButtonElement>('.indicator');
  let index = 0;

  const goTo = (i: number): void => {
    index = (i + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((el, n) => el.setAttribute('aria-hidden', String(n !== index)));
    indicators.forEach((el, n) => {
      el.classList.toggle('active', n === index);
      if (n === index) el.setAttribute('aria-current', 'true');
      else el.removeAttribute('aria-current');
    });
  };

   const AUTOPLAY_MS = 4000;
  let timer: number | null = null;

  const stop = (): void => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  };

  // Restarting the timer on every call also resets the countdown after a manual click or swipe
  const start = (): void => {
    if (total < 2) return;
    stop();
    timer = window.setInterval(() => goTo(index + 1), AUTOPLAY_MS);
  };

  prev.addEventListener('click', () => { goTo(index - 1); start(); });
  next.addEventListener('click', () => { goTo(index + 1); start(); });
  dots.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('.indicator');
    if (btn) { goTo(Number(btn.dataset.index)); start(); }
  });

  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { goTo(index - 1); start(); }
    if (e.key === 'ArrowRight') { goTo(index + 1); start(); }
  });

  // Swipe
  let startX = 0;
  viewport.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { goTo(index + (dx < 0 ? 1 : -1)); start(); }
  });

  // Pause while hovering, or while a keyboard user has focus inside; resume afterwards
  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', (e) => {
    if ((e.target as HTMLElement).matches(':focus-visible')) stop();
  });
  carousel.addEventListener('focusout', start);

  goTo(0);
  start();
}

// --- Populate every data-driven section before anything else runs ---

renderNav('primary-nav', navItems);
renderNav('footer-nav', footerNavItems);
renderTracks('tracks-grid', tracks);
renderCards('curriculum-grid', curriculumTopics);
renderStats('format-grid', formatStats, 'format-value', 'format-label', 'format-stat');
renderStats('stats-grid', precedentStats, 'stat-value', 'stat-label', 'stat-card');
renderCurriculum();
renderTeamSection("core-team-grid", coreTeam);
renderTeamSection("team-grid", teachingAssistants);
renderTeamSection("iliad-advisors-grid", iliadAdvisors);
renderTeamSection("external-advisors-grid", externalAdvisors);
renderCards('who-its-for-grid', whoItsFor);
renderGetInvolved('get-involved-grid', getInvolvedOptions);
renderJoinLink('header-cta', joinLink);
renderJoinLink('hero-cta', joinLink);
renderJoinLink('dates-cta', joinLink);
initGallery();


// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Scroll reveal, progressively enhanced — content is fully visible without JS
// or if prefers-reduced-motion is set (see CSS fallback in styles.css).
// Runs after the render calls above so it picks up the freshly injected .reveal elements.
const revealEls = document.querySelectorAll<HTMLElement>('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Friendly console nudge for placeholder links (Telegram / LinkedIn / forms).
// See README "Before you publish" checklist for the full list to swap in.
// Runs after the render calls above so it also covers the get-involved links data.ts generates.
document.querySelectorAll<HTMLAnchorElement>('[data-placeholder]').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (el.getAttribute('href') === '#') {
      e.preventDefault();
      console.warn(
        `Odysea site: "${el.dataset.placeholder}" link is still a placeholder — update it in data.ts or index.html.`
      );
    }
  });
});