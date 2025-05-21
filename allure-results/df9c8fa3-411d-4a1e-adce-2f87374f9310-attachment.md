# Test info

- Name: Test Dropdown
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\14_Dropdown.spec.js:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/#", waiting until "load"

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\14_Dropdown.spec.js:4:14
```

# Test source

```ts
   1 | import { test, expect, selectors } from "@playwright/test";
   2 |
   3 | test("Test Dropdown", async ({ page }) => {
>  4 |   await page.goto("https://testautomationpractice.blogspot.com/#");
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
   5 |   await page.selectOption("#country", "France");
   6 |   await page.waitForTimeout(2000);
   7 |   await page.selectOption("#country", { label: "India" });
   8 |   await page.waitForTimeout(2000);
   9 |   await page.selectOption("#country", { value: "uk" });
  10 |   await page.waitForTimeout(2000);
  11 |   await page.selectOption("#country", { index: 6 });
  12 |   await page.waitForTimeout(2000);
  13 |
  14 |   const options = await page.$$("//select[@id='country']/option");
  15 |   expect(options.length).toBe(10);
  16 |
  17 |   const options2 = page.locator("//select[@id='country']/option");
  18 |   expect(options2).toHaveCount(10);
  19 |   console.log("Options2", options2);
  20 |   let flag = false;
  21 |   for (const opt of options) {
  22 |     const optcontent = await opt.textContent();
  23 |     console.log(optcontent);
  24 |     if (optcontent.includes("India")) {
  25 |       flag = true;
  26 |       break;
  27 |     }
  28 |   }
  29 |   expect(flag).toBeTruthy();
  30 |   await page.waitForTimeout(3000);
  31 |   await page.close();
  32 | });
  33 |
  34 | test("Dropdown for facebook", async ({ page }) => {
  35 |   await page.goto("https://www.facebook.com/r.php?entry_point=login");
  36 |
  37 |   await page.selectOption("#day", "29");
  38 |   await page.waitForTimeout(2000);
  39 |   await page.selectOption("#month", { value: "9" });
  40 |   await page.waitForTimeout(2000);
  41 |   await page.selectOption("#year", "2002");
  42 |   await page.waitForTimeout(2000);
  43 |
  44 |   const daycount = await page.$$("//select[@id='day']/option");
  45 |   console.log("Day Count: ", daycount.length);
  46 |
  47 |   const monthcount = await page.$$("//select[@id='month']/option");
  48 |   console.log("Month Count: ", monthcount.length);
  49 |
  50 |   const yearcount = await page.$$("//select[@id='year']/option");
  51 |   console.log("Year Count: ", yearcount.length);
  52 |
  53 |
  54 |   console.log("Day:")
  55 |   for(const day of daycount){
  56 |     const daytitle=await day.textContent();
  57 |     console.log(daytitle);
  58 |   }
  59 |
  60 |   console.log("Month:")
  61 |     for(const month of monthcount){
  62 |     const monthtitle=await month.textContent();
  63 |     console.log(monthtitle);
  64 |   }
  65 |
  66 |   console.log("Year:")
  67 |     for(const year of yearcount){
  68 |     const yeartitle=await year.textContent();
  69 |     console.log(yeartitle);
  70 |   }
  71 |   await page.close();
  72 | });
  73 |
```