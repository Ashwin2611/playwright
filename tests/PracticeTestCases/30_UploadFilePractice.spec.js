import { test, expect } from "@playwright/test";

test("Upload File Practice", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");
  await page.locator("#file-upload").setInputFiles("uploadFiles/sample.txt");
  await page.locator("#file-submit").click();
  await expect(page.locator("#uploaded-files")).toContainText("sample.txt");
});

test("Upload File Practice wconnect", async ({ page }) => {
  await page.goto("https://west-wind.com/wconnect/wcscripts/fileupload.wwd");
  await page.locator("#upload").setInputFiles("uploadFiles/SS.png");
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("//*[@id='ImageList']/img")).toBeVisible();
});

test("Upload File Practice jquery", async ({ page }) => {
  await page.goto("http://blueimp.github.io/jQuery-File-Upload/");
  await page
    .locator("//input[@name='files[]']")
    .setInputFiles("uploadFiles/sample.pdf");
  await page.locator("//span[normalize-space()='Start upload']").click();
  await page.waitForTimeout(5000);
  await expect(page.locator("//tbody[@class='file']")).toBeVisible();
});
