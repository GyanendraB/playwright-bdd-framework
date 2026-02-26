import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { CustomWorld } from '../fixtures/world';
import { BrowserManager } from '../utils/browserManager';
import { config } from '../config/config';

setDefaultTimeout(60_000);

Before(async function (this: CustomWorld) {

  this.browser = await BrowserManager.launchBrowser(config.browser);

  this.context = await this.browser.newContext();

  this.page = await this.context.newPage();

});

After(async function (this: CustomWorld) {

  if (this.page) await this.page.close();
  if (this.context) await this.context.close();
  if (this.browser) await this.browser.close();

});
