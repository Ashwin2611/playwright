import { test, expect } from "@playwright/test";

test("Upload Files Test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .locator("#singleFileInput")
    .setInputFiles("uploadFiles/index.html");
  await page.getByRole("button", { name: "Upload Single File" }).click();
  await expect(page.locator("#singleFileStatus")).toContainText("index.html");

  await page
    .locator("#multipleFilesInput")
    .setInputFiles("uploadFiles/index.html", "uploadFiles/index2.html");
  await page.getByRole("button", { name: "Upload Multiple Files" }).click();

  await expect(page.locator("#multipleFilesStatus")).toContainText(
    "Multiple files selected:"
  );
  await expect(page.locator("#multipleFilesStatus")).toContainText(
    "index.html"
  );
  await page.waitForTimeout(3000)
//   await expect(page.locator("#multipleFilesStatus")).toContainText(
//     "index2.html"
//   );

  await page.waitForTimeout(5000);
  await page.close();
});
