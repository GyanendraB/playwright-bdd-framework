import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../fixtures/world';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../config/config';

let loginPage: LoginPage;

Given('I open the login page', async function (this: CustomWorld) {

  loginPage = new LoginPage(this.page);

  await loginPage.openLoginPage();

});

When('I login with valid credentials', async function () {

  await loginPage.login(config.username, config.password);

});

Then('I should see login success message', async function () {

  await loginPage.verifyLoginSuccess();

});
