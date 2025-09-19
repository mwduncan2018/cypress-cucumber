import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { navbarPage } from '../pages/NavbarPage';
import { productListPage } from '../pages/ProductListPage';
import { Product } from '../models/Product';
import { WatchListEntry } from '../models/WatchListEntry';
import { productAddPage } from '../pages/ProductAddPage';

Given('a product is added', () => {
    cy.get<{}>('@context').then((context) => {
        cy.fixture<Product[]>('product-test-data.json').then((productTestData) => {
            cy.get('#doesNotExist').should('have.length', 2);
            navbarPage.goToProductList();
            productListPage.addNewProduct();
            productAddPage.addProduct(productTestData[0]);
        });
    });
});

Then('the product should appear on the product list', () => {
    cy.get<{}>('@context').then((context) => {
        cy.fixture<Product[]>('product-test-data.json').then((productTestData) => {
            navbarPage.goToProductList();
            productListPage.verifyProductIsDisplayed(productTestData[0]);
        });
    });
});