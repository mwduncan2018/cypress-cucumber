const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const cypressOnFix = require("cypress-on-fix");

module.exports = defineConfig({
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
        reportDir: "cypress/results",
        charts: true,
        reportPageTitle: "My Test Report",
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        videoOnFailOnly: true,
    },
    defaultCommandTimeout: 30000,
    video: true,

    e2e: {
        baseUrl: 'http://localhost:5096', // For local execution
        //baseUrl: 'http://host.docker.internal:5096', // For Docker

        injectDocumentDomain: false,
        screenshotOnRunFailure: true,
        specPattern: "cypress/features/**/*.feature",
        fixturesFolder: "cypress/support/fixtures",
        supportFile: "cypress/support/commands/commands.ts",

        async setupNodeEvents(on, config) {
            const onFixed = cypressOnFix(on);
            require("cypress-mochawesome-reporter/plugin")(onFixed);
            await addCucumberPreprocessorPlugin(onFixed, config);
            onFixed(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
            onFixed(
                "before:browser:launch", (browser, launchOptions) => {
                    if (browser.name === "chrome" && browser.isHeadless) {
                        launchOptions.args.push("--window-size=1400,1200");
                    }
                    return launchOptions;
                }
            );

            return config;
        }
    }
});