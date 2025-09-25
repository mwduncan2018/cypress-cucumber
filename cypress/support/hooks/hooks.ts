import { Before, After } from '@badeball/cypress-cucumber-preprocessor';


// Before Each Scenario
Before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.wrap({}).as('context')

  cy.visit('/ProductList')
});


// After Each Scenario
After(() => {
  cy.get<{}>('@context').then((context: {[key: string]: any}) => {

    cy.screenshot();
  })
});