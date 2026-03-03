import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class RouteSmokePage extends BasePage {
  async openAndAssertSuccess(path: string): Promise<number> {
    const response = await this.page.goto(path, { waitUntil: 'domcontentloaded' });

    if (!response) {
      throw new Error(`No response received for route: ${path}`);
    }

    const status = response.status();
    expect(status, `Expected successful status for route: ${path}`).toBeLessThan(400);

    return status;
  }
}
