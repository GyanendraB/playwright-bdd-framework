import { expect, Locator, Page } from '@playwright/test';

export class DropdownPage {
  readonly page: Page;
  readonly dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = page.locator('select');
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async selectOption(valueOrLabel: string): Promise<void> {
    await this.dropdown.selectOption({ label: valueOrLabel });
  }

  async expectSelectedOption(label: string): Promise<void> {
    await expect(this.dropdown).toHaveValue(new RegExp(label, 'i'));
  }
}
