const { defineConfig } = require("cypress");

module.exports = defineConfig({


  watchForFileChanges: false,

  defaultCommandTimeout: 5000,




  e2e: {
    setupNodeEvents(on, config) {

      specPattern: ["cypress\e2e\practiceTest1.cy.js", "cypress\e2e\practiceTest2.cy.js"]

    },
  },
});
