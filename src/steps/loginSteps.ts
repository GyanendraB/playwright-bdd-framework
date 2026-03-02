import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../fixtures/world';
import { config } from '../config/config';

let loginPage: LoginPage;

Given('user navigates to login page', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.open();
});

When('user logs in with valid credentials', async function () {
  await loginPage.login(config.username, config.password);
});

Then('login should be successful', async function () {
  await loginPage.verifySuccess();
});
