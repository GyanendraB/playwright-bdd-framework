import { Given, When, Then } from '@cucumber/cucumber';
import { ElementsPage } from '../pages/ElementsPage';
import { CustomWorld } from '../fixtures/world';
import { expect } from '@playwright/test';

let elementsPage: ElementsPage;

Given('user navigates to add remove page', async function (this: CustomWorld) {
  elementsPage = new ElementsPage(this.page);
  await elementsPage.open();
});

When('user adds an element', async function () {
  await elementsPage.add();
});

Then('element should appear', async function (this: CustomWorld) {
  await expect(this.page.locator('.added-manually')).toBeVisible();
});

When('user removes the element', async function (this: CustomWorld) {
  await this.page.locator('.added-manually').click();
});

Then('element should disappear', async function (this: CustomWorld) {
  await expect(this.page.locator('.added-manually')).toHaveCount(0);
});
