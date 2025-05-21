# Test info

- Name: Login
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\03_Locators.spec.js:37:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://practice.expandtesting.com/login", waiting until "load"

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\03_Locators.spec.js:40:16
```

# Page snapshot

```yaml
- paragraph:
  - link "TestifyStack":
    - /url: https://testifystack.com/
  - text: "| Email, SMS, OTP and Webhooks Testing Stack for QA & Dev"
- banner:
  - navigation "Main navigation":
    - link "SUT":
      - /url: /
      - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman."'
      - text: Practice
    - list:
      - listitem:
        - button "Demos"
      - listitem:
        - link "Tools":
          - /url: /#tools
      - listitem:
        - link "Tips":
          - /url: /tips
      - listitem:
        - link "Test Cases":
          - /url: /test-cases
      - listitem:
        - link "API Testing":
          - /url: /notes/api/api-docs/
      - listitem:
        - link "About":
          - /url: /about
    - list
    - link "Free ISTQB Mock Exams":
      - /url: https://istqb.expandtesting.com/
- main:
  - insertion:
    - iframe
  - paragraph:
    - text: Do you enjoy this platform? ❤️
    - link "Buy us a coffee":
      - /url: https://www.buymeacoffee.com/expandtesting
  - navigation "breadcrumb mb-2":
    - list:
      - listitem:
        - link "Home":
          - /url: /
      - listitem: / Login Page
  - heading "Test Login page for Automation Testing Practice" [level=1]
  - paragraph: This Test Login page is designed for automation testing practice. Test various positive and negative login scenarios in a testing environment.
  - paragraph: You can use this login page for practicing with Selenium or other tools like Playwright, Cypress, etc.
  - paragraph:
    - text: Register
    - link "here":
      - /url: /register
    - text: "or Log in to the secure area with these credentials:"
  - list:
    - listitem: "Username: practice"
    - listitem: "Password: SuperSecretPassword!"
  - paragraph
  - text: Username
  - textbox "Username"
  - text: Password
  - textbox "Password"
  - button "Login"
  - heading "How to test the login page?" [level=2]
  - paragraph: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
  - paragraph: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
  - heading "How Does Form-Based Authentication Work?" [level=3]
  - paragraph: "Take a look at this diagram and review the different steps:"
  - img "How Does Form-Based Authentication Work"
  - list:
    - listitem: "Step 1: A client requests access to a protected resource"
    - listitem: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
    - listitem: "Step 3: The client submits the login form to the server"
    - listitem: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
- contentinfo:
  - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4]
  - paragraph:
    - text: "Version: 41a43bee | Copyright"
    - link "Expand Testing":
      - /url: https://expandtesting.com/
    - text: "2025"
- img
- insertion
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