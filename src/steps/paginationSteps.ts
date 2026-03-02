import { Given, When, Then } from '@cucumber/cucumber';
import { PaginationTablePage } from '../pages/PaginationTablePage';
import { CustomWorld } from '../fixtures/world';
import { expect } from '@playwright/test';

let paginationPage: PaginationTablePage;

Given('user navigates to pagination table page', async function (this: CustomWorld) {
  paginationPage = new PaginationTablePage(this.page);
  await paginationPage.open();
});

When('user navigates to next page', async function (this: CustomWorld) {
  await this.page.keyboard.press('PageDown');
});

Then('table should update', async function (this: CustomWorld) {
  await expect(this.page.locator('table')).toBeVisible();
});
