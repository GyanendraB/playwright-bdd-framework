import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicTablePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigate('/dynamic_loading/2');
  }
}
