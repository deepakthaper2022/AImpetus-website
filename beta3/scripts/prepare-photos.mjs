// Beta 3: convert the AI-generated photos (../assets/photos/generated/*.png,
// never changed) to optimised JPEGs in src/assets/photos/. Astro then serves
// responsive AVIF/WebP. Run: node scripts/prepare-photos.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = (p) => fileURLToPath(new URL(p, import.meta.url));

const photos = [
  // Hero: trim some of the empty wall on the left so the people sit centre-right
  { src: 'hero-team-b', out: 'hero', crop: { left: 220, top: 0, width: 1452, height: 941 } },
  { src: 'workshop', out: 'workshop' },
  { src: 'conversation', out: 'conversation' },
];

for (const { src, out, crop } of photos) {
  let img = sharp(root(`../../assets/photos/generated/${src}.png`));
  if (crop) img = img.extract(crop);
  await img
    .modulate({ saturation: 0.95 })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(root(`../src/assets/photos/${out}.jpg`));
  console.log(out);
}
