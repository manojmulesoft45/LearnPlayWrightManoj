
import {test,expect} from "@playwright/test" ;
import { TIMEOUT } from "node:dns";

test('test', async ({ page }) => {

    //Accessing URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

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

    //clcik on the add
    
    await page.locator("//button[contains(.,'Add')]").click()

    // adding emploment status

    await page.locator("//span[normalize-space(text())='More']/following::input").fill('UMA')

    // click on save
    
    await page.locator("button[type='submit']").click()
















});