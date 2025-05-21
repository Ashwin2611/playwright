# Test info

- Name: Login
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\03_Locators.spec.js:37:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://practicetestautomation.com/practice-test-login", waiting until "load"

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\03_Locators.spec.js:40:16
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | import { TIMEOUT } from "dns";
   3 |
   4 | // test("User login", async ({ page }) => {
   5 | //   await page.goto("https://www.demoblaze.com/index.html");
   6 | //   await page.click("id=login2");
   7 | //   await page.fill("#loginusername", "Ashwin@123");
   8 | //   // await page.locator('loginusername').fill('Ashwin@123')
   9 | //   await page.fill("#loginpassword", "ashwin@123");
  10 | //   await page.click('xpath=//*[@id="logInModal"]/div/div/div[3]/button[2]');
  11 | //   const logoutlink = page.locator("#logout2");
  12 | //   await expect(logoutlink).toBeVisible();
  13 | //   await page.close();
  14 | // });
  15 |
  16 | const arr = [
  17 |   "https://practice.expandtesting.com/login",
  18 |   "https://practicetestautomation.com/practice-test-login",
  19 | ];
  20 |
  21 | // test("Login", async ({ page }) => {
  22 | //   await page.goto("https://practice.expandtesting.com/login");
  23 | //   await page.fill("#username", "practice");
  24 | //   await page.fill("#password", "SuperSecretPassword!");
  25 | //   await page.click("//*[@id='login']/button");
  26 | //   page.close();
  27 | // });
  28 |
  29 | // test("Login2", async ({ page }) => {
  30 | //   await page.goto("https://practicetestautomation.com/practice-test-login");
  31 | //   await page.fill("#username", "student");
  32 | //   await page.fill("#password", "Password123");
  33 | //   await page.click("#submit");
  34 | //   page.close();
  35 | // });
  36 |
  37 | test("Login", async ({ page }) => {
  38 |   for (const data of arr) {
  39 |     // await page.waitForURL(`${data}`);
> 40 |     await page.goto(`${data}`);
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  41 |     const pageurl = page.url();
  42 |     console.log("URL", pageurl);
  43 |     expect(page).toHaveURL(pageurl);
  44 |     const pagetitle = await page.title();
  45 |     console.log("Title", pagetitle);
  46 |     expect(page).toHaveTitle(pagetitle);
  47 |     if (pageurl === "https://practice.expandtesting.com/login") {
  48 |       await page.fill("#username", "practice");
  49 |       await page.fill("#password", "SuperSecretPassword!");
  50 |       await page.click("//*[@id='login']/button");
  51 |     } else {
  52 |       await page.fill("#username", "student");
  53 |       await page.fill("#password", "Password123");
  54 |       await page.click("#submit");
  55 |     }
  56 |
  57 |     // page.close();
  58 |   }
  59 | });
  60 |
```