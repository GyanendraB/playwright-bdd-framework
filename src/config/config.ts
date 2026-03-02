import dotenv from 'dotenv';
import path from 'path';

// Load env file only if not running in CI
if (!process.env.BASE_URL) {

  const env = process.env.ENV || 'qa';

  const envFile = path.resolve(`src/config/env/${env}.env`);

  dotenv.config({ path: envFile });
}

export const config = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.TEST_USERNAME!,
  password: process.env.TEST_PASSWORD!,
  browser: process.env.BROWSER || 'chromium'
};