import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class UploadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigate('/upload');
  }

  async upload(file: string) {
    await this.page.setInputFiles('#file-upload', file);
  }
}
