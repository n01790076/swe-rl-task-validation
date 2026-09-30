import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: [['list'], ['html']],
  use: { baseURL: 'http://localhost:3000', trace: 'on-first-retry' }
});
