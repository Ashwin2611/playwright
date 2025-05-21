# Test info

- Name: Demonstration of file download >> Download file
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\28_FileDownload.spec.js:4:7

# Error details

```
Error: page.waitForEvent: Test timeout of 5000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\28_FileDownload.spec.js:8:12
```

# Page snapshot

```yaml
- link "Fork me on GitHub":
  - /url: https://github.com/tourdedave/the-internet
  - img "Fork me on GitHub"
- heading "File Downloader" [level=3]
- link "zero_bytes_file.txt":
  - /url: download/zero_bytes_file.txt
- link "test.txt":
  - /url: download/test.txt
- link "sample-zip-file.zip":
  - /url: download/sample-zip-file.zip
- link "example.json":
  - /url: download/example.json
- link "image2.webp":
  - /url: download/image2.webp
- link "f9b3a7b816c2b8d10156b6d234d5ef92a288ce7a91bda5fcdc31d4f774f61c7f.png":
  - /url: download/f9b3a7b816c2b8d10156b6d234d5ef92a288ce7a91bda5fcdc31d4f774f61c7f.png
- link "webdriverIO.png":
  - /url: download/webdriverIO.png
- link "nibesh.pdf":
  - /url: download/nibesh.pdf
- link "LTT_TVM_PTKP.pdf":
  - /url: download/LTT_TVM_PTKP.pdf
- link "dummy.pdf":
  - /url: download/dummy.pdf
- link "some-file.txt":
  - /url: download/some-file.txt
- link "learn.jpg":
  - /url: download/learn.jpg
- link "menu1.pdf":
  - /url: download/menu1.pdf
- link "Adhar Front.jpg":
  - /url: download/Adhar Front.jpg
- link "Screenshot(1).png":
  - /url: download/Screenshot(1).png
- link "Temp.txt":
  - /url: download/Temp.txt
- link "TXT.rtf":
  - /url: download/TXT.rtf
- link "doc.txt":
  - /url: download/doc.txt
- link "Jpeg_with_exif.jpeg":
  - /url: download/Jpeg_with_exif.jpeg
- link "image1.png":
  - /url: download/image1.png
- link "file.json":
  - /url: download/file.json
- link "fakeimage.exe":
  - /url: download/fakeimage.exe
- link "1.txt":
  - /url: download/1.txt
- link "Inspection Schedule Report (4).xls":
  - /url: download/Inspection Schedule Report (4).xls
- link "evil.php":
  - /url: download/evil.php
- link "image1.jpg":
  - /url: download/image1.jpg
- link "random_data.txt":
  - /url: download/random_data.txt
- link "Chapter 2 (About) - v2.docx":
  - /url: download/Chapter 2 (About) - v2.docx
- link "LambdaTest.txt":
  - /url: download/LambdaTest.txt
- link "Sampletest.postman_collection.json":
  - /url: download/Sampletest.postman_collection.json
- link "luminoslogo.png":
  - /url: download/luminoslogo.png
- link "local.py":
  - /url: download/local.py
- link "Credit Card Payment.png":
  - /url: download/Credit Card Payment.png
- separator
- text: Powered by
- link "Elemental Selenium":
  - /url: http://elementalselenium.com/
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | const fs = require("fs");
   3 | test.describe("Demonstration of file download", () => {
   4 |   test("Download file", async ({ page }) => {
   5 |     await page.goto("https://the-internet.herokuapp.com/download");
   6 |     test.setTimeout(5000);
   7 |     const [download] = await Promise.all([
>  8 |       page.waitForEvent("download"),
     |            ^ Error: page.waitForEvent: Test timeout of 5000ms exceeded.
   9 |       page.locator("//a[normalize-space()='some-file.txt']").click(),
  10 |     ]);
  11 |     const suggestedFilename =download.suggestedFilename();
  12 |     const filename="download/"+suggestedFilename;
  13 |     download.saveAs(filename)
  14 |     expect(fs.existsSync(filepath)).toBeTruthy();
  15 |   });
  16 | });
  17 |
```