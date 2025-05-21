import {test,expect} from "@playwright/test"

test("Date Picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const year='2025';
    const month="September";
    const day='29'
    await page.click("#datepicker")
    while(true){
        const currentMonth=await page.locator(".ui-datepicker-month").textContent();
        const currentyear=await page.locator(".ui-datepicker-year").textContent();
        if(currentMonth==month && currentyear==year){
            break;
        }
        await page.locator("[title='Next']").click();

    }
    await page.click(`//a[@class='ui-state-default'][text()=${day}]`);
})
