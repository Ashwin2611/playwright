import {test,expect} from "@playwright/test"

test("SpiceJet Date Picker",async({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.click("//input[@data-focusvisible-polyfill='true']");
    await page.click("//div[contains(text(),'Ahmedabad')]");
    await page.click("//div[contains(text(),'Wed, 28 May 2025')]")
    const day="29"
    const month="May";
    const year="2025"
    while(true){
        // const currentmonth=await page.locator("")
    }

})