# Beta 2 – Engine room: Structured

Served at `/beta2/`. Started as a copy of beta1 (same content, data files, accessibility patterns, fonts, form logic), restyled to the Structured direction. Status: all 15 pages built and checked.

## Direction
Grid- and card-led, highly scannable. A dark hero and dark bands alternate with paper sections. Feedback from beta1 applied: richer visuals than a plain document, no headings floating on their own, no flat white blocks, an obvious way back on deep pages, founder photos.

How it differs from beta1 (Editorial):
- **Light header** (white, primary logo, teal button) above a dark hero, where beta1 is dark throughout.
- **Square-ish corners** (`--radius-card: 0.375rem`) where beta1 uses rounded 1rem cards. Visible grid lines and shared-border "bento" grids.
- **Numbered section index** (`IndexHead.astro`: a 01–05 tab plus a rule above each H2), where beta1 uses chevron markers.
- **Hero artwork:** overlapping interface panels (`HeroPanels.astro`) showing the four services, a benefit chart and the Understand → Prove → Scale checklist, where beta1 uses the gauge.
- **Key facts strip** under the hero (60 / 10+ / 4).
- **Services as problem → outcome cards**, with a coloured top bar per service.
- **How we work as numbered step boxes** with tab numbers and amber chevrons between them.
- **Founders as profile cards**, with the photo on an ink panel.
- **Closing CTA as a boxed ink panel** with grid lines and a mint edge, inside a paper section.

### Interior pages (after the Home review: "not too different from beta1")
- **Page header** (`PageHeader.astro`): a compact dark band with a breadcrumb, the H1 and intro, and an **"On this page"** card of numbered jump links that match the numbered sections below. A mint bottom edge. No illustrations, unlike beta1.
- **Light-first bodies:** paper and white bands, with ink used for one band per page (step boxes, outcomes, founders).
- **Service pages:** a service tag in the header, "Sound familiar?" as a ruled 2×2 problem grid with amber markers, "What we do" as a **definition table**, "What you get" as top-barred outcome tiles with ticks on ink, the evidence as a callout card, then "Other services" and the CTA panel.
- **Services overview:** a decorative layered stack (data → digital → AI, inside a dashed "Delivery assurance" frame), then the problem → outcome cards with "Explore …" links.
- **How we work:** step boxes on ink, "What you can expect" as a ruled checklist with icon chips, "Ways to work with us" as **comparison columns** (A/B/C, "Best for" / "How it works").
- **About:** the story with a name callout, "Why now" as a ruled 3-column grid, founders as large profile cards on ink, beliefs as a ruled 4-column grid.
- **Contact:** numbered booking card (01) and form card (02) on the left, with "Other ways to reach us" sticky on the right.
- **Legal pages:** the "On this page" list is generated from the section headings, and the text sits on a white document panel with ruled sections.
- **Light footer** (white, primary logo, ruled link grid, company details strip), where beta1's footer is dark.
- Tables stack up to 60em in beta2, because the document panel is narrower.

## Checks run (13 Nov 2026)
- Build passes. No broken links, and nothing outside `/beta2/`. All copy matches the brief, `brief/copy-changes.md` and UI strings.
- axe: 0 violations on all 15 pages. No horizontal scroll at 320, 768 and 1280 px.
- Keyboard: the menu works with Enter and Escape and returns focus. The form's error summary, inline errors and valid submission work (`contact-beta2`).
- Lighthouse (mobile) on Home, Services, Data and platforms, How we work, About, Contact and Privacy: Performance, Accessibility and Best Practices 100, CLS 0. SEO is 66 only because of the required `noindex`.
- CSP: no violations.

Contrast pairs are as in beta1 (see beta1/DESIGN.md), plus: teal-dark `#0B5C56` on `#E3EFEC` (current nav item) 6.7:1; slate on `#F1F7F5` 6.7:1; muted on the featured bento cell `#11353A` 7.6:1.
