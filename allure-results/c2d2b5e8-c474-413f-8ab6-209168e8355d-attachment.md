# Test info

- Name: Register and login
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\05_OpenCartLogin.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByText('Create an account')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('Create an account')

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\05_OpenCartLogin.spec.js:8:53
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