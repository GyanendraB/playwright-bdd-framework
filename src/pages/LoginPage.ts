import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigate('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('button[type="submit"]');
  }

  async verifySuccess() {
    await expect(this.page.locator('.alert-success')).toBeVisible();
  }

  async verifyError() {
    await expect(this.page.locator('.alert-danger')).toBeVisible();
  }
}
