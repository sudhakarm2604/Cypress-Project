const { defineConfig } = require('cypress');

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 5000,
  requestTimeout: 5000,
  responseTimeout: 5000,
  
  e2e: {
    // Properly specify test file patterns
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    // Setup event handlers
    setupNodeEvents(on, config) {
      // You can add event listeners here if needed
      return config;
    },
    
    // Optional: Set base URL for tests that might use relative URLs
    baseUrl: 'https://rahulshettyacademy.com',
  },
  
  // Increase timeouts for CI environments
  chromeWebSecurity: false,
});
