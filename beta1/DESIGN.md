# Beta 1 – Engine room: Editorial

Served at `/beta1/`. Astro (static), plain CSS, no client framework. JavaScript only for the mobile menu and contact form validation (both progressive enhancement).

## Direction
Engine room, dark-first (ink `#0E2A2F`) with mint accents and paper sections for reading. Typography-led: large Space Grotesk headlines, generous space, the chevron as the signature mark. After the first review ("too flat, like a document") the Home page gained more visual character, and every page now follows that:

- **Hero artwork** (`HeroArt.astro`): an "engine room" gauge (rings, tick marks, highlighted arc) around the amber and mint chevrons with motion trails, on a faint engineering grid with a mint glow. The outer ring turns very slowly; off under `prefers-reduced-motion`.
- **Interior heroes** (`PageHero.astro` + `PageArt.astro`): each page has its own illustration in the same language (faint gauge ring, glow, mint line work, amber accent). The illustrations were added after the second review ("same image on every page"):
  - Services: the four service icons orbiting the mark.
  - Data and platforms: stacked platform layers with data flowing in.
  - AI to benefit: dashed pilot bars becoming solid, with a rising benefit line and a check.
  - Digital transformation: a rigid legacy grid becoming a connected flow.
  - Delivery assurance: a dial reading in the confident zone, above a milestone track.
  - How we work: a 1 → 2 → 3 path ending in scale or stop.
  - Contact: a calendar with a chosen slot, plus conversation bubbles.
  - Insights: a stack of articles with a bookmark.
  - About: "60" (years of combined experience) inside an amber-and-mint ring, with the chevrons.
  - Thanks and 404: the chevrons. Legal pages have no art.
- **Rhythm:** ink hero → ink section → paper section, alternating. Paper is used for reading-heavy content (cards, service detail, legal pages).
- **Feature sections** (`FeatureSection.astro`, after the second review's "headings hanging, flat white blocks"): the heading sits in a left column that stays in view while you scroll, with the item count as a large outlined numeral. The cards on the right have an ink icon chip with line icons (`FeatureIcon.astro`) and numbering, and the first card is a dark featured card. The paper behind has a dot-grid texture and a faint chevron watermark. Used for Why AImpetus, What you can expect, What we do, Why now and What we believe.
- **Components:** dark gradient tiles with line icons on ink; a numbered step track with amber chevrons; a patterned teal call-to-action band; founder portraits (`FounderPortrait.astro`): photos from `src/assets/founders/<slug>.jpg`, served as AVIF/WebP, with the monogram badge as fallback. `scripts/prepare-founder-photos.mjs` crops the originals in `assets/photos/` and gives them a shared subtle grade (less saturation, ink/teal soft-light tone, ink vignette), so two photos taken in different places read as a pair.
- **Chevron uses:** section markers above every H2, list bullets, arrow links, step-track joints, the CTA pattern, the hero artwork.

## Key decisions
- **Serifed "I":** every "AI" and "AImpetus" in Space Grotesk text goes through `brandify()` (`src/lib/brand.ts`), which wraps the I in `.brand-i`. That uses a 1 KB font containing only Inter Bold's serifed capital I (Inter `cv08`), made the default glyph.
- **Fonts:** subset, self-hosted woff2 (Space Grotesk 700, Inter 400 and 600, the serifed I). All four are preloaded, which keeps layout shift at 0.
- **Base path:** every internal URL goes through `url()` in `src/lib/paths.ts`. A link check confirms no link leaves `/beta1/`.
- **CSP-safe:** `assetsInlineLimit: 0` and `inlineStylesheets: 'never'`, so scripts, CSS and fonts are always same-origin files (the site CSP blocks inline scripts).
- **Whitespace:** `compressHTML: true`, because the Astro 7 default (`'jsx'`) can drop spaces in running copy.
- **Mobile menu:** collapsed from first paint using `@media (scripting: enabled)` (no layout shift), with a `.has-js` fallback. Without JavaScript the full nav is shown. Escape closes the menu and returns focus to the button.
- **Contact form:** Netlify Forms `contact-beta1`, honeypot `bot-field` in a `hidden` paragraph, posts to `/beta1/contact/thanks/`. With JavaScript, the form shows a GOV.UK-style error summary (focused, with links to the fields), inline errors linked by `aria-describedby`, and an "Error:" prefix on the page title. Errors clear as you type, not on blur, so the layout doesn't shift under the pointer. Without JavaScript, the browser's own validation applies.
- **Tables** (`DataTable.astro`) stack on small screens, with explicit ARIA table roles so screen readers keep the table semantics.
- **Placeholders** render as highlighted `[Placeholder: …]` marks. The company LinkedIn and booking link are set in `src/lib/site.ts` (`COMPANY_LINKEDIN`, `BOOKING_LINK`). Set either one and the real link appears everywhere.
- **Service content** lives in `src/data/services.ts`; one template (`services/[slug].astro`) renders all four pages.

## Contrast (WCAG 2.2 AA)
| Text | Background | Ratio |
|---|---|---|
| Paper `#F7F7F4` | Ink | 14.1:1 |
| Mint `#5EEAD4` | Ink | 10.2:1 |
| Muted `#B9C8CA` | Ink / tile `#15393F` | 8.8:1 / 7.2:1 |
| White | CTA band darkest `#105450` | 8.7:1 |
| Mint | CTA band darkest | 5.9:1 |
| Ink | Mint button | 10.2:1 |
| Ink | Paper | 14.1:1 |
| Teal `#0F766E` | Paper / white | 5.1:1 / 5.5:1 |
| White | Teal button | 5.5:1 |
| Slate `#4A5A5D` (also input borders) | White | 7.2:1 |
| Error `#B42318` | White | 6.6:1 |
| Ink | Placeholder `#FFE7B3` | 12.5:1 |

Amber is used only for graphics, the beta banner background (ink text 7.0:1) and placeholder borders, never as text on light backgrounds.

## Checks run (13 Nov 2026)
- `scripts/build-all.sh` passes. All 15 pages are in `dist/beta1/`.
- Link check: no broken internal links or assets, and nothing outside `/beta1/`.
- Copy check: all visible text matches the brief (plus `brief/copy-changes.md` and UI strings).
- axe (WCAG 2.2 AA + best practice): 0 violations on all 15 pages. One H1 per page, headings in order.
- No horizontal scroll at 320, 768 and 1280 px on any page.
- Keyboard: the skip link works, the tab order is logical, focus is always visible, and the menu opens and closes with Enter and Escape.
- Form: error summary, inline errors and a valid submission tested in a browser.
- Lighthouse (mobile) on Home, AI to benefit, Contact, How we work and About: Performance 99–100, Accessibility 100, Best Practices 100. SEO is 66 only because of the required `noindex`.
- CSP from netlify.toml: no violations.
