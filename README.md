# ILIADx site

A single-page site for ILIADx (Bringing Iliad to Singapore) — a free,
community-led pilot bringing Iliad's technical AI alignment curriculum to
Singapore. Built on the same design system as the Spectra site: dark hero,
mission strip, card grids, and a community CTA. Built and bundled with
Vite + TypeScript + npm.

## Files

- `index.html` — all page content and structure; loads `styles.css`
  directly and `src/main.ts` as a module script
- `styles.css` — design tokens (colors, type) + all styling
- `src/main.ts` — scroll-reveal animation, footer year, and console warnings
  on unfilled placeholder links — progressive enhancement, the page works
  fine with JS off. This is the file Vite/tsc actually compiles; there is no
  separate `script.js`.
- `assets/` — drop advisor/TA photos and social-preview image here
- `package.json`, `tsconfig.json`, `vite.config.ts` — the build setup.
  `tsconfig.json` points `include` at `src/`, so it needs at least one file
  there (`src/main.ts`) or `tsc` will error with "No inputs were found."
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages
  automatically on every push to `main` (see **Publishing** below)

## Local development

```bash
npm install
npm run dev       # starts a local dev server with hot reload
```

## Building

```bash
npm run build      # type-checks with tsc, then bundles with vite → dist/
npm run preview    # locally serve the built dist/ output
```

## Before you publish — checklist

This site ships with several **placeholders** so it's safe to preview
without leaking dead links or fake people. Search `index.html` for each of
the following before going live:

1. **Telegram link** — search `data-placeholder="telegram"` (3 spots) and
   replace `href="#"` with your invite link.
2. **LinkedIn link** — search `data-placeholder="linkedin"` (2 spots) and
   replace `href="#"`.
3. **Application form links** — search `data-placeholder="apply-form"`,
   `data-placeholder="ta-form"`, and `data-placeholder="partner-contact"`
   (1 spot each, in `#get-involved`) and point them at real forms
   (e.g. Airtable/Google Forms) once they exist.
4. **Advisor(s)** — the `#advisors` section has one placeholder card
   (currently "Leon", from the proposal doc). Search
   `<!-- TODO: replace with advisor` for the photo and bio to fill in, and
   add more `.team-card` blocks to `#advisors-grid` if there's more than
   one advisor.
5. **Local TAs** — the `#team` section ships with two placeholder cards.
   Search `<!-- TODO: name -->`, `<!-- TODO: institution -->`, and
   `<!-- TODO: replace with TA bio -->` to fill in real names, credentials,
   and bios. Add or remove `.team-card` blocks in `#team-grid` to match your
   actual TA count.
6. **Dates** — the `#dates` section currently reads "Dates to be confirmed."
   Replace with real start/end dates once the cohort is locked in.
7. **Logo** — the header uses a text wordmark + a small gradient dot
   (`.wordmark-dot`), no image dependency. If you get a logo file later,
   drop it in `assets/` and swap the `.wordmark` markup in `index.html` for
   an `<img>` tag.

## A note on the "precedent" section

`#precedent` cites TARA's 2025 Sydney/Melbourne pilot outcomes (90%
recommend, 91% career-pursuit uplift, 40%/47% 12-month outcomes), explicitly
attributed to TARA — not ILIADx, which has no outcomes of its own yet as a
first-time pilot. Keep this attribution intact if the section is edited;
presenting TARA's numbers as ILIADx's own would be misleading.

## Publishing on GitHub Pages (via the included Actions workflow)

This repo includes `.github/workflows/deploy.yml`, which runs `npm ci` and
`npm run build` on every push to `main` and deploys the resulting `dist/`
straight to GitHub Pages — no manual building or pushing a `dist/` folder
required.

1. Create a new **public** GitHub repo (e.g. `iliadx-singapore.github.io`).
2. Push these files to the repo root:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-org-or-user>/iliadx-singapore.github.io.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions** (not
   "Deploy from a branch" — that mode serves raw files as-is and won't run
   the Vite build, so `src/main.ts` would never get compiled).
5. Push to `main` (or re-run the workflow from the **Actions** tab). The
   first run creates the `github-pages` deployment; after that it redeploys
   automatically on every push.
6. GitHub gives you a URL like
   `https://<your-org-or-user>.github.io/iliadx-singapore.github.io/` —
   check the **Actions** tab for build logs if anything fails.

### Optional: custom domain

If you later want a custom domain instead of the `github.io` URL, add a
`CNAME` file to the repo root containing just your domain, then point your
domain's DNS `A`/`ALIAS` records at GitHub Pages' IPs (GitHub's docs:
Settings → Pages → Custom domain will show you the exact records to add).
No hosting cost either way.
