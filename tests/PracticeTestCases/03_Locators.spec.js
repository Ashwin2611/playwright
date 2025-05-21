import { test, expect } from "@playwright/test";
import { TIMEOUT } from "dns";

test("User login", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.click("id=login2");
  await page.fill("#loginusername", "Ashwin@123");
  // await page.locator('loginusername').fill('Ashwin@123')
  await page.fill("#loginpassword", "ashwin@123");
  await page.click('xpath=//*[@id="logInModal"]/div/div/div[3]/button[2]');
  const logoutlink = page.locator("#logout2");
  await expect(logoutlink).toBeVisible();
  await page.close();
});

const arr = [
  "https://practice.expandtesting.com/login",
  "https://practicetestautomation.com/practice-test-login",
];

test("Login", async ({ page }) => {
  await page.goto("https://practice.expandtesting.com/login");
  await page.fill("#username", "practice");
  await page.fill("#password", "SuperSecretPassword!");
  await page.click("//*[@id='login']/button");
  page.close();
});

test("Login2", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login");
  await page.fill("#username", "student");
  await page.fill("#password", "Password123");
  await page.click("#submit");
  page.close();
});

test("Login3", async ({ page }) => {
  for (const data of arr) {
    // await page.waitForURL(`${data}`);
    await page.goto(`${data}`);
    const pageurl = page.url();
    console.log("URL", pageurl);
    expect(page).toHaveURL(pageurl);
    const pagetitle = await page.title();
    console.log("Title", pagetitle);
    expect(page).toHaveTitle(pagetitle);
    if (pageurl === "https://practice.expandtesting.com/login") {
      await page.fill("#username", "practice");
      await page.fill("#password", "SuperSecretPassword!");
      await page.click("//*[@id='login']/button");
    } else {
      await page.fill("#username", "student");
      await page.fill("#password", "Password123");
      await page.click("#submit");
    }

    // page.close();
  }
});
