# Test info

- Name: Hidden Dropdown Test
- Location: C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\17_HiddenDropdown.spec.js:3:5

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username')

    at C:\Users\ashwin.murugan\PWGitDemo\playwright\tests\PracticeTestCases\17_HiddenDropdown.spec.js:5:45
```

# Test source

```ts
   1 | import {test,expect} from "@playwright/test"
   2 |
   3 | test("Hidden Dropdown Test",async({page})=>{
   4 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
>  5 |     await page.getByPlaceholder("Username").fill("Admin")
     |                                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
   6 |     await page.getByPlaceholder("Password").fill("admin123")
   7 |     await page.getByRole("button",{name:"Login"}).click();
   8 |     await page.getByText("PIM").click();
   9 |
  10 |     await page.click("(//div[@class='oxd-select-text-input'])[3]")
  11 |
  12 |     await page.waitForSelector("//div[@role='listbox']//span")
  13 |     const options=await page.$$("//div[@role='listbox']//span")
  14 |
  15 |     for(const option of options){
  16 |         const text=await option.textContent();
  17 |         console.log("Text: ",text);
  18 |         if(text.includes("Developer")){
  19 |             await option.click();
  20 |             break;
  21 |         }
  22 |     }
  23 |     await page.waitForTimeout(5000)
  24 |     await page.close();
  25 | })
```