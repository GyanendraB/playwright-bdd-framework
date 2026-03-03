import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ElementsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigate('/add-remove-elements/');
  }

  async add() {
    await this.page.getByRole('button', { name: 'Add Element' }).click();
  }
}
