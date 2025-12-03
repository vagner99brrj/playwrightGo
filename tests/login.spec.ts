import { test, expect } from '@playwright/test';

test('teste de inicialização: deve carregar a página principal do Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});