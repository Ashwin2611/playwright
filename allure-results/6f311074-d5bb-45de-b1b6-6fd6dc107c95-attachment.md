# Test info

- Name: Upload File Practice jquery
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\30_UploadFilePractice.spec.js:18:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//i[@class=\'glyphicon glyphicon-upload\']') resolved to 2 elements:
    1) <i class="glyphicon glyphicon-upload"></i> aka getByRole('button', { name: ' Start upload' })
    2) <i class="glyphicon glyphicon-upload"></i> aka getByRole('button', { name: ' Start', exact: true })

Call log:
  - waiting for locator('//i[@class=\'glyphicon glyphicon-upload\']')

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\30_UploadFilePractice.spec.js:21:68
```

# Page snapshot

```yaml
- list:
  - listitem:
    - link "Project":
      - /url: https://github.com/blueimp/jQuery-File-Upload
  - listitem:
    - link "Demo":
      - /url: "#"
  - listitem:
    - link "Wiki":
      - /url: https://github.com/blueimp/jQuery-File-Upload/wiki
  - listitem:
    - link "Author":
      - /url: https://blueimp.net
- heading "jQuery File Upload Demo" [level=1]
- blockquote:
  - paragraph: File Upload widget with multiple file selection, drag&drop support, progress bars, validation and preview images, audio and video for jQuery. Supports cross-domain, chunked and resumable file uploads and client-side image resizing. Works with any server-side platform (PHP, Python, Ruby on Rails, Java, Node.js, Go etc.) that supports standard HTML form file uploads.
- text: + Add files...
- button "Choose File"
- button " Start upload"
- button " Cancel upload"
- button " Delete selected"
- checkbox
- progressbar
- paragraph: sample.pdf
- strong: File type not allowed
- paragraph: 0.00 KB
- progressbar
- button " Start" [disabled]
- button " Cancel"
- paragraph
- heading "Pintura" [level=3]:
  - link "Pintura":
    - /url: https://pqina.nl/pintura/?aff=DZedB
    - img "Pintura"
- paragraph:
  - link "Pintura Image Editor":
    - /url: https://pqina.nl/pintura/?aff=DZedB
  - text: integrates smoothly with
  - link "jQuery File Upload":
    - /url: https://github.com/blueimp/jQuery-File-Upload
  - text: and creates a super fast image editing experience for your users.
- list:
  - listitem: Five Minute Install
  - listitem: Set Crop Masks and Guides
  - listitem: Define Aspect Ratio Options
  - listitem: Rotate, Resize, and Flip Images
  - listitem: Add Markup and Annotations
  - listitem: Color Adjustment Controls
  - listitem: Apply Filter Effects
- paragraph:
  - link "Learn more":
    - /url: https://pqina.nl/pintura/?aff=DZedB
- heading "Demo Notes" [level=3]
- list:
  - listitem:
    - text: The maximum file size for uploads in this demo is
    - strong: 999 KB
    - text: (default file size is unlimited).
  - listitem:
    - text: Only image files (
    - strong: JPG, GIF, PNG
    - text: ) are allowed in this demo (by default there is no file type restriction).
  - listitem:
    - text: Uploaded files will be deleted automatically after
    - strong: 5 minutes or less
    - text: (demo files are stored in memory).
  - listitem:
    - text: You can
    - strong: drag & drop
    - text: files from your desktop on this webpage (see
    - link "Browser support":
      - /url: https://github.com/blueimp/jQuery-File-Upload/wiki/Browser-support
    - text: ).
  - listitem:
    - text: Please refer to the
    - link "project website":
      - /url: https://github.com/blueimp/jQuery-File-Upload
    - text: and
    - link "documentation":
      - /url: https://github.com/blueimp/jQuery-File-Upload/wiki
    - text: for more information.
  - listitem:
    - text: Built with the
    - link "Bootstrap":
      - /url: https://getbootstrap.com/
    - text: CSS framework and Icons from
    - link "Glyphicons":
      - /url: https://glyphicons.com/
    - text: .
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
  15 |     await expect(page.locator("//*[@id='ImageList']/img")).toBeVisible();
  16 | })
  17 |
  18 | test("Upload File Practice jquery",async({page})=>{
  19 |     await page.goto("http://blueimp.github.io/jQuery-File-Upload/")
  20 |     await page.locator("//input[@name='files[]']").setInputFiles("uploadFiles/sample.pdf")
> 21 |     await page.locator("//i[@class='glyphicon glyphicon-upload']").click();
     |                                                                    ^ Error: locator.click: Error: strict mode violation: locator('//i[@class=\'glyphicon glyphicon-upload\']') resolved to 2 elements:
  22 |     await page.waitForTimeout(5000)
  23 |     await expect(page.locator("//a[normalize-space()='Screenshot (2).png']")).toBeVisible();
  24 | })
```