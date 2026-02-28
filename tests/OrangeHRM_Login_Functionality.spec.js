import { test, expect } from '@playwright/test';
test.use({
  viewport: { width: 700, height: 700 }
});

import logincredentials from "../testData/credentials.json"

test('login with valid credentials', async ({ page }) => {

  
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logincredentials.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(logincredentials.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('invalid credentials', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logincredentials.wrongusername);
  await page.getByRole('textbox', { name: 'Password' }).fill(logincredentials.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('invalid Username & valid password', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logincredentials.wrongusername);
  await page.getByRole('textbox', { name: 'Password' }).fill(logincredentials.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('valid username & invalid password', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logincredentials.wrongusername);
  await page.getByRole('textbox', { name: 'Password' }).fill(logincredentials.wrongpassword);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({timeout:3000});
});