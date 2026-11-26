// Projects: photos from the client's "Website Projects" folder (2026-11-26),
// resized into src/assets/projects/<slug>/NN.jpg by tools/prep-projects.mjs (NN follows the original file order).
// `cover` = the one frame shown per client (picked for a model / person on camera). `pos` = object-position for the 4:5 crop.
// Every photo of every client also runs in the moving mosaic (see components/ui/Mosaic.astro).
// TODO(client): confirm each `kind` line (inferred from the photos). Cravewell's folder was empty, so it's not listed yet.
export const projects = [
  { slug: 'topflite', kind: 'Aviation academy', count: 9, cover: 8, pos: '50% 28%' },
  { slug: 'euros-chocolate', kind: 'Chocolatier', count: 9, cover: 9 },
  { slug: 'viande', kind: 'Restaurant', count: 10, cover: 3, pos: '50% 35%' },
  { slug: 'manila-athletic-club', kind: 'Pilates studio', count: 8, cover: 3, pos: '50% 40%' },
  { slug: 'elorde-knockout', kind: 'Boxing event', count: 8, cover: 2, pos: '42% 50%' },
  { slug: 'arvo', kind: 'Restaurant & bar', count: 12, cover: 3, pos: '40% 50%' },
  { slug: 'ramada-encore', kind: 'Hotel', count: 9, cover: 7 },
  { slug: 'jill-and-pops', kind: 'Restaurant', count: 9, cover: 8 },
  { slug: 'k-street', kind: 'Korean street food', count: 7, cover: 2, pos: '40% 50%' },
  { slug: 'dw-lotion', kind: 'Skincare', count: 8, cover: 2, pos: '50% 32%' },
  { slug: 'relish', kind: 'Café & restaurant', count: 9, cover: 9 },
  { slug: 'atlas', kind: 'Coffee', count: 5, cover: 2, pos: '50% 35%' },
  { slug: 'ochocento-cafe', kind: 'Café', count: 5, cover: 3 }, // no clean shot of a person in this folder (04 is a split frame)
  { slug: 'hotbox-ph', kind: 'Meal boxes', count: 4, cover: 3 },
  { slug: 'happy-hour', kind: 'Drinks', count: 3, cover: 2 },
  { slug: 'piyo', kind: 'Restaurant', count: 2, cover: 1 },
];

/**
 * Every photo, dealt round-robin across clients (1st photo of each, then 2nd of each…) so neighbours
 * never come from the same shoot, then split into `cols` columns for the mosaic. Returns [[slug, n], …] per column.
 */
export function mosaicColumns(cols) {
  const all = [];
  const max = Math.max(...projects.map((p) => p.count));
  for (let n = 1; n <= max; n++) projects.forEach((p) => { if (n <= p.count) all.push([p.slug, n]); });
  const out = Array.from({ length: cols }, () => []);
  all.forEach((f, i) => out[i % cols].push(f));
  return out;
}
