# Test info

- Name: Checkbox - In Playwright
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\13_Checkbox.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/#", waiting until "load"

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\13_Checkbox.spec.js:4:14
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test("Checkbox - In Playwright", async ({ page }) => {
>  4 |   await page.goto("https://testautomationpractice.blogspot.com/#");
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |
   6 |   await page.locator("#sunday").check();
   7 |   await expect(page.locator("#sunday")).toBeChecked();
   8 |   await page.waitForTimeout(3000);
   9 |
  10 |   await page.locator("#sunday").uncheck();
  11 |   expect(await page.locator("#sunday").isChecked()).toBeFalsy();
  12 |   await page.waitForTimeout(3000);
  13 |
  14 |   const checkbox=["#sunday","#wednesday","#friday"]
  15 |
  16 |   for(const check of checkbox){
  17 |     await page.locator(check).check();
  18 |   }
  19 |   await page.waitForTimeout(3000);
  20 |
  21 |   for(const check of checkbox){
  22 |     await page.locator(check).uncheck();
  23 |   }
  24 |  await page.waitForTimeout(3000);
  25 |  page.close();
  26 | });
  27 |
```