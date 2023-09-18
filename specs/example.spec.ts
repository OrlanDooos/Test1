import { test } from '@playwright/test';
import { MainPage } from '../page_objects/main.page';

test('Open hotline.ua, search item, check min and max prices', async ({ page }) => {
  const mainPage = new MainPage(page);
  await test.step('Open hotline', async () => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await mainPage.searchItem('Зарядна станція BLUETTI EB3A Portable Power Station (PB930784)');
  });
});
