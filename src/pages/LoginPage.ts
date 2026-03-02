import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { config } from '../config/config';

export class LoginPage extends BasePage {

  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.successMessage = page.locator('.alert-success');
  }

  async openLoginPage() {
    await this.navigate(`${config.baseUrl}login`);
  }

  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.successMessage).toBeVisible();
  }
}
