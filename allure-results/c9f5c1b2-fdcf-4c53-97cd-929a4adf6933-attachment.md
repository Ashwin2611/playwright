# Test info

- Name: Upload File Practice wconnect
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\30_UploadFilePractice.spec.js:11:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('//*[@id=\'ImageList\']')
Expected: visible
Received: hidden
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('//*[@id=\'ImageList\']')
    9 × locator resolved to <div id="ImageList">…</div>
      - unexpected value "hidden"

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\30_UploadFilePractice.spec.js:15:56
```

# Page snapshot

```yaml
- link "West Wind Web Connection":
  - /url: /wconnect/
  - img
  - text: West Wind Web Connection
- navigation:
  - link " Docs":
    - /url: http://west-wind.com/webconnection/docs/
  - link " Home":
    - /url: /wconnect/
- text:  File Upload Sample
- link " Samples":
  - /url: /wconnect/
- link " Image Carousel Sample":
  - /url: UppyAndCarousel.wwd
- link " Server Code":
  - /url: showcode.wwd
- link " Script Code":
  - /url: showfileastext.wwd?file=fileupload.wwd
- link "Refresh":
  - /url: ""
- img
- heading "Standard HTML Form Upload" [level=3]
- paragraph:
  - text: This example uses a classic HTML server form submission to upload one or multiple selected image files to the server. It uses the new
  - code: Request.MultipartFiles()
  - text: function to retrieve a collection of files on the server.
- text:  Select images
- button "Choose File"
- button " Upload..."
- heading "Ajax File Upload" [level=3]
- paragraph:
  - text: This example uses plain AJAX and HTML5 to asynchronously upload one or more image files using script code to capture the file stream of the selected files and posting them to the server using jQuery's
  - code: .ajax()
  - text: method. Provides a generically reusable function to handle the upload.
- text:  Upload Images
- button "Choose File"
- heading "Uppy UI" [level=3]
- paragraph: This example uses the third party uppy uploader and UI component to upload images using an interactive UI. Files are uploaded asynchronously and the UI provides some progress information.
- button " Uppy Uploader Popup UI"
- contentinfo:
  - link:
    - /url: https://west-wind.com/
    - img
  - text: © Your Company, 2025
- navigation:
  - text:  Main Menu
  - link " Home":
    - /url: /wconnect/
  - link " Sub Link":
    - /url: "#"
  - link " Sub Link 2":
    - /url: "#"
  - link " Sign in":
    - /url: "#"
```

# Test source

```ts
   1 | import {test,expect} from "@playwright/test"
   2 |
   3 | test("Upload File Practice",async({page})=>{
   4 |     await page.goto("https://the-internet.herokuapp.com/upload")
   5 |     await page.locator("#file-upload").setInputFiles("uploadFiles/sample.txt")
   6 |     await page.locator("#file-submit").click();
   7 |     await expect(page.locator("#uploaded-files")).toContainText("sample.txt");
   8 |
   9 | })
  10 |
  11 | test("Upload File Practice wconnect",async({page})=>{
  12 |     await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd")
  13 |     await page.locator("#upload").setInputFiles("uploadFiles/SS.png")
  14 |     await page.locator("//button[@type='submit']").click();
> 15 |     await expect(page.locator("//*[@id='ImageList']")).toBeVisible();
     |                                                        ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  16 | })
  17 |
  18 | test("Upload File Practice jquery",async({page})=>{
  19 |     await page.goto("http://blueimp.github.io/jQuery-File-Upload/")
  20 |     await page.locator("//input[@name='files[]']").setInputFiles("uploadFiles/sample.pdf")
  21 |     await page.locator("//i[@class='glyphicon glyphicon-upload']").click();
  22 |     await page.waitForTimeout(5000)
  23 |     await expect(page.locator("//a[normalize-space()='Screenshot (2).png']")).toBeVisible();
  24 | })
```