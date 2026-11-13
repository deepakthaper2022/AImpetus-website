# AImpetus website – instructions for coding agents

This file is read automatically by Claude Code (CLAUDE.md) and Codex (AGENTS.md). Both files are identical; if you change one, change the other.

## What we're building
Websites for **AImpetus Ltd** (aimpetus.ai), a new UK company offering data, digital and AI services, mainly to the UK public sector and NHS. Tagline: "AI in the engine room."

Four separate things, built **one at a time, in this order**, each in its own folder:

| Folder | Served at | What it is |
|---|---|---|
| `holding/` | `/` (aimpetus.ai root) | One-page holding page. Public and indexable. |
| `beta1/` | `/beta1/` | Full site, design direction 1. Private preview. |
| `beta2/` | `/beta2/` | Full site, design direction 2. Private preview. |
| `beta3/` | `/beta3/` | Full site, design direction 3. Private preview. |

Only build the folder you've been asked to build. Never change a finished folder unless asked. The three betas use the same pages and copy; they differ in layout and visual design (see "Beta design directions"). Later, one beta (or a blend) becomes the live site at the root, replacing the holding page.

## Source of truth (read before coding)
| File | What it is |
|---|---|
| `brief/holding-page.md` | Exact copy and notes for the holding page. |
| `brief/website-content.pdf` | **Authoritative** copy for every beta page, plus the developer brief (scope, must-haves, before-launch checklist). Read the PDF; the `.txt` is a plain-text extract for searching and may lose table layout. |
| `brief/legal-pages.pdf` | Privacy notice, cookie notice and accessibility statement copy (`.txt` extract alongside). |
| `brief/brand.md` | Colours, fonts, logo usage, the serifed-"AI" rule, visual direction, voice. |
| `assets/` | Final logos, icons, favicon and social images. Use these files; don't redraw them. |

**Use the copy exactly as written.** Don't rewrite, shorten, add marketing claims or invent content. If copy is missing or unclear, leave a visible `TODO:` and list it in your summary.

`[Placeholder: …]` items stay as clearly marked placeholders (e.g. a highlighted span) and are listed in `TODO.md`. Never invent client names, logos, testimonials, case studies, accreditations, partners, framework memberships or figures.

## Stack
- **Holding page:** plain HTML and CSS in `holding/` (`index.html`, `styles.css`, plus fonts and icons it needs). No build step, no JavaScript.
- **Betas:** each beta is its own **Astro** project (static output) with `base: '/betaN/'` and `site: 'https://aimpetus.ai'`, plain CSS with custom properties. No Tailwind, no UI framework, no client-side JS framework. JavaScript only for progressive enhancement (mobile menu). Every internal link and asset path must respect the base path.
- Self-hosted fonts (Space Grotesk, Inter) as woff2. No third-party requests at page load (no font CDN, no trackers), so no cookie banner is needed.
- Hosting: **Netlify**, one site. A root `netlify.toml` runs `scripts/build-all.sh`, which copies `holding/` to `dist/` and builds each beta that exists into `dist/betaN/`. A beta folder that doesn't exist yet is skipped.
- Node LTS, npm. Keep dependencies minimal. One git repository at the `Website/` level.

## Folder layout
```
Website/
  CLAUDE.md, AGENTS.md, PROMPT.md, README.md, TODO.md
  brief/  assets/                 shared inputs – read only
  holding/                        index.html, styles.css, fonts/, icons, robots.txt, 404.html
  beta1/ beta2/ beta3/            each a self-contained Astro project:
    astro.config.mjs              base: '/betaN/'
    src/layouts/BaseLayout.astro  head, SEO/OG, beta banner, skip link, header, footer
    src/components/               Header, Footer, Button, ServiceCard, FounderCard, CTA, …
    src/pages/                    one .astro file per page
    src/styles/                   tokens.css, global.css
    public/                       fonts, icons, og image (copied from ../assets)
    DESIGN.md                     the design direction and key decisions for this beta
  scripts/build-all.sh
  netlify.toml
```
Copy what each project needs from `assets/` into it; never edit `assets/` or `brief/`.

