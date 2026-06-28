import { statSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outputPath = join(root, "public/email/lyniq-mark.png");

const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="LYNIQ Media">
  <defs>
    <linearGradient id="lyniqMark" x1="0.06" y1="0.02" x2="0.74" y2="1">
      <stop offset="0" stop-color="#7fdde4"></stop>
      <stop offset="0.32" stop-color="#06c3cc"></stop>
      <stop offset="0.64" stop-color="#1f80e7"></stop>
      <stop offset="1" stop-color="#1a5cf2"></stop>
    </linearGradient>
  </defs>
  <g transform="rotate(45 300 300)">
    <g fill="none" stroke="url(#lyniqMark)" stroke-width="56" stroke-linecap="round" stroke-linejoin="round">
      <path d="M180,456 L107,456 L107,142 L254,142 L254,418"></path>
      <path d="M180,456 L107,456 L107,142 L254,142 L254,418" transform="rotate(180 300 300)"></path>
    </g>
  </g>
</svg>`;

try {
  await mkdir(dirname(outputPath), { recursive: true });

  await sharp(Buffer.from(svgString), { density: 300 })
    .resize(112, 112, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);

  const { size } = statSync(outputPath);
  const sizeKb = (size / 1024).toFixed(2);
  console.log(`Generated ${outputPath} (${sizeKb} KB)`);
} catch (error) {
  console.error("Failed to generate email logo:", error);
  process.exit(1);
}
