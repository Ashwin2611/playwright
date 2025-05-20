import { test, expect } from "@playwright/test";

test("Auto Suggest Dropdown", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.fill("#APjFqb", "playwright");

  await page.waitForSelector("//div[@class='wM6W7d']/span");
  const option = await page.$$("//div[@class='wM6W7d']/span");

  for (const opt of option) {
    const opttext = await opt.textContent();
    console.log("Text Content: ", opttext);
    if (opttext.includes("playwright tutorial")) {
      await opt.click();
      break;
    }
  }
  await page.goto("https://playwright.dev/");
  console.log(await page.title());
  await expect(page).toHaveTitle(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
  await page.waitForTimeout(3000);
});

test("Validate Goodle search", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.fill("#APjFqb", "easycalculation");
  await page.waitForSelector("//div[@class='wM6W7d']/span");
  const options = await page.$$("//div[@class='wM6W7d']/span");
  for (const option of options) {
    const text = await option.textContent();
    console.log("Text Content: ", text);
  }
  await page.click("(//div[@class='wM6W7d']/span)[1]");
  await page.waitForTimeout(3000);
  //   await expect(page.locator("//a[@class='zReHs'])[1]")).toBeVisible();
  await page.goto("https://www.easycalculation.com/search.php");
  await page.waitForTimeout(3000);
  await page.fill("#googleSearchId", "playwright");
  await page.click("//button[@class='search_button']");
  await page.waitForTimeout(5000);
  expect(page.locator("//a[contains(text(), 'How to Use ')]")).toBeVisible();
  await page.goto("https://apidog.com/blog/playwright-mcp/");
  await page.waitForTimeout(3000);
  await expect(
    page.locator("//a[@href='/en/']//*[name()='svg']")
  ).toBeVisible();
});

test("Auto Suggest in google search", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.fill("#APjFqb", "Javascript");
  await page.waitForSelector("//div[@class='wM6W7d']/span");
  const options = await page.$$("//div[@class='wM6W7d']/span");
  for (const option of options) {
    const text = await option.textContent();
    console.log("Text Content: ", text);
    if(text.includes("javascript tutorial")){
      await option.click();
      break;
    }
  }

});
