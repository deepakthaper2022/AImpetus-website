# Prompts to paste into Claude Code

Open the `Website` folder in VS Code, start Claude Code in the terminal from that folder, and paste one prompt at a time. Review the result and commit before moving on. Codex can be used with the review prompt at the end.

Order: **0 Set-up → 1 Holding page → 2 Beta 1 → 3 Beta 2 → 4 Beta 3 → Review (any time)**

---

## Prompt 0 – set-up and plan (no site code yet)

```
Read CLAUDE.md first, then read everything in brief/ in full (the PDFs, brand.md and holding-page.md) and look at assets/.

Then:
1. Initialise one git repository in this folder with a .gitignore (node_modules, dist, .astro, .DS_Store). Make a first commit of the brief and assets.
2. Create scripts/build-all.sh and netlify.toml as described in CLAUDE.md (holding page at the root, each beta that exists built into dist/betaN/, X-Robots-Tag noindex on /beta*, sensible security headers, www redirecting to the bare domain). Make the script skip beta folders that don't exist yet.
3. Create TODO.md sections for holding, beta1, beta2 and beta3, and list every placeholder and open question you found in the brief.

Don't build any pages yet. Reply with a short plan for the holding page and the three betas, and anything in the brief that's contradictory or unclear.
```

## Prompt 1 – holding page

```
Build the holding page in holding/ as plain HTML and CSS, using brief/holding-page.md word for word and the brand rules in brief/brand.md. Self-host the fonts, add the favicon set, Open Graph tags, canonical URL, robots.txt and a simple 404.html. No JavaScript, no forms, no third-party requests. It must look finished and credible on a phone and a large screen.

Run scripts/build-all.sh, serve dist/ locally, run an accessibility check and Lighthouse (mobile), and fix anything under 95. Then tell me how to preview it, and commit.
```

## Prompt 2 – Beta 1 (Editorial)

```
Build beta1/ as a complete Astro site with base '/beta1/', following CLAUDE.md, using design direction "Beta 1 – Editorial".
Extra direction from me: [optional – add notes, or delete this line]

Work in this order, building after each step:
1. Project set-up, fonts, tokens.css and global.css from brief/brand.md.
2. BaseLayout (head, SEO/OG from the content PDF, noindex, beta banner, skip link), Header with an accessible mobile menu, and Footer with the exact company details.
3. Home page, then stop and tell me how to preview it so I can check the look before you continue.
```

After you've approved the Home page:

```
Carry on with beta1: Services overview, the four service pages, How we work, About us, Insights, Contact (Netlify form named contact-beta1, honeypot, /beta1/contact/thanks/), Privacy notice, Cookie notice, Accessibility statement and 404. Use the copy from brief/website-content.pdf and brief/legal-pages.pdf exactly, with placeholders visibly marked.

Then run scripts/build-all.sh, serve dist/, check every link works under /beta1/, run the accessibility check on every page and Lighthouse on Home, one service page and Contact. Fix issues, write beta1/DESIGN.md, update TODO.md, summarise, and commit.
```

## Prompt 3 – Beta 2 (Structured)

```
Create beta2/ as a new design of the same site, with base '/beta2/', following CLAUDE.md and design direction "Beta 2 – Structured". Don't change beta1.
You may start by copying beta1 (without node_modules, dist and .astro) to reuse its content and page structure, but the layout, components and styling must follow the Beta 2 direction, so it looks clearly different from Beta 1.
Feedback on Beta 1 to apply here: [paste your comments, or delete this line]
Extra direction from me: [optional, or delete this line]

Build the Home page first and stop so I can review it. After my go-ahead, finish every page, use the form name contact-beta2, run the same checks as for beta1, write beta2/DESIGN.md, update TODO.md, summarise, and commit.
```

## Prompt 4 – Beta 3 (Engine room)

```
Create beta3/ as a new design of the same site, with base '/beta3/', following CLAUDE.md and design direction "Beta 3 – Engine room". Don't change beta1 or beta2.
You may copy beta2 or beta1 as a starting point for content and structure, but the layout and styling must follow the Beta 3 direction. Check contrast carefully on the dark sections (mint only on ink, amber never as text on light).
Feedback on Betas 1 and 2 to apply here: [paste your comments, or delete this line]
Extra direction from me: [optional, or delete this line]

Build the Home page first and stop so I can review it. After my go-ahead, finish every page, use the form name contact-beta3, run the same checks, write beta3/DESIGN.md, update TODO.md, summarise, and commit.
```

## Review prompt (Codex, or a fresh Claude Code session)

```
Review [holding/ | beta1/ | beta2/ | beta3/] against AGENTS.md and the brief/ folder. Don't change any files. Report, most serious first:
1. Copy that differs from the brief (holding-page.md, website-content.pdf, legal-pages.pdf).
2. WCAG 2.2 AA problems (headings, focus, labels, contrast, target size, reduced motion, zoom).
3. Brand rule breaks from brief/brand.md (colours, fonts, logo use, serifed "AI").
4. Beta rules: noindex, beta banner, base-path links, form name, no links between sites.
5. SEO and metadata gaps, broken links, any third-party requests.
6. Code quality issues worth fixing.
Give file and line references.
```

## Later – making one beta live
When you've chosen a beta, ask Claude Code to promote it: build it with base '/', replace the holding page at the root, remove noindex and the beta banner, add the sitemap and canonical URLs, and keep the old betas out of the deploy.
