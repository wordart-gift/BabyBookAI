// Rasterises public/favicon.svg into the PNG/ICO sizes browsers and iOS ask
// for. Run after changing the SVG: `node scripts/make-icons.mjs`.
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const svg = await readFile(new URL('../public/favicon.svg', import.meta.url));
const png = (size) => sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();

// iOS rounds the corners itself and shows transparency as black: full bleed.
const square = Buffer.from(svg.toString().replace('rx="14"', 'rx="0"'));
await writeFile(
  new URL('../public/apple-touch-icon.png', import.meta.url),
  await sharp(square, { density: 384 }).resize(180, 180).png().toBuffer(),
);

// An .ico is a tiny header in front of one or more PNGs.
const ico32 = await png(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // one image
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(ico32.length, 14);
header.writeUInt32LE(22, 18); // offset of the PNG
await writeFile(new URL('../public/favicon.ico', import.meta.url), Buffer.concat([header, ico32]));

console.log('icons written');
