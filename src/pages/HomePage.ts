import { Page } from '@playwright/test';
;
import { config } from '../config/config';
import { BasePage } from './basePage';

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async openHomePage() {
    await this.navigate(config.baseUrl);
  }

}
