import { expect, Locator, Page } from '@playwright/test';

export class DragDropPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async dragTo(source: string, target: string): Promise<void> {
    const sourceElement: Locator = this.page.locator(source);
    const targetElement: Locator = this.page.locator(target);
    await sourceElement.dragTo(targetElement);
  }

  async expectInsideTarget(target: string, movedItemText: string): Promise<void> {
    await expect(this.page.locator(target)).toContainText(movedItemText);
  }
}
