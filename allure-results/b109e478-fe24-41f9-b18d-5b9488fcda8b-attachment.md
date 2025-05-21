# Test info

- Name: Validate Radio button for facebook
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\12_Radiobutton.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.facebook.com/r.php?entry_point=login", waiting until "load"

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\12_Radiobutton.spec.js:4:14
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test("Validate Radio button for facebook", async ({ page }) => {
>  4 |   await page.goto("https://www.facebook.com/r.php?entry_point=login");
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |
   6 |   await page.locator("(//input[@id='sex'])[1]").check();
   7 |   await page.locator("(//input[@id='sex'])[2]").check();
   8 |   await page.locator("(//input[@id='sex'])[3]").check();
   9 |
  10 |   const radiocount = await page.$$("//input[@type='radio']");
  11 |   console.log("Radio Count", radiocount.length);
  12 |
  13 |   await expect(page.locator("(//input[@id='sex'])[3]")).toBeChecked();
  14 | });
  15 |
  16 | test("Validate Radio button for automate", async ({ page }) => {
  17 |   await page.goto("https://testautomationpractice.blogspot.com/#");
  18 |
  19 |   await page.locator("#male").check();
  20 |   await page.locator("#female").check();
  21 |
  22 |   const radiocount = await page.$$("//input[@type='radio']");
  23 |   console.log("Radio Count", radiocount.length);
  24 |
  25 |   await expect(page.locator("#female")).toBeChecked();
  26 | });
  27 |
```