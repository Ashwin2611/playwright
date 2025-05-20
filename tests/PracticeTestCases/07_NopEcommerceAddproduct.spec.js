// import { test, expect } from "@playwright/test";

// test("Links and Products test", async ({ page }) => {
//   await page.goto("https://www.demoblaze.com/index.html");

//   const productcount = page.locator("//div[@id='tbodyid']//div/h4/a");
//   console.log("Products", productcount);

//   for (const product of productcount) {
//     const productTitle = await product.textContent();
//     console.log(productTitle);
//     if (productTitle.includes("Sony vaio i5")) {
//       await product.click();
//       break;
//     }
//     await expect(
//       page.getByRole("heading", { name: "Sony vaio i3" })
//     ).toBeVisible();
//     await page.waitForTimeout(2000);
//     await page.close();
//   }
// });

// // test("Link Test",async({page})=>{

// // })
