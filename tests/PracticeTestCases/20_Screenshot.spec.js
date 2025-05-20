import { test } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.screenshot({ path: "screenshots/" + Date.now() + "Homepage.png" });
});

test("Full page screenshot", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.screenshot({
    path: "screenshots/" + Date.now() + "FullHomepage.png",
    fullPage: true,
  });
});

test("Element Screenshot",async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]").screenshot({path:"screenshots/" + Date.now() + "Element.png"})
})

