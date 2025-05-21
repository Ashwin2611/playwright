# Test info

- Name: Test3
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\22_Reports.spec.js:15:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/#", waiting until "load"

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\22_Reports.spec.js:16:14
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | test("Test1", async ({ page }) => {
   3 |   await page.goto(
   4 |     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
   5 |   );
   6 |   await expect(page).toHaveTitle("OrangeHRM");
   7 |   await page.close();
   8 | });
   9 | test("Test2", async ({ page }) => {
  10 |   await page.goto("https://www.demoblaze.com/index.html");
  11 |   await page.waitForTimeout(2000);
  12 |   await expect(page).toHaveTitle("STORE");
  13 |   await page.close();
  14 | });
  15 | test("Test3", async ({ page }) => {
> 16 |   await page.goto("https://testautomationpractice.blogspot.com/#");
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  17 |   await expect(page).toHaveTitle("Automation Testing Practice");
  18 |   await page.close();
  19 | });
  20 |
```