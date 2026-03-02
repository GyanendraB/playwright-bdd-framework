import { Given, When, Then } from '@cucumber/cucumber';
import { NotificationPage } from '../pages/NotificationPage';
import { CustomWorld } from '../fixtures/world';
import { expect } from '@playwright/test';

let notificationPage: NotificationPage;

Given('user navigates to notification page', async function (this: CustomWorld) {
  notificationPage = new NotificationPage(this.page);
  await notificationPage.open();
});

When('user clicks notification button', async function () {
  await notificationPage.trigger();
});

Then('notification should appear', async function (this: CustomWorld) {
  await expect(this.page.locator('#flash')).toBeVisible();
});
