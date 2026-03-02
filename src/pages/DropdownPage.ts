import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigate('/dropdown');
  }

  async select(option: string) {
    await this.page.selectOption('#dropdown', { label: option });
  }
}
