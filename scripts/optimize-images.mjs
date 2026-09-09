import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('public/Fotos');
const MAX_W = 1920;
const QUALITY = 82;
const exts = new Set(['.jpg', '.jpeg', '.png']);

const files = fs.readdirSync(dir).filter(f => exts.has(path.extname(f).toLowerCase()));

let before = 0, after = 0;
for (const name of files) {
  const full = path.join(dir, name);
  const stat = fs.statSync(full);
  before += stat.size;

  const buf = fs.readFileSync(full);
  const img = sharp(buf, { failOn: 'none' }).rotate();
  const meta = await img.metadata();
  const targetW = Math.min(meta.width || MAX_W, MAX_W);

  const out = await img
    .resize({ width: targetW, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  fs.writeFileSync(full, out);
  const newSize = out.length;
  after += newSize;
  const savedPct = ((stat.size - newSize) / stat.size * 100).toFixed(1);
  console.log(`${name.padEnd(35)} ${(stat.size/1024/1024).toFixed(2)} MB -> ${(newSize/1024/1024).toFixed(2)} MB  (-${savedPct}%)`);
}

console.log('---');
console.log(`Total: ${(before/1024/1024).toFixed(2)} MB -> ${(after/1024/1024).toFixed(2)} MB  (${(((before-after)/before)*100).toFixed(1)}% reducido)`);
