"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _test = require("@playwright/test");
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
/**
 * See https://playwright.dev/docs/test-configuration.
 */
var _default = exports.default = (0, _test.defineConfig)({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },
  /* Configure projects for major browsers */
  projects: [{
    name: 'chromium',
    use: {
      ..._test.devices['Desktop Chrome']
    }
  }, {
    name: 'firefox',
    use: {
      ..._test.devices['Desktop Firefox']
    }
  }, {
    name: 'webkit',
    use: {
      ..._test.devices['Desktop Safari']
    }
  }

  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  ]

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGVzdCIsInJlcXVpcmUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiZGVmaW5lQ29uZmlnIiwidGVzdERpciIsImZ1bGx5UGFyYWxsZWwiLCJmb3JiaWRPbmx5IiwicHJvY2VzcyIsImVudiIsIkNJIiwicmV0cmllcyIsIndvcmtlcnMiLCJ1bmRlZmluZWQiLCJyZXBvcnRlciIsInVzZSIsInRyYWNlIiwicHJvamVjdHMiLCJuYW1lIiwiZGV2aWNlcyJdLCJzb3VyY2VzIjpbInBsYXl3cmlnaHQuY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZUNvbmZpZywgZGV2aWNlcyB9IGZyb20gJ0BwbGF5d3JpZ2h0L3Rlc3QnO1xuXG4vKipcbiAqIFJlYWQgZW52aXJvbm1lbnQgdmFyaWFibGVzIGZyb20gZmlsZS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3Rkb3RsYS9kb3RlbnZcbiAqL1xuLy8gaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuLy8gaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG4vLyBkb3RlbnYuY29uZmlnKHsgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy5lbnYnKSB9KTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9wbGF5d3JpZ2h0LmRldi9kb2NzL3Rlc3QtY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGVzdERpcjogJy4vdGVzdHMnLFxuICAvKiBSdW4gdGVzdHMgaW4gZmlsZXMgaW4gcGFyYWxsZWwgKi9cbiAgZnVsbHlQYXJhbGxlbDogdHJ1ZSxcbiAgLyogRmFpbCB0aGUgYnVpbGQgb24gQ0kgaWYgeW91IGFjY2lkZW50YWxseSBsZWZ0IHRlc3Qub25seSBpbiB0aGUgc291cmNlIGNvZGUuICovXG4gIGZvcmJpZE9ubHk6ICEhcHJvY2Vzcy5lbnYuQ0ksXG4gIC8qIFJldHJ5IG9uIENJIG9ubHkgKi9cbiAgcmV0cmllczogcHJvY2Vzcy5lbnYuQ0kgPyAyIDogMCxcbiAgLyogT3B0IG91dCBvZiBwYXJhbGxlbCB0ZXN0cyBvbiBDSS4gKi9cbiAgd29ya2VyczogcHJvY2Vzcy5lbnYuQ0kgPyAxIDogdW5kZWZpbmVkLFxuICAvKiBSZXBvcnRlciB0byB1c2UuIFNlZSBodHRwczovL3BsYXl3cmlnaHQuZGV2L2RvY3MvdGVzdC1yZXBvcnRlcnMgKi9cbiAgcmVwb3J0ZXI6ICdodG1sJyxcbiAgLyogU2hhcmVkIHNldHRpbmdzIGZvciBhbGwgdGhlIHByb2plY3RzIGJlbG93LiBTZWUgaHR0cHM6Ly9wbGF5d3JpZ2h0LmRldi9kb2NzL2FwaS9jbGFzcy10ZXN0b3B0aW9ucy4gKi9cbiAgdXNlOiB7XG4gICAgLyogQmFzZSBVUkwgdG8gdXNlIGluIGFjdGlvbnMgbGlrZSBgYXdhaXQgcGFnZS5nb3RvKCcvJylgLiAqL1xuICAgIC8vIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnLFxuXG4gICAgLyogQ29sbGVjdCB0cmFjZSB3aGVuIHJldHJ5aW5nIHRoZSBmYWlsZWQgdGVzdC4gU2VlIGh0dHBzOi8vcGxheXdyaWdodC5kZXYvZG9jcy90cmFjZS12aWV3ZXIgKi9cbiAgICB0cmFjZTogJ29uLWZpcnN0LXJldHJ5JyxcbiAgfSxcblxuICAvKiBDb25maWd1cmUgcHJvamVjdHMgZm9yIG1ham9yIGJyb3dzZXJzICovXG4gIHByb2plY3RzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Nocm9taXVtJyxcbiAgICAgIHVzZTogeyAuLi5kZXZpY2VzWydEZXNrdG9wIENocm9tZSddIH0sXG4gICAgfSxcblxuICAgIHtcbiAgICAgIG5hbWU6ICdmaXJlZm94JyxcbiAgICAgIHVzZTogeyAuLi5kZXZpY2VzWydEZXNrdG9wIEZpcmVmb3gnXSB9LFxuICAgIH0sXG5cbiAgICB7XG4gICAgICBuYW1lOiAnd2Via2l0JyxcbiAgICAgIHVzZTogeyAuLi5kZXZpY2VzWydEZXNrdG9wIFNhZmFyaSddIH0sXG4gICAgfSxcblxuICAgIC8qIFRlc3QgYWdhaW5zdCBtb2JpbGUgdmlld3BvcnRzLiAqL1xuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6ICdNb2JpbGUgQ2hyb21lJyxcbiAgICAvLyAgIHVzZTogeyAuLi5kZXZpY2VzWydQaXhlbCA1J10gfSxcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6ICdNb2JpbGUgU2FmYXJpJyxcbiAgICAvLyAgIHVzZTogeyAuLi5kZXZpY2VzWydpUGhvbmUgMTInXSB9LFxuICAgIC8vIH0sXG5cbiAgICAvKiBUZXN0IGFnYWluc3QgYnJhbmRlZCBicm93c2Vycy4gKi9cbiAgICAvLyB7XG4gICAgLy8gICBuYW1lOiAnTWljcm9zb2Z0IEVkZ2UnLFxuICAgIC8vICAgdXNlOiB7IC4uLmRldmljZXNbJ0Rlc2t0b3AgRWRnZSddLCBjaGFubmVsOiAnbXNlZGdlJyB9LFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgbmFtZTogJ0dvb2dsZSBDaHJvbWUnLFxuICAgIC8vICAgdXNlOiB7IC4uLmRldmljZXNbJ0Rlc2t0b3AgQ2hyb21lJ10sIGNoYW5uZWw6ICdjaHJvbWUnIH0sXG4gICAgLy8gfSxcbiAgXSxcblxuICAvKiBSdW4geW91ciBsb2NhbCBkZXYgc2VydmVyIGJlZm9yZSBzdGFydGluZyB0aGUgdGVzdHMgKi9cbiAgLy8gd2ViU2VydmVyOiB7XG4gIC8vICAgY29tbWFuZDogJ25wbSBydW4gc3RhcnQnLFxuICAvLyAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCcsXG4gIC8vICAgcmV1c2VFeGlzdGluZ1NlcnZlcjogIXByb2Nlc3MuZW52LkNJLFxuICAvLyB9LFxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkEsSUFBQUMsUUFBQSxHQUFBQyxPQUFBLENBQUFDLE9BQUEsR0FHZSxJQUFBQyxrQkFBWSxFQUFDO0VBQzFCQyxPQUFPLEVBQUUsU0FBUztFQUNsQjtFQUNBQyxhQUFhLEVBQUUsSUFBSTtFQUNuQjtFQUNBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRTtFQUM1QjtFQUNBQyxPQUFPLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7RUFDL0I7RUFDQUUsT0FBTyxFQUFFSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxHQUFHLENBQUMsR0FBR0csU0FBUztFQUN2QztFQUNBQyxRQUFRLEVBQUUsTUFBTTtFQUNoQjtFQUNBQyxHQUFHLEVBQUU7SUFDSDtJQUNBOztJQUVBO0lBQ0FDLEtBQUssRUFBRTtFQUNULENBQUM7RUFFRDtFQUNBQyxRQUFRLEVBQUUsQ0FDUjtJQUNFQyxJQUFJLEVBQUUsVUFBVTtJQUNoQkgsR0FBRyxFQUFFO01BQUUsR0FBR0ksYUFBTyxDQUFDLGdCQUFnQjtJQUFFO0VBQ3RDLENBQUMsRUFFRDtJQUNFRCxJQUFJLEVBQUUsU0FBUztJQUNmSCxHQUFHLEVBQUU7TUFBRSxHQUFHSSxhQUFPLENBQUMsaUJBQWlCO0lBQUU7RUFDdkMsQ0FBQyxFQUVEO0lBQ0VELElBQUksRUFBRSxRQUFRO0lBQ2RILEdBQUcsRUFBRTtNQUFFLEdBQUdJLGFBQU8sQ0FBQyxnQkFBZ0I7SUFBRTtFQUN0Qzs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQUE7O0VBR0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0YsQ0FBQyxDQUFDIiwiaWdub3JlTGlzdCI6W119