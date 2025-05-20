import { test, expect } from "@playwright/test";

test("Checkbox - In Playwright", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/#");

  await page.locator("#sunday").check();
  await expect(page.locator("#sunday")).toBeChecked();
  await page.waitForTimeout(3000);

  await page.locator("#sunday").uncheck();
  expect(await page.locator("#sunday").isChecked()).toBeFalsy();
  await page.waitForTimeout(3000);

  const checkbox=["#sunday","#wednesday","#friday"]

  for(const check of checkbox){
    await page.locator(check).check();
  }
  await page.waitForTimeout(3000);

  for(const check of checkbox){
    await page.locator(check).uncheck();
  }
 await page.waitForTimeout(3000);
 page.close();
});
