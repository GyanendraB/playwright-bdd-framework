import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { config } from '../config/config';

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async openHomePage() {
    await this.navigate(config.baseUrl);
  }

}
