const { test, expect } = require("@playwright/test");

test("Checking Browser Title", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = await page.title();
  console.log("Title", pageTitle);
  await expect(page).toHaveTitle("STORE");
  await page.close();
});

// test("Checking Bowser URL", async ({ page }) => {
//   await page.goto("https://www.hollandandbarrett.com/");
//   const pageURL = page.url();
//   console.log("Page URL is....", pageURL);
//   await expect(page).toHaveURL("https://www.hollandandbarrett.com/");
//   await page.close();
// });

const arr = [
  "https://themeforest.net/",
  "https://demo.opencart.com/",
  "https://www.rediff.com/",
  "https://www.leafground.com/pages/Dropdown.html",
  "https://www.tizag.com/javascriptT/javascriptalert.php",
  "https://www.echoecho.com/htmlforms10.html",
  "https://www.leafground.com/home.html",
  "http://automationpractice.com/index.php",
  "https://login.salesforce.com/?locale=in",
  "http://www.filehosting.org",
  "http://www.bing.com",
  "https://www.freecrm.com/",
  "http://www.half.ebay.com",
  "https://alaskatrips.poweredbygps.com/",
  "http://www.qaclickacademy.com/interview.php",
  "https://app.saucelabs.com/login",
  "https://opensource-demo.orangehrmlive.com/",
  "http://only-testing-blog.blogspot.com/2014/05/form.html",
];

test("Checking URL", async ({ page }) => {
  for (const data of arr) {
    try {
      await page.goto(`${data}`);
      const page_url = page.url();
      console.log("Page URL is ", page_url);
      await expect(page).toHaveURL(`${data}`);
      const page_title = await page.title();
      console.log("Page title is ", page_title);
      await expect(page).toHaveTitle(page_title);
    } catch (error) {
      console.log(error);
    }
    // await page.close();
  }
});
