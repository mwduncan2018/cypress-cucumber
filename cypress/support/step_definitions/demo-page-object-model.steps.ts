import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { Product } from '../models/product.model';
import { WatchListEntry } from '../models/watch-list-entry.model';

import { contactPage }from '../pages/contact.page';
import { navbarPage } from '../pages/navbar.page';
import { productAddPage } from '../pages/product-add.page';
import { productDeletePage } from '../pages/product-delete.page';
import { productDetailsPage } from '../pages/product-details.page';
import { productEditPage } from '../pages/product-edit.page';
import { productListPage } from '../pages/product-list.page';
import { watchListAddPage } from '../pages/watch-list-add.page';
import { watchListDeletePage } from '../pages/watch-list-delete.page';
import { watchListDetailsPage } from '../pages/watch-list-details.page';
import { watchListEditPage } from '../pages/watch-list-edit.page';
import { watchListPage } from '../pages/watch-list.page';


Given('a product is added', () => {
    cy.get<{}>('@context').then((context) => {
        cy.fixture<Product[]>('product-test-data.json').then((productTestData) => {
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