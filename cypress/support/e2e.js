import 'allure-cypress';




// The code below does not work
// Trying to make screenshot appear in Allure report

// Attach screenshots to Allure report on test failure.
// This hook is triggered after each test has finished running.
Cypress.on('test:after:run', (test, runnable) => {
  // Check if the test has failed.
  if (test.state === 'failed') {
    // Check if a screenshot file path exists.
    // The screenshot is automatically taken by Cypress on failure.
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    const screenshotPath = `cypress/screenshots/${Cypress.spec.name}/${screenshotFileName}`;
    
    // Check if the screenshot file exists before trying to attach it.
    // This is a good practice to prevent errors.
    cy.readFile(screenshotPath, 'base64').then((fileContent) => {
      // Use Cypress.Allure.attachment to attach the screenshot to the test.
      Cypress.Allure.attachment('Screenshot on Failure', fileContent, 'image/png');
    }).catch(() => {
      // This catch block handles cases where the screenshot might not exist.
      // For example, if a test fails before a screenshot is taken.
      // You can log a warning or simply do nothing.
      Cypress.log({
        name: 'Allure Warning',
        message: 'Could not find screenshot to attach to Allure report.',
      });
    });
  }
});