# Test info

- Name: Demonstration of file download >> Download file
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\28_FileDownload.spec.js:4:7

# Error details

```
Error: page.goto: net::ERR_EMPTY_RESPONSE at https://the-internet.herokuapp.com/download
Call log:
  - navigating to "https://the-internet.herokuapp.com/download", waiting until "load"

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\28_FileDownload.spec.js:5:16
```

# Page snapshot

```yaml
- heading "This page isn’t working" [level=1]
- paragraph:
  - strong: the-internet.herokuapp.com
  - text: didn’t send any data.
- text: ERR_EMPTY_RESPONSE
- button "Reload"
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 | const fs = require("fs");
   3 | test.describe("Demonstration of file download", () => {
   4 |   test("Download file", async ({ page }) => {
>  5 |     await page.goto("https://the-internet.herokuapp.com/download");
     |                ^ Error: page.goto: net::ERR_EMPTY_RESPONSE at https://the-internet.herokuapp.com/download
   6 |     test.setTimeout(8000);
   7 |     const [download] = await Promise.all([
   8 |       page.waitForEvent("download"),
   9 |       page.locator("//a[normalize-space()='some-file.txt']").click(),
  10 |     ]);
  11 |     const suggestedFilename =download.suggestedFilename();
  12 |     const filename="download/"+suggestedFilename;
  13 |     await download.saveAs(filename)
  14 |     expect(fs.existsSync(filepath)).toBeTruthy();
  15 |   });
  16 | });
  17 |
```