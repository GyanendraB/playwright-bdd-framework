import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class NotificationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigate('/notification_message_rendered');
  }

  async trigger() {
    await this.page.getByRole('link', { name: 'Click here' }).click();
  }
}
