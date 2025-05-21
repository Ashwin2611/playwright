import { test, expect } from "@playwright/test";
const testdata = [
  "data driven testing in playeright",
  "playwright data driven testing javascript",
  "playwright test data management",
  "playwright performance github",
  "playwright best practices",
];
for (const sk of testdata) {
  test(`Parameterize tests in playwright ${sk}`, async ({ page }) => {
    await page.goto("https://www.youtube.com/");
    await page.getByPlaceholder("Search").click();
    await page.getByPlaceholder("Search").fill(sk);
    await page.getByPlaceholder("Search").press("Enter");
    await page.waitForTimeout(5000);
  });
}
