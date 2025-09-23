const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {

    baseUrl: 'http://localhost:5096', // For local execution
    //baseUrl: 'http://host.docker.internal:5096', // For Docker

    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      allureCypress(on);
      return config;
    },
    cucumberJson: {
      generate: true,
      filePrefix: "",
      fileSuffix: ".cucumber",
      outputFolder: "cypress/reports/cucumber-json",
      format: "json",
    },
  },
});