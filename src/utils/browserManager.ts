import { chromium, firefox, webkit, Browser } from '@playwright/test';

export class BrowserManager {

  static async launchBrowser(browser: string): Promise<Browser> {

    const browserType = process.env.BROWSER || 'chromium';

    switch (browserType) {
      case 'firefox':
        return await firefox.launch({ headless: process.env.HEAD !== 'true' });

      case 'webkit':
        return await webkit.launch({ headless: process.env.HEAD !== 'true' });

      default:
        return await chromium.launch({ headless: process.env.HEAD !== 'true' });
    }
  }
}
