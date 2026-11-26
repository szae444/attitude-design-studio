// Projects: photos from the client's "Website Projects" folder (2026-11-26),
// resized into src/assets/projects/<slug>/NN.jpg by tools/prep-projects.mjs (NN follows the original file order).
// `cover` = big frame, `side` = small frame (photo numbers). `pos` = object-position for the crops.
// TODO(client): confirm each `kind` line (inferred from the photos). Cravewell's folder was empty, so it's not listed yet.
export const projects = [
  { slug: 'topflite', name: 'Topflite', kind: 'Aviation academy', count: 9, cover: 5, side: 8, pos: '50% 62%' },
  { slug: 'euros-chocolate', name: 'Euros Chocolate', kind: 'Chocolatier', count: 9, cover: 5, side: 4 },
  { slug: 'viande', name: 'Viandè Dining', kind: 'Restaurant', count: 10, cover: 9, side: 6 },
  { slug: 'manila-athletic-club', name: 'Manila Athletic Club', kind: 'Pilates studio', count: 8, cover: 7, side: 4, pos: '50% 62%' },
  { slug: 'elorde-knockout', name: 'Elorde Knockout', kind: 'Boxing event', count: 8, cover: 4, side: 2, sidePos: '30% 50%' },
  { slug: 'arvo', name: 'Arvo', kind: 'Restaurant & bar', count: 12, cover: 3, side: 7 },
  { slug: 'ramada-encore', name: 'Ramada Encore', kind: 'Hotel', count: 9, cover: 9, side: 7 },
  { slug: 'jill-and-pops', name: 'Jill & Pops', kind: 'Restaurant', count: 9, cover: 1, side: 3 },
  { slug: 'k-street', name: 'K-Street', kind: 'Korean street food', count: 7, cover: 4, side: 3 },
  { slug: 'dw-lotion', name: 'DW Lotion', kind: 'Skincare', count: 8, cover: 5, side: 1 },
  { slug: 'relish', name: 'Relish Hello Happiness', kind: 'Café & restaurant', count: 9, cover: 1, side: 2 },
  { slug: 'atlas', name: 'Atlas', kind: 'Coffee', count: 5, cover: 3, side: 2 },
  { slug: 'ochocento-cafe', name: 'Ochocento Cafe', kind: 'Café', count: 5, cover: 3, side: 5, sidePos: '86% 50%' },
  { slug: 'hotbox-ph', name: 'Hotbox PH', kind: 'Meal boxes', count: 4, cover: 3, side: 1 },
  { slug: 'happy-hour', name: 'Happy Hour', kind: 'Drinks', count: 3, cover: 2, side: 3 },
  { slug: 'piyo', name: 'Piyo Grill & Restaurant', kind: 'Restaurant', count: 2, cover: 2, side: 1 },
];

// Mosaic panel: four drifting columns of frames, [slug, photo number].
export const mosaic = [
  [['arvo', 12], ['euros-chocolate', 2], ['manila-athletic-club', 2], ['topflite', 6], ['viande', 4]],
  [['k-street', 7], ['ramada-encore', 6], ['jill-and-pops', 7], ['atlas', 5], ['elorde-knockout', 5]],
  [['relish', 5], ['topflite', 3], ['viande', 2], ['dw-lotion', 3], ['euros-chocolate', 9]],
  [['ochocento-cafe', 2], ['manila-athletic-club', 8], ['arvo', 6], ['k-street', 1], ['hotbox-ph', 2]],
];
