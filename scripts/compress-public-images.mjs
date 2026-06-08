import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const MIN_BYTES = 200 * 1024;
const MAX_WIDTH = 1600;
const QUALITY = 80;

const extensions = new Set([".png", ".jpg", ".jpeg"]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const converted = [];

for (const filePath of walk(publicDir)) {
  const ext = path.extname(filePath).toLowerCase();
  if (!extensions.has(ext)) continue;

  const stat = fs.statSync(filePath);
  if (stat.size <= MIN_BYTES) continue;

  const webpPath = filePath.slice(0, -ext.length) + ".webp";
  const image = sharp(filePath);
  const meta = await image.metadata();

  let pipeline = image;
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: QUALITY }).toFile(webpPath);
  fs.unlinkSync(filePath);

  const webpSize = fs.statSync(webpPath).size;
  converted.push({
    from: path.relative(publicDir, filePath),
    to: path.relative(publicDir, webpPath),
    before: stat.size,
    after: webpSize,
  });
}

console.log(JSON.stringify(converted, null, 2));
console.error(`Converted ${converted.length} file(s).`);
