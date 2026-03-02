import { expect, Locator, Page } from '@playwright/test';

export class UploadPage {
  readonly page: Page;
  readonly fileInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileInput = page.locator('input[type="file"]');
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.fileInput.setInputFiles(filePath);
  }

  async expectUploadSuccess(successLocator: string): Promise<void> {
    await expect(this.page.locator(successLocator)).toBeVisible();
  }
}
