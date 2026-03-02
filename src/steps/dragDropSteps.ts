import { Given, When, Then } from '@cucumber/cucumber';
import { DragDropPage } from '../pages/DragDropPage';
import { CustomWorld } from '../fixtures/world';
import { expect } from '@playwright/test';

let dragPage: DragDropPage;

Given('user navigates to drag drop page', async function (this: CustomWorld) {
  dragPage = new DragDropPage(this.page);
  await dragPage.open();
});

When('user drags element A to B', async function () {
  await dragPage.drag();
});

Then('elements should be swapped', async function (this: CustomWorld) {
  await expect(this.page.locator('#column-a header')).toContainText('B');
});
