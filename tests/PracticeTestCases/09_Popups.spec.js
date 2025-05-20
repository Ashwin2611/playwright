import { test, expect } from "@playwright/test";

test("PopUps Demo Playwrite", async ({ page }) => {

  //Create a dialog handler that will check the message text and press Yes/No
  page.on("dialog", async (dialog) => {
    if (dialog.message().includes("clear your cart")) {
      console.log(`clicking "OK" to ${dialog.message()}`);
      await dialog.accept();
    } else {
      await dialog.dismiss();
    }
  });

  // add something to cart
  await page.goto("https://web-scraping.dev/product/1");
  await page.click(".add-to-cart");

  // Add something to cart
  await page.goto("https://web-scraping.dev/cart");
  await page.waitForSelector(".cart-full .cart-item");
  await page.click("(//button[contains(text(),'Clear')])[2]");

  //verify that cart is clear
  const cartItem = await page.$(".cart-item .cart-title");
  console.log(`item in cart: ${cartItem}`); //should be null
});
