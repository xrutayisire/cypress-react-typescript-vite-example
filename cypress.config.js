const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4242',
    // Test files
    specPattern: 'cypress/e2e/**/*.spec.ts',
    // Prevent flaky tests
    retries: {
      runMode: 2,
      openMode: 0,
    },
    env: {
      appPath: '/',
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
});