## Beta pages and URLs (relative to each beta's base)
`/` Home · `/services/` · `/services/data-and-platforms/` · `/services/ai-to-benefit/` · `/services/digital-transformation/` · `/services/delivery-assurance/` · `/how-we-work/` · `/about/` · `/insights/` (can show an "articles coming soon" state) · `/contact/` and `/contact/thanks/` · `/privacy/` · `/cookies/` · `/accessibility/` · 404.
If the content PDF differs, the PDF wins.

## Beta design directions
All three follow `brief/brand.md` (same colours, fonts, logo, voice) and the same accessibility bar. They should look clearly different from each other so the founders can compare.
- **Beta 1 – Editorial:** typography-led, light paper background, generous white space, strong type hierarchy, minimal boxes; the chevron used as small section markers. Calm and authoritative.
- **Beta 2 – Structured:** grid- and card-based, light sections alternating with ink bands, services as problem → outcome cards, highly scannable; clear, civic and practical.
- **Beta 3 – Engine room:** dark-first (ink) hero and key sections with mint accents, bolder use of the chevron as a graphic device, more visual contrast and restrained motion (off under reduced motion).
The prompt for each beta may change or add to its direction, or include feedback on the previous beta. The prompt wins. Record the direction and decisions in that beta's `DESIGN.md`.

## Non-negotiables (all four)
- **WCAG 2.2 AA**: semantic HTML, one H1 per page, logical headings, landmarks, skip link (betas), visible focus, keyboard-only use, labelled fields with clear inline errors, AA contrast, 24×24 px minimum targets, works at 320 px width and 400% zoom, respects `prefers-reduced-motion`.
- Responsive from 320 px to wide desktop; no horizontal scroll.
- Favicon set (favicon.ico, apple-touch-icon-180.png, 192/512 PNGs, manifest) and Open Graph/Twitter tags using `assets/social/linkedin-banner-1584x396.png`.
- Footer company details exactly as in the brief (company number 17574177, registered office).
- Brand: follow `brief/brand.md`, especially the serifed "I" in "AImpetus" in headings, and always use the SVG logos.
- British English throughout, including alt text and error messages.
- Lighthouse (mobile) ≥ 95 for Performance, Accessibility, Best Practices and SEO.

## Beta-only rules
- Betas must **not be indexed**: `<meta name="robots" content="noindex, nofollow">` on every page, and `netlify.toml` sends `X-Robots-Tag: noindex` for `/beta1/*`, `/beta2/*` and `/beta3/*`. Don't list betas in the root `robots.txt` or sitemap. No canonical tags pointing to the root yet.
- A slim, accessible banner at the top of every beta page: "Beta N preview – not the live AImpetus website."
- The holding page never links to a beta, and betas don't link to each other.
- Contact form: Netlify Forms with a unique form name per beta (`contact-beta1`, etc.), `netlify-honeypot` field hidden correctly from everyone, no CAPTCHA, success page at the beta's `/contact/thanks/`. Shows the privacy notice link. Notification email is set in Netlify, not in code.
- No sitemap for betas. The sitemap is added when the chosen design goes live at the root.

## Holding-page rules
- Indexable, with title and meta description from `brief/holding-page.md`, canonical `https://aimpetus.ai/`, and a root `robots.txt` allowing all.
- No form, no cookies, no JavaScript. Must look finished and credible, not "under construction".
- Under 100 KB total excluding fonts.

## Working rules
- Work in small steps. After each step, build (or open the holding page) and fix errors before moving on.
- Don't add pages, sections, features or libraries that aren't in the brief without asking.
- Don't commit secrets. There should be none.
- Keep `TODO.md` up to date with placeholders and open questions, grouped by folder.
- When finished, summarise what changed, how you checked it, and what's left.

## Checks before calling a folder done
1. `scripts/build-all.sh` passes and `dist/` has the holding page at the root and each finished beta under `/betaN/`.
2. Preview `dist/` locally (e.g. `npx serve dist`) and check every link and asset works under the base path.
3. Copy matches the brief word for word (spot-check headings, CTAs and footer).
4. Keyboard walk-through: tab order, focus visible, menu opens and closes with keyboard and Escape.
5. Automated accessibility check (`npx pa11y-ci` or `@axe-core/cli`) on every page; fix issues.
6. Check at 320 px, 768 px and 1280 px.
