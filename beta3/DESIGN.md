# Beta 3 – Engine room: Schematic

Served at `/beta3/`. Started as a copy of beta1 (content, data, accessibility patterns, form logic), with a completely new visual layer. Status: Home page built and awaiting review; the other pages still use beta1's layouts.

## Direction
The engine room drawn as a working schematic. It is the darkest and most technical of the three, with restrained motion. It was planned around the lessons from the beta1 and beta2 reviews: strong visuals on every page, the brand device used boldly but sparingly, big type, and a look clearly distinct from the other two.

| | Beta 1 Editorial | Beta 2 Structured | Beta 3 Schematic |
|---|---|---|---|
| Graphics | Filled illustrations | One split-band stroke | Line-drawn schematics |
| Containers | Rounded cards | Ruled grids | Outlined "spec sheet" frames with corner ticks |
| Motion | Almost none | None | Flowing lines (off under reduced motion) |

## Key elements
- **`SystemDiagram.astro`:** the signature. The system itself draws the logo's chevron. The upper arm is Data and platforms (feeds → platform layers), the lower arm is Digital transformation (process steps, old → new), the tip is AI to benefit (with the mark), the output is "Better services", and a dashed amber boundary is Delivery assurance ("keeps all of it on track"). A `highlight` prop lights one part and dims the rest, used for the Home service modules and planned for the service pages. Labels hide on small screens. Decorative, because the text always says the same.
- **Blueprint grid** (`.blueprint`), a deeper ink band (`.band-deep`), and **angled section cuts** (`.cut`) so the page moves forward without repeating the logo.
- **Spec frames** (`.spec`) with mint corner ticks; **annotation labels** (`.annot`) with section numbers.
- **Home sections:**
  - the hero schematic;
  - the problem as a "broken connection" line;
  - the five reasons as spec frames wired to a circuit bus;
  - the services as diagram modules, each with its own part lit;
  - How we work as a route map that forks into scale (arrow) or stop (cross);
  - the founders as spec frames with duotone photos;
  - the CTA with a wire running into the button.
- **Header:** dark with a mint baseline and numbered nav (01–05). On phones the menu is a full-screen overlay with focus kept inside it, Escape to close, focus returned to the button and page scrolling locked. Without JavaScript the nav shows normally.
- **Founder photos:** `scripts/prepare-founder-photos.mjs` renders an ink → mint duotone with a vignette, from the untouched originals in `assets/photos/`.
- **Motion:** stroke-dash flow on the pipelines, the feeds and the hero ring; small diagrams stay still. All motion stops under `prefers-reduced-motion`.

Contrast as beta1 (mint and white on ink, ink on mint). Diagram labels are muted `#B9C8CA` or mint on ink.
