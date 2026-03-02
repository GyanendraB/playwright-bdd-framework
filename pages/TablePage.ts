import { expect, Locator, Page } from '@playwright/test';

export class TablePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly tableRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[type="search"], input[placeholder*="Search"]');
    this.tableRows = page.locator('table tbody tr');
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async search(term: string): Promise<void> {
    await this.searchInput.fill(term);
  }

  async expectAtLeastOneRow(): Promise<void> {
    await expect(this.tableRows.first()).toBeVisible();
  }
}
