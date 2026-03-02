import { Given, When, Then } from '@cucumber/cucumber';
import { DropdownPage } from '../pages/DropdownPage';
import { CustomWorld } from '../fixtures/world';
import { expect } from '@playwright/test';

let dropdownPage: DropdownPage;

Given('user navigates to dropdown page', async function (this: CustomWorld) {
  dropdownPage = new DropdownPage(this.page);
  await dropdownPage.open();
});

When('user selects option {string}', async function (option: string) {
  await dropdownPage.select(option);
});

Then('selected option should be {string}', async function (this: CustomWorld, option: string) {
  await expect(this.page.locator('#dropdown')).toHaveValue(option.split(' ')[1]);
});
