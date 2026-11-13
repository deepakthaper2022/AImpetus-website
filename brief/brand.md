# AImpetus brand rules (for the build)

## Name and tagline
- Company: **AImpetus Ltd**. Brand name in copy: **AImpetus** (capital A, capital I).
- Descriptor: Data, digital and AI services.
- Tagline: **AI in the engine room.**
- Never write "Aimpetus" or "AIMPETUS" in body copy.

## The "AI" legibility rule
In Space Grotesk the capital I looks like a lower-case l, so "AImpetus" can read as "Almpetus".
- The logo files already contain a custom serifed I. Always use the SVG logos; never retype the logo as text.
- Where "AImpetus" appears in a heading set in Space Grotesk, wrap the I so it renders with serifs or in Inter, e.g.
  `A<span class="brand-i">I</span>mpetus`, where `.brand-i` uses a font or glyph with a serifed I. Check it visually.
- Body copy is Inter, where the I reads correctly.

## Colours
| Token | Hex | Use |
|---|---|---|
| ink | #0E2A2F | Primary text, dark backgrounds, logo square |
| teal | #0F766E | Links, buttons, accents on light backgrounds |
| mint | #5EEAD4 | Accents on dark backgrounds only (fails contrast on light) |
| amber | #F59E0B | Graphics and the mark only, never text on light backgrounds |
| paper | #F7F7F4 | Page background |
| slate | #4A5A5D | Secondary text |
| white | #FFFFFF | Cards, reversed text |

Check every text/background pair against WCAG 2.2 AA (4.5:1 body, 3:1 large text and UI parts).

## Type
- Headings: **Space Grotesk** Bold (Google Fonts, self-host the woff2).
- Body and UI: **Inter** Regular/Medium/SemiBold (self-host).
- Use `font-display: swap`. No other typefaces.

## The mark
Two chevrons in an ink rounded square, pointing right (forward momentum).
SVG source (48 viewBox):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <rect width="48" height="48" rx="12" fill="#0E2A2F"/>
  <polygon points="9,12 18,12 28,24 18,36 9,36 19,24" fill="#F59E0B"/>
  <polygon points="22,12 30,12 40,24 30,36 22,36 32,24" fill="#5EEAD4"/>
</svg>
```
The chevrons may be used as a quiet graphic motif (section dividers, list bullets). Keep it restrained.

## Logo files (in ../assets/logo)
- `primary` – on light backgrounds (default header)
- `reversed` – on ink/dark backgrounds (footer)
- `mono-ink`, `mono-white` – single-colour uses
Keep clear space of at least the height of the mark's chevron around the logo. Minimum width 120 px.

## Visual direction
- **Chosen website direction: Engine room** – dark-first (ink) with mint accents, paper for long reading, chevron as the signature graphic. Calm, confident, plenty of space. See CLAUDE.md for contrast rules on dark.
- No stock photos of handshakes, glowing brains, robots or circuit boards. Prefer typography, simple diagrams and the chevron motif.
- Subtle motion only, and none when `prefers-reduced-motion` is set.

## Voice
Clear, confident British English. Plain words, outcomes before technology. Avoid "cutting-edge", "revolutionary", "unlock potential", "leverage", "synergy". Don't edit the supplied copy without flagging it.
