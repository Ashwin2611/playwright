import {test,expect} from "@playwright/test"

test("Assertions Test",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register")
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page).toHaveTitle("nopCommerce demo store. Register")
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();
    await expect(page.getByRole('button',{name:'Search'})).toBeEnabled();
    await expect(page.locator('#Newsletter')).toBeChecked();
    await expect(page.locator('#register-button')).toHaveAttribute('name','register-button')
    await expect(page.getByText('Your Password')).toHaveText('Your Password')
    await expect(page.getByText('Your Password')).toContainText('Password')

    const val=page.locator("#Company")
    val.fill("Ashwin")
    await expect(val).toHaveValue("Ashwin")

    const count1=page.locator('a')
    await expect(count1).toHaveCount(62)

    const count=await page.$$('a')
    expect(count.length).toBe(62)

    await page.waitForTimeout(2000)
    await page.close();
})
