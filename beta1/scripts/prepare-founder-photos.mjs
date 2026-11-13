// Crop and colour-grade the founder photos so they read as a matching pair.
// Source: ../assets/photos/<slug>.jpg (originals, never changed)
// Output: src/assets/founders/<slug>.jpg (Astro then serves AVIF/WebP)
// Run: node scripts/prepare-founder-photos.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = (p) => fileURLToPath(new URL(p, import.meta.url));

// Square head-and-shoulders crops, in source pixels
const photos = [
  { slug: 'deepak-thaper', crop: { left: 88, top: 14, width: 350, height: 350 } },
  { slug: 'prahlad-koti', crop: { left: 50, top: 18, width: 390, height: 390 } },
];

// Subtle brand grade: less saturation, a soft ink/teal tone and an ink vignette
// that quiets busy backgrounds so the two photos read as a set
const tint = await sharp({
  create: { width: 8, height: 8, channels: 4, background: { r: 14, g: 82, b: 86, alpha: 0.38 } },
}).png().toBuffer();
const vignette = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
    <defs><radialGradient id="v" cx="50%" cy="42%" r="62%">
      <stop offset="0.45" stop-color="#0E2A2F" stop-opacity="0"/>
      <stop offset="1" stop-color="#0E2A2F" stop-opacity="0.62"/>
    </radialGradient></defs>
    <rect width="400" height="400" fill="url(#v)"/>
  </svg>`,
);

for (const { slug, crop } of photos) {
  const input = root(`../../assets/photos/${slug}.jpg`);
  const output = root(`../src/assets/founders/${slug}.jpg`);
  const cropped = await sharp(input).extract(crop).resize(400, 400).toBuffer();
  await sharp(cropped)
    .modulate({ saturation: 0.72, brightness: 1.02 })
    .composite([
      { input: tint, tile: true, blend: 'soft-light' },
      { input: vignette, blend: 'over' },
    ])
    .linear(1.04, -4)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(output);
  console.log(`${slug}: ${output}`);
}
