import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/nyanko111777');
  await page.getByRole('link', { name: 'VS_Code_setting_myao', exact: true }).click();
});