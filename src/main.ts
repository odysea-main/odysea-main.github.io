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

// --- Populate every data-driven section before anything else runs ---

renderNav('primary-nav', navItems);
renderNav('footer-nav', footerNavItems);
renderTracks('tracks-grid', tracks);
renderCards('curriculum-grid', curriculumTopics);
renderStats('format-grid', formatStats, 'format-value', 'format-label', 'format-stat');
renderStats('stats-grid', precedentStats, 'stat-value', 'stat-label', 'stat-card');
renderTeamSection("core-team-grid", coreTeam);
renderTeamSection("team-grid", teachingAssistants);
renderTeamSection("iliad-advisors-grid", iliadAdvisors);
renderTeamSection("external-advisors-grid", externalAdvisors);
renderCards('who-its-for-grid', whoItsFor);
renderGetInvolved('get-involved-grid', getInvolvedOptions);
renderJoinLink('header-cta', joinLink);
renderJoinLink('hero-cta', joinLink);
renderJoinLink('dates-cta', joinLink);

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