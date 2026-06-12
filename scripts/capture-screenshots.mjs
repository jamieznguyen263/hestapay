import { chromium } from "playwright";
import path from "path";

const BASE_URL = "http://localhost:3000";
const OUT_DIR = path.resolve("screenshots");

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  // Wait for fonts and images
  await page.waitForTimeout(2000);

  // 1. Full page screenshot
  await page.screenshot({ path: path.join(OUT_DIR, "00-full-page.png"), fullPage: true });
  console.log("✓ 00-full-page.png");

  // Helper: screenshot a section by its HTML section element index
  async function captureSection(sectionIndex, name) {
    const sections = await page.locator("section").all();
    if (sectionIndex < sections.length) {
      await sections[sectionIndex].screenshot({
        path: path.join(OUT_DIR, `${String(sectionIndex).padStart(2, "0")}-${name}.png`),
      });
      console.log(`✓ ${String(sectionIndex).padStart(2, "0")}-${name}.png`);
    } else {
      console.log(`✗ Section ${sectionIndex} not found for ${name}`);
    }
  }

  // Sections in order on the homepage:
  // 0: Hero
  // 1: Proof strip
  // 2: Problem / Storytelling (PaymentFlowStory)
  // 3: Core Capabilities
  // 4: Business Type Tabs
  // 5: Deep Dive - Routing
  // 6: Deep Dive - Recovery
  // 7: Deep Dive - Settlement
  // 8: Trust / Infrastructure
  // 9: FAQ Preview
  // 10: Final CTA

  await captureSection(0, "hero");
  await captureSection(1, "proof-strip");
  await captureSection(2, "problem-storytelling");
  await captureSection(3, "core-capabilities");
  await captureSection(4, "business-type-tabs");

  // Navigate to restaurant tab so we capture that state
  const tabButtons = await page.locator("button", { hasText: "Restaurants" }).all();
  if (tabButtons.length > 1) {
    await tabButtons[tabButtons.length - 1].click();
    await page.waitForTimeout(500);
  }
  await captureSection(5, "deep-dive-routing");
  await captureSection(6, "deep-dive-recovery");
  await captureSection(7, "deep-dive-settlement");
  await captureSection(8, "trust-infrastructure");
  await captureSection(9, "faq-preview");
  await captureSection(10, "final-cta");

  // Tablet viewport for hero and one deep-dive
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const tabletSections = await page.locator("section").all();
  if (tabletSections[0]) {
    await tabletSections[0].screenshot({
      path: path.join(OUT_DIR, "tablet-hero.png"),
    });
    console.log("✓ tablet-hero.png");
  }
  if (tabletSections[6]) {
    await tabletSections[6].screenshot({
      path: path.join(OUT_DIR, "tablet-deep-dive-recovery.png"),
    });
    console.log("✓ tablet-deep-dive-recovery.png");
  }

  // Mobile viewport for hero
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  const mobileSections = await page.locator("section").all();
  if (mobileSections[0]) {
    await mobileSections[0].screenshot({
      path: path.join(OUT_DIR, "mobile-hero.png"),
    });
    console.log("✓ mobile-hero.png");
  }
  if (mobileSections[2]) {
    await mobileSections[2].screenshot({
      path: path.join(OUT_DIR, "mobile-storytelling.png"),
    });
    console.log("✓ mobile-storytelling.png");
  }

  await browser.close();
  console.log("\nAll screenshots captured.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});