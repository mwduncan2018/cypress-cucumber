import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I log A', () => {
  cy.log('Logging A')
});

When('I log B', () => {
  cy.log('Logging B')
});

Then('I log C', () => {
  cy.log('Logging C')
});