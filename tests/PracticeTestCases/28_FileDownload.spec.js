import { test, expect } from "@playwright/test";
const fs = require("fs");
test.describe("Demonstration of file download", () => {
  test("Download file", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    test.setTimeout(8000);
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.locator("//a[normalize-space()='some-file.txt']").click(),
    ]);
    const suggestedFilename =download.suggestedFilename();
    const filename="download/"+suggestedFilename;
    await download.saveAs(filename)
    expect(fs.existsSync(filename)).toBeTruthy();
  });
});
