# Test info

- Name: Upload File Practice jquery
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\30_UploadFilePractice.spec.js:17:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('//tbody[@class=\'file\']')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('//tbody[@class=\'file\']')

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\30_UploadFilePractice.spec.js:24:56
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
- paragraph:
  - link "ads via Carbon":
    - /url: https://srv.carbonads.net/ads/click/x/GTND427WCAADC2QLCWYLYKQUCESI65QWCA7ITZ3JCABD5KJLCVBDLKJKC6YDC2JICWSIV27MC6SI653UF6YD42QKC6SIV27YCVYIKK3EHJNCLSIZ
    - img "ads via Carbon"
  - link "Design and Development tips in your inbox. Every weekday.":
    - /url: https://srv.carbonads.net/ads/click/x/GTND427WCAADC2QLCWYLYKQUCESI65QWCA7ITZ3JCABD5KJLCVBDLKJKC6YDC2JICWSIV27MC6SI653UF6YD42QKC6SIV27YCVYIKK3EHJNCLSIZ
  - link "ads via Carbon":
    - /url: http://carbonads.net/?utm_source=blueimpgithubio&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon
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
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test("Upload File Practice", async ({ page }) => {
   4 |   await page.goto("https://the-internet.herokuapp.com/upload");
   5 |   await page.locator("#file-upload").setInputFiles("uploadFiles/sample.txt");
   6 |   await page.locator("#file-submit").click();
   7 |   await expect(page.locator("#uploaded-files")).toContainText("sample.txt");
   8 | });
   9 |
  10 | test("Upload File Practice wconnect", async ({ page }) => {
  11 |   await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
  12 |   await page.locator("#upload").setInputFiles("uploadFiles/SS.png");
  13 |   await page.locator("//button[@type='submit']").click();
  14 |   await expect(page.locator("//*[@id='ImageList']/img")).toBeVisible();
  15 | });
  16 |
  17 | test("Upload File Practice jquery", async ({ page }) => {
  18 |   await page.goto("http://blueimp.github.io/jQuery-File-Upload/");
  19 |   await page
  20 |     .locator("//input[@name='files[]']")
  21 |     .setInputFiles("uploadFiles/sample.pdf");
  22 |   await page.locator("//span[normalize-space()='Start upload']").click();
  23 |   await page.waitForTimeout(5000);
> 24 |   await expect(page.locator("//tbody[@class='file']")).toBeVisible();
     |                                                        ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  25 | });
  26 |
```