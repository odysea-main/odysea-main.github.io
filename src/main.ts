// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Scroll reveal, progressively enhanced — content is fully visible without JS
// or if prefers-reduced-motion is set (see CSS fallback in styles.css).
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
document.querySelectorAll<HTMLAnchorElement>('[data-placeholder]').forEach((el) => {
  el.addEventListener('click', (e) => {
    if (el.getAttribute('href') === '#') {
      e.preventDefault();
      console.warn(
        `ILIADx site: "${el.dataset.placeholder}" link is still a placeholder — update it in index.html.`
      );
    }
  });
});
