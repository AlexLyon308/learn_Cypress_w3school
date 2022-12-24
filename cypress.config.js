const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qx1r27',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
};