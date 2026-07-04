// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: false,

  retries: 0,

  reporter: [
    ['html'],
  ],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php',

    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',
  },
});