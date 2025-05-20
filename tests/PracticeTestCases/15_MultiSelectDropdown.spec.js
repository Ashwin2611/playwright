import { test, expect } from "@playwright/test";

test("Multi Select Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/#");
  await page.selectOption("#colors", ["Red", "Blue", "Green", "Yellow"]);

  const option = await page.$$("//select[@id='colors']/option");
  expect(option.length).toBe(7);

  let flag = false;
  for (const opt of option) {
    const opttext = await opt.textContent();
    console.log(opttext);
    if (opttext.includes("Yellow")) {
      flag = true;
      break;
    }
  }
  expect(flag).toBeTruthy();
  await page.waitForTimeout(3000);
  await page.close();
});

test("Multi Selected Items", async ({ page }) => {
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

  await page.click(".multiselect-selected-text");
  const option = await page.$$(
    "//ul[@class='multiselect-container dropdown-menu']/li//input"
  );
  expect(option.length).toBe(11);
  await page.waitForSelector(
    "//ul[@class='multiselect-container dropdown-menu']/li//label"
  );
  const options = await page.$$(
    "//ul[@class='multiselect-container dropdown-menu']/li//label"
  );
  for (const opt of options) {
    const opttxt = await opt.textContent();
    console.log("Text:", opttxt);
    if (
      opttxt.includes("Java") ||
      opttxt.includes("C#") ||
      opttxt.includes("MySQL")
    ) {
      await opt.check();
    }
  }
  await page.waitForTimeout(3000);
  for (const opt of options) {
    const opttxt = await opt.textContent();
    console.log("Text:", opttxt);
    if (
      opttxt.includes("HTML") ||
      opttxt.includes("C#") ||
      opttxt.includes("CSS")
    ) {
      await opt.uncheck();
    }
  }
  await page.waitForTimeout(3000);
  await page.close();
});
