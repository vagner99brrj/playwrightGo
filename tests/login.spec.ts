import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://plataforma.judit.io/sign-in');
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('bruno.santos@judit.io');
  await page.getByRole('textbox', { name: 'Digite sua senha de acesso' }).click();
  await page.getByRole('textbox', { name: 'Digite sua senha de acesso' }).fill('Qwertyui9*');
  await page.getByTestId('make-request-button').click();
  await page.getByRole('textbox').fill('');
  await page.getByRole('textbox').click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox').fill('446285');
  await page.getByRole('button', { name: 'Verificar Código' }).click();
});