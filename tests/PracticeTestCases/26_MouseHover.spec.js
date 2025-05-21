import { test, expect } from "@playwright/test";
test("Mouse Hover", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const button = page.getByRole("button", { name: "Point Me" });
  const mobile = page.getByRole("link", { name: "Mobiles" });
  const laptop = page.getByRole("link", { name: "Laptops" });

  await button.hover();
  await mobile.hover();
  await laptop.hover();
  await laptop.click();

  await page.waitForTimeout(3000);
  await page.close();
});

test("Spicejet Pratice", async ({ page }) => {
  await page.goto("https://www.spicejet.com/");
  const button = page.locator(
    "//div[@class='css-76zvg2 r-jwli3a r-ubezar r-16dba41 r-1pzd9i8'][normalize-space()='SpiceClub']"
  );
  const program = page.getByText("Our Program");

  await button.hover();
  await program.click();

  await page.waitForTimeout(5000);
  await page.bringToFront();
//   await page.goto("https://www.spicejet.com/");
  const addon = page.locator("//div[contains(text(),'Add-ons')]");
  const spiceplus = page.locator("//div[@class='css-76zvg2 r-homxoj r-ubezar'][normalize-space()='SpicePlus']")
  await page.waitForTimeout(2000);
  await addon.hover();
  await spiceplus.click();
});
