import { Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.wrap({}).as('context')

  cy.visit('/ProductList')
});

After(() => {
  cy.get('@context').then((context) => {
    Object.entries(context).forEach(([k, v]) => {
        cy.log(`${k}: ${v}`)
    })
  })
});