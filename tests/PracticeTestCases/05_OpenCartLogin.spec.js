import { test, expect } from "@playwright/test";

test("Register and login", async ({ page }) => {
  await page.goto("https://www.ebay.com/");
  await expect(page.getByRole("img", { name: "eBay Home" })).toBeVisible();
  await expect(page.getByText("register")).toBeVisible();
  await page.getByRole("link", { name: "register" }).click();
  await expect(page.getByText("Create an account")).toBeVisible();
  await page.getByText("Personal").click();
  await page.getByRole("textbox", { name: "First name" }).fill("Ashwin");
  await page.getByRole("textbox", { name: "Last name" }).fill("M");
  await page.getByRole("textbox",{name:"Password"}).fill("Ashwin@123")
  await page.getByRole("button",{name:"Create personal account"}).click();
  // await
});
