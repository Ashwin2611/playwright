# Test info

- Name: Upload File Practice
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\30_UploadFilePractice.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('#file-upload')
Expected string: "sample.txt"
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('#file-upload')

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\30_UploadFilePractice.spec.js:7:48
```

# Page snapshot

```yaml
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "File Uploaded!" [level=3]
- text: sample.txt
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
   1 | import {test,expect} from "@playwright/test"
   2 |
   3 | test("Upload File Practice",async({page})=>{
   4 |     await page.goto("https://the-internet.herokuapp.com/upload")
   5 |     await page.locator("#file-upload").setInputFiles("uploadFiles/sample.txt")
   6 |     await page.locator("#file-submit").click();
>  7 |     await expect(page.locator("#file-upload")).toContainText("sample.txt");
     |                                                ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
   8 |
   9 | })
  10 |
  11 | test("Upload File Practice wconnect",async({page})=>{
  12 |     await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd")
  13 |     await page.locator("#upload").setInputFiles("uploadFiles/SS.png")
  14 |     await page.locator("//button[@type='submit']").click();
  15 |     await expect(page.locator("#filename")).toContainText("SS.png");
  16 |     
  17 | })
```