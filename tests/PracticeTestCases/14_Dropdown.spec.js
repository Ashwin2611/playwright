import { test, expect, selectors } from "@playwright/test";

test("Test Dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/#");
  await page.selectOption("#country", "France");
  await page.waitForTimeout(2000);
  await page.selectOption("#country", { label: "India" });
  await page.waitForTimeout(2000);
  await page.selectOption("#country", { value: "uk" });
  await page.waitForTimeout(2000);
  await page.selectOption("#country", { index: 6 });
  await page.waitForTimeout(2000);

  const options = await page.$$("//select[@id='country']/option");
  expect(options.length).toBe(10);

  const options2 = page.locator("//select[@id='country']/option");
  expect(options2).toHaveCount(10);
  console.log("Options2", options2);
  let flag = false;
  for (const opt of options) {
    const optcontent = await opt.textContent();
    console.log(optcontent);
    if (optcontent.includes("India")) {
      flag = true;
      break;
    }
  }
  expect(flag).toBeTruthy();
  await page.waitForTimeout(3000);
  await page.close();
});

test.only("Dropdown for facebook", async ({ page }) => {
  await page.goto("https://www.facebook.com/r.php?entry_point=login");

  await page.selectOption("#day", "29");
  await page.waitForTimeout(2000);
  await page.selectOption("#month", { value: "9" });
  await page.waitForTimeout(2000);
  await page.selectOption("#year", "2002");
  await page.waitForTimeout(2000);

  const daycount = await page.$$("//select[@id='day']/option");
  console.log("Day Count: ", daycount.length);

  const monthcount = await page.$$("//select[@id='month']/option");
  console.log("Month Count: ", monthcount.length);

  const yearcount = await page.$$("//select[@id='year']/option");
  console.log("Year Count: ", yearcount.length);


  console.log("Day:")
  for(const day of daycount){
    const daytitle=await day.textContent();
    console.log(daytitle);
  }

  console.log("Month:")
    for(const month of monthcount){
    const monthtitle=await month.textContent();
    console.log(monthtitle);
  }

  console.log("Year:")
    for(const year of yearcount){
    const yeartitle=await year.textContent();
    console.log(yeartitle);
  }
  await page.close();
});
