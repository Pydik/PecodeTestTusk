const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  responseTimeout: 40000,
  
  env:{
    superuser: "testtest@gmailcom",
    password: "testtest"
},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        allureWriter(on, config);
        return config;
    },
  },
});
