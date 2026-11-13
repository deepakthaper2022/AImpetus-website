// Beta 3: crop the founder photos and render them as an ink → mint duotone,
// so they suit the schematic style. Originals in ../assets/photos/ are never changed.
// Output: src/assets/founders/<slug>.jpg (Astro then serves AVIF/WebP)
// Run: node scripts/prepare-founder-photos.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = (p) => fileURLToPath(new URL(p, import.meta.url));

const photos = [
  { slug: 'deepak-thaper', crop: { left: 88, top: 14, width: 350, height: 350 } },
  { slug: 'prahlad-koti', crop: { left: 50, top: 18, width: 390, height: 390 } },
];

// Duotone: shadows → ink #0E2A2F, highlights → a light mint #CFF7EF
const dark = [14, 42, 47];
const light = [207, 247, 239];

// Soft vignette (applied before the duotone) to quiet busy backgrounds
const vignette = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
    <defs><radialGradient id="v" cx="50%" cy="42%" r="64%">
      <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient></defs>
    <rect width="400" height="400" fill="url(#v)"/>
  </svg>`,
);

for (const { slug, crop } of photos) {
  const input = root(`../../assets/photos/${slug}.jpg`);
  const output = root(`../src/assets/founders/${slug}.jpg`);
  const grey = await sharp(input)
    .extract(crop)
    .resize(400, 400)
    .greyscale()
    .normalise()
    .linear(1.08, -6)
    .toBuffer();
  const { data, info } = await sharp(grey)
    .composite([{ input: vignette, blend: 'over' }])
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(info.width * info.height * 3);
  for (let i = 0; i < info.width * info.height; i++) {
    const t = data[i * info.channels] / 255;
    for (let c = 0; c < 3; c++) out[i * 3 + c] = Math.round(dark[c] + (light[c] - dark[c]) * t);
  }
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 3 } })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(output);
  console.log(`${slug}: ${output}`);
}
