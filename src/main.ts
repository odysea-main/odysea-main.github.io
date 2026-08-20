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
  externalAdvisors,
  getInvolvedOptions,
} from './data';
import type { NavItem, Track, Card, Stat, TeamMember, GetInvolvedOption } from './types';

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

function renderTeam(containerId: string, members: TeamMember[], bioPlaceholder: string, photoPlaceholder: string): void {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = members
    .map((m) => {
      const institutionSuffix = m.institution === undefined ? '' : m.institution || ' <!-- TODO: institution -->';
      return `
    <div class="team-card reveal">
      <div class="team-avatar-wrapper">${photoPlaceholder}</div>
      <div class="team-info">
        <h3>${m.name || '<!-- TODO: name -->'}</h3>
        <p class="team-role">${m.role}${institutionSuffix}</p>
        <p class="team-bio">${m.bio || bioPlaceholder}</p>
      </div>
    </div>`;
    })
    .join('');
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

// --- Populate every data-driven section before anything else runs ---

renderNav('primary-nav', navItems);
renderNav('footer-nav', footerNavItems);
renderTracks('tracks-grid', tracks);
renderCards('curriculum-grid', curriculumTopics);
renderStats('format-grid', formatStats, 'format-value', 'format-label', 'format-stat');
renderStats('stats-grid', precedentStats, 'stat-value', 'stat-label', 'stat-card');
renderTeam('core-team-grid', coreTeam, '<!-- TODO: replace with core team bio -->', '<!-- TODO: replace with core team photo -->');
renderTeam('team-grid', teachingAssistants, '<!-- TODO: replace with TA bio -->', '<!-- TODO: replace with TA photo -->');
renderTeam('iliad-advisors-grid', iliadAdvisors, '<!-- TODO: replace with advisor bio -->', '<!-- TODO: replace with advisor photo -->');
renderTeam('external-advisors-grid', externalAdvisors, '<!-- TODO: replace with advisor bio -->', '<!-- TODO: replace with advisor photo -->');
renderCards('who-its-for-grid', whoItsFor);
renderGetInvolved('get-involved-grid', getInvolvedOptions);

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