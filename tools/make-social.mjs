// One-off: build the link-preview image (public/og.jpg, 1200×630) and the square logo Google uses
// for the business panel (public/logo.png, 512×512) from the real wordmark + project covers.
// Usage: node tools/make-social.mjs
import fs from 'node:fs';
import sharp from 'sharp';

const INK = '#0c0c0b';
const WHITE = '#fbfaf7';
const MUTE = '#8f8d88';

const logo = fs.readFileSync('src/assets/brand/logo-wordmark.svg', 'utf8');
const logoInner = logo.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
// wordmark viewBox is "0 6.5 309 89"
const mark = (x, y, w) =>
  `<svg x="${x}" y="${y}" width="${w}" height="${(w * 89) / 309}" viewBox="0 6.5 309 89" fill="${WHITE}">${logoInner.replace(/fill="[^"]*"/g, '')}</svg>`;

const photo = async (slug, n, w, h, pos = 'attention') => {
  const buf = await sharp(`src/assets/projects/${slug}/${String(n).padStart(2, '0')}.jpg`)
    .resize(w * 2, h * 2, { fit: 'cover', position: pos })
    .jpeg({ quality: 82 })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
};
const tile = (href, x, y, w, h, id) =>
  `<clipPath id="${id}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14"/></clipPath>` +
  `<image href="${href}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid slice" clip-path="url(#${id})"/>`;

// ── og.jpg ──
const W = 1200, H = 630, tw = 200, th = 250, gap = 14;
const tiles = [
  // two staggered columns of real covers bleeding off the right/top/bottom edges
  ['topflite', 8, 716, -60], ['manila-athletic-club', 3, 716, -60 + th + gap], ['k-street', 2, 716, -60 + 2 * (th + gap)],
  ['dw-lotion', 2, 716 + tw + gap, 40], ['arvo', 3, 716 + tw + gap, 40 + th + gap], ['viande', 3, 716 + tw + gap, 40 - th - gap],
  ['euros-chocolate', 9, 716 + 2 * (tw + gap), -20], ['elorde-knockout', 2, 716 + 2 * (tw + gap), -20 + th + gap], ['atlas', 2, 716 + 2 * (tw + gap), -20 + 2 * (th + gap)],
];
let imgs = '';
for (const [i, [slug, n, x, y]] of tiles.entries()) imgs += tile(await photo(slug, n, tw, th), x, y, tw, th, `c${i}`);

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="${INK}"/>
  ${imgs}
  <defs><linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="${INK}"/><stop offset="1" stop-color="${INK}" stop-opacity="0"/></linearGradient></defs>
  <rect x="660" y="0" width="120" height="${H}" fill="url(#fade)"/>
  <text x="80" y="92" font-family="Consolas, 'Courier New', monospace" font-size="17" letter-spacing="3" fill="${MUTE}">CREATIVE &amp; DIGITAL MARKETING · EST. 2019</text>
  ${mark(80, 210, 540)}
  <line x1="80" y1="${H - 140}" x2="620" y2="${H - 140}" stroke="${WHITE}" stroke-opacity=".18"/>
  <text x="80" y="${H - 92}" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="${WHITE}">Branding · Social media · Content · Web</text>
  <text x="80" y="${H - 54}" font-family="Consolas, 'Courier New', monospace" font-size="17" letter-spacing="1" fill="${MUTE}">attitudedesignstudio.org</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 86, mozjpeg: true }).toFile('public/og.jpg');

// ── logo.png (square, for Google's business panel / structured data) ──
const L = 512;
const sq = `<svg xmlns="http://www.w3.org/2000/svg" width="${L}" height="${L}"><rect width="100%" height="100%" fill="${INK}"/>${mark(56, (L - (400 * 89) / 309) / 2, 400)}</svg>`;
await sharp(Buffer.from(sq)).png().toFile('public/logo.png');
console.log('wrote public/og.jpg, public/logo.png');
