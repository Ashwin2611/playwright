import { test, expect } from "@playwright/test";

test("Validate Username and password", async ({ page }) => {
  await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

  await page.fill("#login1", "Ashwin");
  await page.getByRole("button", { name: "Log In" }).click();

  page.on("dialog", async (dialog) => {
    console.log("Message: ", dialog.message());
    expect(dialog.message()).toEqual("Please enter a valid user name");
    dialog.accept();
  });

  await page.locator("#login1").clear();

  await page.fill("#password", "ashwin");
  await page.getByRole("button", { name: "Log In" }).click();

  page.on("dialog", async (dialog) => {
    console.log("Message: ", dialog.message());
    expect(dialog.message()).toEqual("Please enter a valid user name");
    dialog.accept();
  });


});
