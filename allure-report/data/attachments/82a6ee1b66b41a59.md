# Test info

- Name: Register and login
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\05_OpenCartLogin.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByText('Create an account')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('Create an account')

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\05_OpenCartLogin.spec.js:8:53
```

# Page snapshot

```yaml
- img
- banner:
  - button "Scroll to top"
  - link "Skip to main content":
    - /url: "#mainContent"
  - link "eBay Home":
    - /url: https://www.ebay.com
    - img "eBay Home"
- img
- heading "Please verify yourself to continue" [level=1]
- text: To keep eBay a safe place to buy and sell, we will occasionally ask you to verify yourself. This helps us to block unauthorized users from entering our site. Please verify yourself
- iframe
- text: If you are having difficulties with rendering of images on the above verification page, eBay suggests using the latest version of your browser, or an alternate browser listed on the
- link "customer service page":
  - /url: /help/policies/technical-issues/technical-issues?id=4220&st=3&pos=1&query=Technical%20issues&intent=supported%20browsers&lucenceai=lucenceai
- text: .
- contentinfo:
  - list:
    - listitem:
      - link "About eBay":
        - /url: https://www.ebayinc.com
    - listitem:
      - link "Announcements":
        - /url: https://community.ebay.com/t5/Announcements/bg-p/Announcements
    - listitem:
      - link "Community":
        - /url: https://community.ebay.com
    - listitem:
      - link "Security Center":
        - /url: https://pages.ebay.com/securitycenter/index.html
    - listitem:
      - link "Seller Center":
        - /url: https://www.ebay.com/sellercenter
    - listitem:
      - link "Policies":
        - /url: https://www.ebay.com/help/policies/default/ebays-rules-policies?id=4205
    - listitem:
      - link "Affiliates":
        - /url: https://partnernetwork.ebay.com/
    - listitem:
      - link "Help & Contact":
        - /url: https://www.ebay.com/help/home
    - listitem:
      - link "Site Map":
        - /url: https://pages.ebay.com/sitemap.html
  - text: Copyright © 1995-2025 eBay Inc. All Rights Reserved.
  - link "Accessibility":
    - /url: https://www.ebayinc.com/accessibility/
  - text: ","
  - link "User Agreement":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/user-agreement?id=4259
  - text: ","
  - link "Privacy":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/user-privacy-notice-privacy-policy?id=4260
  - text: ","
  - link "Consumer Health Data":
    - /url: https://www.ebayinc.com/company/privacy-center/privacy-notice/consumer-health-data-privacy-policy/
  - text: ","
  - link "Payments Terms of Use":
    - /url: https://pages.ebay.com/payment/2.0/terms.html
  - text: ","
  - link "Cookies":
    - /url: https://www.ebay.com/help/policies/member-behaviour-policies/ebay-cookie-notice?id=4267
  - text: ","
  - link "CA Privacy Notice":
    - /url: https://www.ebayinc.com/company/privacy-center/privacy-notice/state-privacy-disclosures/#california
  - text: ","
  - link "Your Privacy Choices":
    - /url: https://www.ebay.com/adchoice/ccpa
  - text: and
  - link "AdChoice":
    - /url: https://www.ebay.com/adchoice
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test("Register and login", async ({ page }) => {
   4 |   await page.goto("https://www.ebay.com/");
   5 |   await expect(page.getByRole("img", { name: "eBay Home" })).toBeVisible();
   6 |   await expect(page.getByText("register")).toBeVisible();
   7 |   await page.getByRole("link", { name: "register" }).click();
>  8 |   await expect(page.getByText("Create an account")).toBeVisible();
     |                                                     ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   9 |   await page.getByText("Personal").click();
  10 |   await page.getByRole("textbox", { name: "First name" }).fill("Ashwin");
  11 |   await page.getByRole("textbox", { name: "Last name" }).fill("M");
  12 |   await page.getByRole("textbox",{name:"Password"}).fill("Ashwin@123")
  13 |   await page.getByRole("button",{name:"Create personal account"}).click();
  14 |   // await
  15 | });
  16 |
```