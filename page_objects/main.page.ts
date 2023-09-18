import { expect, Locator, Page } from '@playwright/test';
import { delay } from '../utils/helpers';

export class MainPage {
  readonly page: Page;
  readonly itemSearchInput: Locator;
  readonly minPrice: Locator;
  readonly maxPrice: Locator;
  readonly serachButton: Locator;
  readonly languageOptionButton: Locator;
  readonly uaLanguage: Locator;
  readonly ruLanguage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemSearchInput = page.locator('//input[@placeholder="Знайти товар, магазин, бренд"]');
    this.minPrice = page.locator('//span[@class="price"][1]');
    this.maxPrice = page.locator(`//span[@class="price"][2]`);
    this.serachButton = page.locator('//button[@title="Поиск"]');
    this.languageOptionButton = page.locator('//div[@class="lang-button flex middle-xs center-xs header__lang-icon"]');
    this.uaLanguage = page.locator('//div[@class="lang-item"][1]');
    this.ruLanguage = page.locator('//div[@class="lang-item"][2]');
  }

  async searchItem(itemName) {
    await this.itemSearchInput.fill(itemName);
    await this.serachButton.click();
  }

  async checkPrice(minPrice: string, maxPrice: string) {
    expect(this.minPrice).toHaveValue(minPrice);
    expect(this.maxPrice).toHaveValue(maxPrice);
  }
}
