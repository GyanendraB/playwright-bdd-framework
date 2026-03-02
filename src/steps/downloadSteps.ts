import { Given, When, Then } from '@cucumber/cucumber';
import { DownloadPage } from '../pages/DownloadPage';
import { CustomWorld } from '../fixtures/world';
import { expect } from '@playwright/test';

let downloadPage: DownloadPage;

Given('user navigates to download page', async function (this: CustomWorld) {
  downloadPage = new DownloadPage(this.page);
  await downloadPage.open();
});

When('user downloads a file', async function (this: CustomWorld) {
  const downloadPromise = this.page.waitForEvent('download');
  await this.page.locator('a').first().click();
  const download = await downloadPromise;

  this.downloadPath = await download.path();
});

Then('file should be downloaded', async function (this: CustomWorld) {
  expect(this.downloadPath).toBeTruthy();
});
