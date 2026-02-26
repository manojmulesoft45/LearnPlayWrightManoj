import { test, expect } from '@playwright/test';

let names = {

  name1:{firstname: "Manoj", lastname: "Kumar1"},
  name2:{firstname: "Raj", lastname: "Kumar2"},
  name3:{firstname: "Ravi", lastname: "Kumar3"}

}

for (let i in names)
{
 console.log(`${names[i].firstname} ${names[i].lastname}`)

}

test('Addemployee `${names[i].firstname}`', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'PIM' }).click();
  await expect(page.getByRole('link', { name: 'Add Employee' })).toBeVisible();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  
  // creating variable to create random chars

  // const random5Chars = () =>
  // Math.random().toString(36).substring(2, 7);

  await page.getByRole('textbox', { name: 'First Name' }).fill(`${names[i].firstname}`);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(`${names[i].lastname}`);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});