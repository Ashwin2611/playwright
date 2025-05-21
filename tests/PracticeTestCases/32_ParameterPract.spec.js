import { test, expect } from "@playwright/test";

const testValue = [
  "selenium vs playwright",
  "selenium vs playwright vs cypress",
  "selenium vs cucumber",
  "selenium vs robot framework",
  "playwright automation",
  "playwright automation framework",
];

for (const value of testValue) {
  test(`${value}`, async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.fill("#APjFqb", value);
    await page.waitForTimeout(2000)
    await page.locator("#APjFqb").press("Enter");
    await page.waitForTimeout(5000)
    await expect(page.locator("//a[@id='logo']//*[name()='svg']")).toBeVisible();
  });
}
