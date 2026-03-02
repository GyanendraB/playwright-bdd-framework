import dotenv from 'dotenv';
import path from 'path';

// If variables already exist (CI), skip dotenv
if (!process.env.BASE_URL) {

  const env = process.env.ENV || 'qa';

  const envFile = path.resolve(`src/config/env/${env}.env`);

  dotenv.config({ path: envFile });
}

export const config = {
  baseUrl: process.env.BASE_URL!,
  username: process.env.USERNAME!,
  password: process.env.PASSWORD!,
  browser: process.env.BROWSER || 'chromium'
};