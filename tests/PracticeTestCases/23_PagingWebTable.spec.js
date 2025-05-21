import { test, expect } from "@playwright/test";

test("Paging Web Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("//table[@id='productTable']");
  const column = page.locator("//table[@id='productTable']//th");
  console.log("No.of Columns: ", await column.count());
  expect(await column.count()).toBe(4);

  const rows = page.locator("//table[@id='productTable']/tbody/tr");
  console.log("No.of rows: ", await rows.count());
  expect(await rows.count()).toBe(5);
  await page.waitForTimeout(3000);
  await page.close();
});

const selectProduct = async (rows, page, text) => {
  const match = rows.filter({ has: page.locator("td"), hasText: text });
  await match.locator("input").check();
  await page.waitForTimeout(2000);
};

test("Filter Value in Paging Web Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = page.locator("//table[@id='productTable']");
  const column = page.locator("//table[@id='productTable']//th");
  console.log("No.of Columns: ", await column.count());
  expect(await column.count()).toBe(4);

  const rows = page.locator("//table[@id='productTable']/tbody/tr");
  console.log("No.of rows: ", await rows.count());
  expect(await rows.count()).toBe(5);
  await page.waitForTimeout(3000);

  const matchText = rows.filter({
    has: page.locator("td"),
    hasText: "Smartwatch",
  });
  await matchText.locator("input").check();
  await page.waitForTimeout(3000);

  await selectProduct(rows, page, "Tablet");
  await selectProduct(rows, page, "Smartphone");
  await selectProduct(rows, page, "Laptop");

  const element =await page.$$("//table[@id='productTable']//td");
//   console.log(element)
//   for (const val of element) {
//     console.log(await val.textContent());
//   }
  for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i)
        const tds = row.locator('td')
        for (let j = 0; j < await tds.count() - 1; j++) {
            console.log(await tds.nth(j).textContent())
        }
    }
    await page.waitForTimeout(5000)
    await page.close()
});
