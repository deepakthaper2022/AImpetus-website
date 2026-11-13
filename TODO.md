# TODO

Placeholders, open questions and checks, grouped by folder. `[Placeholder: …]` items stay visibly marked on the site until filled in.

## Decisions made (13 Nov 2026)
- **Design directions:** AGENTS.md is current and CLAUDE.md has been synced to match. All three betas are Engine room variants: 1 Editorial, 2 Structured, 3 Schematic.
- **Holding page logo:** reversed SVG on the ink background (the copy's "primary" is for light backgrounds; the builder notes say reversed).
- **Serifed "I" in headings:** applied to every "AI" and "AImpetus" in Space Grotesk headings (the content PDF's wider rule). Done with Inter's built-in serifed capital I (character variant `cv08`), so no extra typeface. Use the full Inter woff2 from the Inter release, not a Google Fonts subset, which drops `cv08`.
- **sitemap.xml:** not needed yet (founders, 13 Nov 2026). Holding page has robots.txt (allow all) only. Add a sitemap at launch.
- **Web manifest:** `site.webmanifest` created per folder from the 192/512 PNGs (name "AImpetus", ink theme colour). It isn't in assets/.
- **Open Graph image:** use the LinkedIn banner as briefed, even though platforms may crop its 4:1 shape (see open question below).
- **Contact "I'm a…" dropdown:** optional, as briefed, with no option pre-selected.
- **Cookie table:** both rows kept exactly as drafted, with placeholders highlighted. Revisit when the booking tool is chosen.
- **Privacy notice marketing lines** ("occasional updates", marketing preferences): kept as written.
- **Not added:** the "Cookie settings" footer link (only needed if analytics and a banner are added).
- **Built as written:** header CTA "Book a conversation" (vs "Book a 30-minute conversation" elsewhere) and footer label "Cookies" (page title "Cookie notice").
- **Insights:** H1, intro and LinkedIn link from the PDF, plus a "coming soon" line. The PDF's planned article list is guidance, so it isn't shown.
- **Founder cards:** text only until real photos are supplied.
- **Deepak's LinkedIn URL:** `https://www.linkedin.com/in/deepak-thaper-80246113/` (wraps in the PDF; matches holding-page.md).

## Copy drafted by the builder – founders to approve
Not in the brief. Used on the site and marked in code with `<!-- TODO: copy to approve -->`.
- [ ] **404 page (holding and betas).** H1 "Page not found". "Sorry, we can't find that page. It may have moved." [Link: Go to the home page]. SEO title "Page not found | AImpetus".
- [ ] **Contact thanks page (betas).** H1 "Thanks for getting in touch". Body "One of the founders will reply within two working days." (both sentences from the brief's confirmation message). SEO title "Thanks | AImpetus".
- [ ] **Insights coming soon (betas).** "Our first articles are coming soon. Follow us on LinkedIn to see them first."
- [ ] **Contact form error messages (betas).** "Enter your name" · "Enter your work email address" · "Enter an email address in the correct format, like name@example.org" · "Enter your organisation" · "Tell us how we can help". Plus an error summary headed "There is a problem".

## Open questions
- [ ] **Open Graph image.** The LinkedIn banner is 1584×396 (4:1). Most platforms show 1.91:1 (1200×630) and will crop it. A 1200×630 version would display better.
- [ ] **Git author identity.** The first commit used the global git identity (deepak-chistats / work email). Change it for this repo (`git config user.email …`) if it should be personal or an AImpetus address.
- [ ] **HSTS.** netlify.toml sends `Strict-Transport-Security: max-age=31536000` without `includeSubDomains`/`preload`. Add these once every subdomain is confirmed HTTPS-only.

## Images requested (owner: founders)
The betas currently use SVG artwork, monogram badges and illustrations, so nothing is waiting on images. Photos would make the site more personal and credible:
- [ ] **Founder portraits – real photos (most important).** One each for Prahlad and Deepak, taken in the same setting. Head and shoulders, looking at the camera or slightly off, natural light, plain or softly blurred neutral background (grey, white or a dark wall), smart-casual. At least 1200 × 1500 px (4:5 portrait), JPG, plus some room around the head for cropping. Used on Home (replacing the PK/DT badges) and About.
- [ ] **Optional wide photo (AI-generated is OK).** For a full-width band on Home and the About header. At least 2400 × 1350 px (16:9), landscape. Requirements: no logos or NHS branding, no readable text or fake dashboards, no robots, glowing brains, server rooms or circuit boards (brief/brand.md), realistic people, not posed stock. Example prompt: "Documentary-style photo of a small, diverse team of senior professionals working together at a large table in a bright, modern UK public-sector office, laptops and printed plans, natural window light, calm and focused, shallow depth of field, cool teal and slate colour grade with a warm amber accent, no logos, no readable text, 16:9."
- [ ] Every photo: confirm you have the rights (self-taken, or AI-generated under the tool's commercial terms), and write alt text, or mark it decorative.

## Before go-live (owner: founders)
- [ ] Company LinkedIn page URL (footer, Insights, Contact)
- [ ] Booking link, for example Microsoft Bookings or Calendly (Contact – "Choose a time")
- [ ] Check contact@aimpetus.ai mailbox is live and receives Netlify form notifications
- [ ] Confirm reply-time promise on Contact ("within two working days")
- [ ] Pronunciation of AImpetus (awaiting Prahlad), only if used on the site
- [ ] UK trade mark search on "AI in the engine room"
- [ ] Both founders read every page once
- [ ] Don't mention Cyber Essentials, frameworks or partners until each is confirmed
- [ ] Contact form and booking link tested end to end (confirmation message and email arriving)
- [ ] Lighthouse ≥ 95 and accessibility check clean on every page
- [ ] Every page checked on a phone, a tablet and a desktop browser
- [ ] Deploy to Netlify, connect aimpetus.ai and www.aimpetus.ai, confirm the www → bare redirect and HTTPS

## holding/
- [x] Built (Prompt 1): index.html, styles.css, 404.html, robots.txt, site.webmanifest, self-hosted fonts, favicon set, OG/Twitter tags, canonical
- Founders section (names, roles, LinkedIn links) removed at the founders' request (13 Nov 2026). brief updated.
- Hero line changed at the founders' request (13 Nov 2026): "deep roots in the NHS and public sector" → "deep roots in the NHS and wider UK public sector". Brief updated.
- [ ] The 404 copy is a draft (see "Copy drafted by the builder")
- [ ] Optional: the large chevron graphic only shows from 960 px wide. On phones the page is text-only. Say if you want a small version on mobile.
- [ ] Both founders approve the holding page copy and look
- [ ] Deploy the holding page first

## beta1/, beta2/, beta3/ (shared content – applies to every beta)

### Copy changes not yet in the content PDF
- [ ] `brief/copy-changes.md` records the agreed changes (the "NHS and wider UK public sector" wording in the Home hero, Home meta and default meta, plus the drafted copy). Put them into the Website Content doc, export a new PDF, then delete copy-changes.md.
- [ ] The default meta description is 195 characters, over the PDF's 155 guide. Shorten it in the doc if you want.

### Placeholders from the content PDF
- [ ] `[Placeholder: company LinkedIn page]`: footer "Follow us on LinkedIn", Insights "Follow AImpetus on LinkedIn", Contact "Other ways to reach us"
- [ ] `[Placeholder: booking link]`: Contact "Choose a time" button

### Placeholders from the legal pages PDF
- [ ] Privacy, Cookie and Accessibility pages: `[Placeholder: publication date]` (×3)
- [ ] Privacy: `[Placeholder: ICO registration number]`. Pay the ICO data protection fee first (tier 1, £52 a year, or £47 by direct debit)
- [ ] Privacy: `[Placeholder: booking tool, for example Microsoft Bookings or Calendly]` and `[Placeholder: booking tool]`
- [ ] Privacy: `[Placeholder: hosting provider]` (expected: Netlify)
- [ ] Privacy: `[Placeholder: for example Microsoft 365 or Google Workspace]`
- [ ] Cookies table: `[Placeholder: name]`, `[Placeholder: hosting provider]`, `[Placeholder: booking tool]`, `[Placeholder: duration]` (×2 rows)
- [ ] Accessibility: `[Placeholder: test date]`, `[Placeholder: method…]`, `[Placeholder: either "We are not aware…" or known issues]`

### Build notes
- [ ] CSP: netlify.toml blocks inline scripts. Each beta must emit the mobile-menu script as a file (check after each build). The booking tool, once chosen, may need a CSP exception if embedded.

### beta1/ – Engine room: Editorial
- [x] All 15 pages built and checked (see beta1/DESIGN.md)
- [ ] Founders review every page
- [ ] Deploy to Netlify, then submit the contact form once to confirm Netlify detects `contact-beta1` and the notification email arrives
- Note: Lighthouse SEO is 66 on beta pages only because of the required `noindex`. It can't reach 95 while betas are hidden from search; every other SEO check passes.

### beta2/ – Engine room: Structured
- [ ] Build, then founders review

### beta3/ – Engine room: Schematic
- [ ] Build, then founders review

## Launch (after a beta is chosen)
- [ ] Review beta1, beta2, beta3 and choose one (or a blend)
- [ ] Promote it to the root: base '/', remove noindex and banner, add sitemap.xml and canonical URLs, drop betas from the deploy
