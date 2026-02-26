import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../fixtures/world';
import { HomePage } from '../pages/HomePage';

Given('I open the practice website', async function (this: CustomWorld) {

  const homePage = new HomePage(this.page);

  await homePage.openHomePage();

});
