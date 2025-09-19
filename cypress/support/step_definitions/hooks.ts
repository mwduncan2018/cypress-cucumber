import { Before, After } from '@badeball/cypress-cucumber-preprocessor';
import { Product } from '../models/Product';

Before(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.fixture<Product[]>('product-test-data.json').then((productTestData) => {
    cy.wrap(productTestData).as('productTestData')
  })
  cy.wrap({}).as('context')

  cy.visit('http://localhost:5096/ProductList')
});

After(() => {
  cy.get('@context').then((context) => {
    Object.entries(context).forEach(([k, v]) => {
        cy.log(`${k}: ${v}`)
    })
  })
});