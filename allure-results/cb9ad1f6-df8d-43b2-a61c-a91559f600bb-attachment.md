# Test info

- Name: Auto Suggest in google search
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\16_AutoSuggestionDropdown.spec.js:52:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.google.com/", waiting until "load"

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\16_AutoSuggestionDropdown.spec.js:53:14
```

# Page snapshot

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - button "Google apps":
    - img
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img
- search:
  - img
  - combobox "Search"
  - button "Search by voice":
    - img
  - button "Search by image":
    - img
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCBc
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCBg
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCBk
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCBo
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCBs
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCBw
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCB0
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCB4
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_-11dDih9aJaQRFwcVOuSswgthVU%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjVuqiQibKNAxUpmq8BHey0E2YQ2ZgBCB8
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test("Auto Suggest Dropdown", async ({ page }) => {
   4 |   await page.goto("https://www.google.com/");
   5 |   await page.fill("#APjFqb", "playwright");
   6 |
   7 |   await page.waitForSelector("//div[@class='wM6W7d']/span");
   8 |   const option = await page.$$("//div[@class='wM6W7d']/span");
   9 |
  10 |   for (const opt of option) {
  11 |     const opttext = await opt.textContent();
  12 |     console.log("Text Content: ", opttext);
  13 |     if (opttext.includes("playwright tutorial")) {
  14 |       await opt.click();
  15 |       break;
  16 |     }
  17 |   }
  18 |   await page.goto("https://playwright.dev/");
  19 |   console.log(await page.title());
  20 |   await expect(page).toHaveTitle(
  21 |     "Fast and reliable end-to-end testing for modern web apps | Playwright"
  22 |   );
  23 |   await page.waitForTimeout(3000);
  24 | });
  25 |
  26 | test("Validate Goodle search", async ({ page }) => {
  27 |   await page.goto("https://www.google.com/");
  28 |
  29 |   await page.fill("#APjFqb", "easycalculation");
  30 |   await page.waitForSelector("//div[@class='wM6W7d']/span");
  31 |   const options = await page.$$("//div[@class='wM6W7d']/span");
  32 |   for (const option of options) {
  33 |     const text = await option.textContent();
  34 |     console.log("Text Content: ", text);
  35 |   }
  36 |   await page.click("(//div[@class='wM6W7d']/span)[1]");
  37 |   await page.waitForTimeout(3000);
  38 |   //   await expect(page.locator("//a[@class='zReHs'])[1]")).toBeVisible();
  39 |   await page.goto("https://www.easycalculation.com/search.php");
  40 |   await page.waitForTimeout(3000);
  41 |   await page.fill("#googleSearchId", "playwright");
  42 |   await page.click("//button[@class='search_button']");
  43 |   await page.waitForTimeout(5000);
  44 |   expect(page.locator("//a[contains(text(), 'How to Use ')]")).toBeVisible();
  45 |   await page.goto("https://apidog.com/blog/playwright-mcp/");
  46 |   await page.waitForTimeout(3000);
  47 |   await expect(
  48 |     page.locator("//a[@href='/en/']//*[name()='svg']")
  49 |   ).toBeVisible();
  50 | });
  51 |
  52 | test("Auto Suggest in google search", async ({ page }) => {
> 53 |   await page.goto("https://www.google.com/");
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  54 |   await page.fill("#APjFqb", "Javascript");
  55 |   await page.waitForSelector("//div[@class='wM6W7d']/span");
  56 |   const options = await page.$$("//div[@class='wM6W7d']/span");
  57 |   for (const option of options) {
  58 |     const text = await option.textContent();
  59 |     console.log("Text Content: ", text);
  60 |     if(text.includes("javascript tutorial")){
  61 |       await option.click();
  62 |       break;
  63 |     }
  64 |   }
  65 |
  66 | });
  67 |
```