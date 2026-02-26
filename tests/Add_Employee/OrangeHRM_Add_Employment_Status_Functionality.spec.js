
import {test,expect} from "@playwright/test" ;
import { TIMEOUT } from "node:dns";

let status = {

  status1 : "Active",
  status2 : "InActive", 
  status3 : "Pending"

}

for (let i in status)
{
  console.log(`${status[i]}`)
}


test('creating employment status `${status[i]}` ', async ({ page }) => {

    //Accessing URL
    await page.goto('/web/index.php/auth/login')

   //filling user name
    await page.locator("//input[@placeholder='Username']").fill('Admin')

    //filling password
    await page.locator("//input[@placeholder='Password']").fill('admin123')

    //clicking on submit button
    await page.locator("//button[@type='submit']").click()

   //click on admin button
    await page.locator("//span[text()='Admin']").click()

    //click on job dropdown
    await page.locator("(//i[@with-container='false'])[2]").click()

    //click on emplymnet status
    
    await page.locator("//a[normalize-space(text())='Employment Status']").click()

    //click on the add
    
    await page.locator("//button[contains(.,'Add')]").click()

    // create random chars
    const random5Chars = () =>
    Math.random().toString(36).substring(2, 7);

    // adding emploment status

    await page.locator("//label[normalize-space(text())='Name']/following::input").fill(`${status[i]}`)

    // click on save
    
    await page.locator("button[type='submit']").click()
















});