import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "../public/og-image.png");

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="80%" cy="10%" r="60%">
      <stop offset="0%" stop-color="rgba(0,194,203,0.18)"/>
      <stop offset="100%" stop-color="rgba(0,194,203,0)"/>
    </radialGradient>
    <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="transparent"/>
      <stop offset="50%" stop-color="#00c2cb"/>
      <stop offset="100%" stop-color="transparent"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#060d18"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="3" fill="url(#line)"/>
  <rect x="0" y="627" width="1200" height="3" fill="url(#line)" opacity="0.5"/>
  <text x="80" y="180" fill="#f5f9ff" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="8">LYNIQ</text>
  <text x="80" y="290" fill="#f5f9ff" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="800">KI-Software für den Mittelstand</text>
  <text x="80" y="360" fill="rgba(245,249,255,0.55)" font-family="Arial, Helvetica, sans-serif" font-size="26">MVP in einer Woche · DSGVO-konform · Server in DE</text>
  <text x="1040" y="580" fill="rgba(245,249,255,0.25)" font-family="monospace" font-size="20" text-anchor="end">lyniqmedia.com</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(outPath, png);
console.log(`Wrote ${outPath}`);
