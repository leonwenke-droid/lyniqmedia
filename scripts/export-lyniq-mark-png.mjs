import { readFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "public/brand/lyniq-mark.svg");
const svg = readFileSync(svgPath);

const BRAND_BG = { r: 8, g: 20, b: 40, alpha: 1 }; // #081428
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

const exports = [
  { path: "public/brand/lyniq-mark.png", size: 1024, background: TRANSPARENT },
  { path: "public/brand/lyniq-mark-512.png", size: 512, background: TRANSPARENT },
  { path: "public/brand/lyniq-mark-180.png", size: 180, background: TRANSPARENT },
  { path: "public/brand/lyniq-mark-on-blue.png", size: 1024, background: BRAND_BG },
  { path: "public/brand/lyniq-mark-on-blue-512.png", size: 512, background: BRAND_BG },
  { path: "docs/brand/assets/lyniq-mark.png", size: 1024, background: TRANSPARENT },
  { path: "docs/brand/assets/lyniq-mark-on-blue.png", size: 1024, background: BRAND_BG },
];

async function renderMark(size, background) {
  const mark = await sharp(svg, { density: 300 })
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  if (background.alpha === 0) {
    return sharp(mark);
  }

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 3,
      background: { r: background.r, g: background.g, b: background.b },
    },
  }).composite([{ input: mark }]);
}

const pngOptions = { compressionLevel: 9, adaptiveFiltering: true };

for (const item of exports) {
  const out = join(root, item.path);
  await mkdir(dirname(out), { recursive: true });
  const image = await renderMark(item.size, item.background);
  await image.png(pngOptions).toFile(out);
  console.log(`Wrote ${item.path} (${item.size}×${item.size})`);
}
