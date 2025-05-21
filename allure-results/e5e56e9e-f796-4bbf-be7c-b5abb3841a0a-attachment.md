# Test info

- Name: selenium vs playwright
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\32_ParameterPract.spec.js:13:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('//a[@id=\'logo\']//*[name()=\'svg\']')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('//a[@id=\'logo\']//*[name()=\'svg\']')

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\32_ParameterPract.spec.js:19:68
```

# Page snapshot

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 136.226.244.172 Time: 2025-05-21T11:37:12Z URL: https://www.google.com/search?safe=active&q=selenium+vs+playwright&sca_esv=e7ca8cbc53cd9f33&source=hp&ei=4rotaIXgM4O4vr0PyryHsQU&iflsig=ACkRmUkAAAAAaC3I8qXPgKOBv8XQUHL3ciSEkphI1a0F&ved=0ahUKEwiF2Z_HvLSNAxUDnK8BHUreIVYQ4dUDCA8&uact=5&oq=selenium+vs+playwright&gs_lp=Egdnd3Mtd2l6IhZzZWxlbml1bSB2cyBwbGF5d3JpZ2h0MgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiwEVAAWABwAHgAkAEAmAFcoAFcqgEBMbgBA8gBAPgBAZgCAaACfpgDAJIHAzAuMaAH8QWyBwMwLjG4B37CBwM0LTHIBx8&sclient=gws-wiz&sei=57otaOvYCdvp1e8PrKXY6AU&safe=active"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | const testValue = [
   4 |   "selenium vs playwright",
   5 |   "selenium vs playwright vs cypress",
   6 |   "selenium vs cucumber",
   7 |   "selenium vs robot framework",
   8 |   "playwright automation",
   9 |   "playwright automation framework",
  10 | ];
  11 |
  12 | for (const value of testValue) {
  13 |   test(`${value}`, async ({ page }) => {
  14 |     await page.goto("https://www.google.com/");
  15 |     await page.fill("#APjFqb", value);
  16 |     await page.waitForTimeout(2000)
  17 |     await page.locator("#APjFqb").press("Enter");
  18 |     await page.waitForTimeout(5000)
> 19 |     await expect(page.locator("//a[@id='logo']//*[name()='svg']")).toBeVisible();
     |                                                                    ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  20 |   });
  21 | }
  22 |
```