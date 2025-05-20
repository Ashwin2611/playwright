import { test, expect } from "@playwright/test";

test("Validate Radio button for facebook", async ({ page }) => {
  await page.goto("https://www.facebook.com/r.php?entry_point=login");

  await page.locator("(//input[@id='sex'])[1]").check();
  await page.locator("(//input[@id='sex'])[2]").check();
  await page.locator("(//input[@id='sex'])[3]").check();

  const radiocount = await page.$$("//input[@type='radio']");
  console.log("Radio Count", radiocount.length);

  await expect(page.locator("(//input[@id='sex'])[3]")).toBeChecked();
});

test("Validate Radio button for automate", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/#");

  await page.locator("#male").check();
  await page.locator("#female").check();

  const radiocount = await page.$$("//input[@type='radio']");
  console.log("Radio Count", radiocount.length);

  await expect(page.locator("#female")).toBeChecked();
});
