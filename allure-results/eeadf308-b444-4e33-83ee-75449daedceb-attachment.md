# Test info

- Name: Spicejet Pratice
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\26_MouseHover.spec.js:17:6

# Error details

```
Error: locator.hover: Test ended.
Call log:
  - waiting for getByText('SpiceClub')

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\26_MouseHover.spec.js:22:18
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | test("Mouse Hover", async ({ page }) => {
   3 |   await page.goto("https://testautomationpractice.blogspot.com/");
   4 |   const button = page.getByRole("button", { name: "Point Me" });
   5 |   const mobile = page.getByRole("link", { name: "Mobiles" });
   6 |   const laptop = page.getByRole("link", { name: "Laptops" });
   7 |
   8 |   await button.hover();
   9 |   await mobile.hover();
  10 |   await laptop.hover();
  11 |   await laptop.click();
  12 |
  13 |   await page.waitForTimeout(3000);
  14 |   await page.close();
  15 | });
  16 |
  17 | test.only("Spicejet Pratice",async({page})=>{
  18 |     await page.goto("https://www.spicejet.com/");
  19 |     const button =page.getByText("SpiceClub");
  20 |     const program=page.getByText("Our Program")
  21 |
> 22 |     await button.hover();
     |                  ^ Error: locator.hover: Test ended.
  23 |     await program.click();
  24 |
  25 |     await page.goto("https://testautomationpractice.blogspot.com/");
  26 |     const addon=page.getByText("Add-ons");
  27 |     const spiceplus=page.getByText("SpicePlus")
  28 |
  29 |     await addon.hover();
  30 |     await spiceplus.click();
  31 | })
  32 |
  33 |
  34 |
```