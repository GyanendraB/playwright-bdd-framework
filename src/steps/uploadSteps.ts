import { Given, When, Then } from '@cucumber/cucumber';
import { UploadPage } from '../pages/UploadPage';
import { CustomWorld } from '../fixtures/world';
import { expect } from '@playwright/test';
import path from 'path';

let uploadPage: UploadPage;

Given('user navigates to upload page', async function (this: CustomWorld) {
  uploadPage = new UploadPage(this.page);
  await uploadPage.open();
});

When('user uploads file {string}', async function (fileName: string) {
  const filePath = path.resolve(`test-data/${fileName}`);
  await uploadPage.upload(filePath);
  await this.page.click('#fileSubmit');
});

Then('upload success message should appear', async function (this: CustomWorld) {
  await expect(this.page.locator('#uploaded-files')).toBeVisible();
});
