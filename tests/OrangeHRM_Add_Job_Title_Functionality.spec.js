import { test, expect } from '@playwright/test';


test.use({
  viewport: { width: 700, height: 700 }
});
const Jobname = {

   jobtitles1 : "QA77",
   jobtitles2 : "QA88",
   jobtitles3 : "QA99"

}

for ( let status in Jobname )
{
 
  console.log(Jobname[status])

  
  test(`Job title ${Jobname[status]}`, async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  
  // // create random 5 chars

  // const random5Chars = () =>
  //   Math.random().toString(36).substring(2, 7);

  await page.getByRole('textbox').nth(1).fill(`${Jobname[status]}`);
  console.log(Jobname[i])
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});
  
}


