import { When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../fixtures/world';

let loginPage: LoginPage;

When(
  'user logs in with username {string} and password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    loginPage = new LoginPage(this.page);
    await loginPage.login(username, password);
  }
);

Then('error message should be displayed', async function () {
  await loginPage.verifyError();
});
