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

  const [download] = await Promise.all([
    this.page.waitForEvent('download'),
    this.page.locator('a[download]').first().click(),
    console.log(await this.page.locator('a[download]').count())
  ]);

  const path = await download.path();
  this.downloadPath = path;

});

Then('file should be downloaded', async function (this: CustomWorld) {
  expect(this.downloadPath).toBeTruthy();
});
