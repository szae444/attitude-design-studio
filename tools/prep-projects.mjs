// One-off: resize the client's "Website Projects" photos into src/assets/projects/<slug>/NN.jpg
// Usage: node tools/prep-projects.mjs "<path to Website Projects/Photos>"
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const src = process.argv[2];
const map = {
  'Arvo': 'arvo', 'Atlas': 'atlas', 'DW Lotion': 'dw-lotion', 'Elorde Knockout': 'elorde-knockout',
  'Euros Chocolate': 'euros-chocolate', 'Happy Hour': 'happy-hour', 'Hotbox PH': 'hotbox-ph',
  'Jill & Pops': 'jill-and-pops', 'K-Street': 'k-street', 'Manila Athletic Club': 'manila-athletic-club',
  'Ochocento Cafe': 'ochocento-cafe', 'Piyo Grill & Restaurant': 'piyo', 'Ramada Encore': 'ramada-encore',
  'Relish Hello Happiness': 'relish', 'Topflite': 'topflite',
};
const out = 'src/assets/projects';
for (const dir of fs.readdirSync(src)) {
  const slug = map[dir] ?? (dir.startsWith('Viand') ? 'viande' : null);
  if (!slug) { console.log('skip', dir); continue; }
  const files = fs.readdirSync(path.join(src, dir)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();
  fs.mkdirSync(path.join(out, slug), { recursive: true });
  let i = 0;
  for (const f of files) {
    i++;
    const dest = path.join(out, slug, String(i).padStart(2, '0') + '.jpg');
    const meta = await sharp(path.join(src, dir, f)).rotate().resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 90, mozjpeg: true }).toFile(dest);
    console.log(slug, i, f, `${meta.width}x${meta.height}`);
  }
}
