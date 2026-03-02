import { Page, Locator } from '@playwright/test';
import { config } from '../config/config';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    const fullUrl = url.startsWith('http') ? url : `${config.baseUrl}${url}`;
    await this.page.goto(fullUrl);
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, text: string) {
    await locator.fill(text);
  }
}
