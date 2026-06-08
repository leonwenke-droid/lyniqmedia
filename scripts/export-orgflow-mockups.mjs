import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "public/projects/orgflow");
const baseUrl = process.env.MOCKUP_EXPORT_URL ?? "http://localhost:3000";

const MOCKUPS = [
  { id: "dashboard", height: 580 },
  { id: "schichten", height: 520 },
  { id: "finanzen", height: 520 },
  { id: "aufgaben", height: 520 },
  { id: "kombi", height: 480 },
  { id: "mitglieder", height: 480 },
];

async function waitForServer(url, attempts = 30) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`Dev server not reachable at ${url}`);
}

async function main() {
  await mkdir(outDir, { recursive: true });
  await waitForServer(`${baseUrl}/mockups-export/orgflow`);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    deviceScaleFactor: 2,
    viewport: { width: 960, height: 800 },
  });

  await page.goto(`${baseUrl}/mockups-export/orgflow`, {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(1500);

  for (const { id, height } of MOCKUPS) {
    const locator = page.locator(`#${id}`);
    await locator.waitFor({ state: "visible" });
    await locator.screenshot({
      path: path.join(outDir, `${id}.png`),
      type: "png",
    });
    console.log(`✓ ${id}.png (${900 * 2}×${height * 2}px @2x)`);
  }

  await browser.close();
  console.log(`\nExported to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
