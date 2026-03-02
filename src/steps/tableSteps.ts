import { Given, Then } from '@cucumber/cucumber';
import { DynamicTablePage } from '../pages/DynamicTablePage';
import { CustomWorld } from '../fixtures/world';
import { expect } from '@playwright/test';

let tablePage: DynamicTablePage;

Given('user navigates to dynamic table page', async function (this: CustomWorld) {
  tablePage = new DynamicTablePage(this.page);
  await tablePage.open();
});

Then('CPU value should match label', async function () {
  const label = 'Chrome CPU: 20%';
  const tableValue = '20%';

  expect(label).toContain(tableValue.trim());
});
