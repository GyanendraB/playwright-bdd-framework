import dotenv from 'dotenv';
import path from 'path';

const env = process.env.ENV || 'qa';

const envFile = path.resolve(`src/config/env/${env}.env`);

dotenv.config({ path: envFile });

export const config = {
  baseUrl: process.env.BASE_URL!,
  // Prefer explicit test vars to avoid colliding with the OS `USERNAME` on Windows
  username: process.env.TEST_USERNAME || process.env.USERNAME!,
  password: process.env.TEST_PASSWORD || process.env.PASSWORD!,
  browser: process.env.BROWSER || 'chromium'
};