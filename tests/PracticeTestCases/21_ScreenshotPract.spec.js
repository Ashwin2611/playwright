import {test} from "@playwright/test"

test("Element screenshot",async({page})=>{
    await page.goto("https://www.youtube.com/@testerstalk")
    await page.locator("//img[@class='yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded']").screenshot({path:"screenshots/" + "MainElement.png"})
})

test("Page screenshot",async({page})=>{
    await page.goto("https://www.youtube.com/@testerstalk")
    await page.screenshot({path:"screenshots/" + "MainPage.png"})
})

test("Full Page screenshot",async({page})=>{
    await page.goto("https://www.youtube.com/@testerstalk")
    await page.screenshot({path:"screenshots/" + "FullPage.png",fullPage:true})
})