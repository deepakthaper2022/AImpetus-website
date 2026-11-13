# Beta 2 – Engine room: Structured

Served at `/beta2/`. Started as a copy of beta1 (same content, data files, accessibility patterns, fonts, form logic), restyled to the Structured direction. Status: Home page built and awaiting review; the other pages still use beta1's layouts and will be restyled after review.

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

Contrast pairs are as in beta1 (see beta1/DESIGN.md), plus: teal-dark `#0B5C56` on `#E3EFEC` (current nav item) 6.4:1; slate on `#F1F7F5` 6.5:1.
