import { readFileSync, writeFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const brandDir = join(root, "public/brand");
const assetsDir = join(root, "docs/brand/assets");
const markSvg = readFileSync(join(brandDir, "lyniq-mark.svg"), "utf8");
const markDataUri = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

const html = `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap"
      rel="stylesheet"
    />
    <style>
      * { box-sizing: border-box; }
      body { margin: 0; background: transparent; }
      .banner {
        display: inline-flex;
        align-items: center;
        gap: 36px;
        padding: 48px 60px;
        background: #081428;
      }
      .banner--wide {
        width: 1200px;
        height: 300px;
      }
      .banner--compact {
        width: 800px;
        height: 200px;
        gap: 28px;
        padding: 32px 48px;
      }
      .banner--compact .mark { width: 120px; height: 120px; }
      .banner--compact .word { font-size: 72px; }
      .mark { width: 144px; height: 144px; flex-shrink: 0; display: block; }
      .word {
        font-family: "Sora", sans-serif;
        font-weight: 800;
        font-size: 96px;
        color: #f5f9ff;
        letter-spacing: 0.04em;
        line-height: 1;
        white-space: nowrap;
      }
    </style>
  </head>
  <body>
    <div id="wide" class="banner banner--wide">
      <img class="mark" alt="" src="${markDataUri}" />
      <span class="word">LYNIQ</span>
    </div>
    <div id="compact" class="banner banner--compact">
      <img class="mark" alt="" src="${markDataUri}" />
      <span class="word">LYNIQ</span>
    </div>
  </body>
</html>`;

const tmpHtml = join(root, ".tmp-lyniq-lockup-export.html");
writeFileSync(tmpHtml, html);

async function screenshotBanner(page, selector, outPath) {
  const el = page.locator(selector);
  await el.screenshot({ path: outPath, type: "png" });
}

await mkdir(assetsDir, { recursive: true }).catch(() => {});

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto(`file://${tmpHtml}`);
await page.waitForFunction(() => document.fonts.check('800 96px "Sora"'));
await page.waitForTimeout(300);

await screenshotBanner(page, "#wide", join(brandDir, "lyniq-lockup.png"));
await screenshotBanner(page, "#compact", join(brandDir, "lyniq-lockup-800.png"));
await screenshotBanner(page, "#compact", join(assetsDir, "lyniq-lockup.png"));

await browser.close();

await sharp(join(brandDir, "lyniq-lockup-transparent.svg"), { density: 300 })
  .resize(1824, 288, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png({ compressionLevel: 9 })
  .toFile(join(brandDir, "lyniq-lockup-transparent.png"));

console.log("Wrote public/brand/lyniq-lockup.png");
console.log("Wrote public/brand/lyniq-lockup-800.png");
console.log("Wrote docs/brand/assets/lyniq-lockup.png");
console.log("Wrote public/brand/lyniq-lockup-transparent.png");
