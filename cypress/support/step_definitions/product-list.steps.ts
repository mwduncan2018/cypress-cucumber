import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as Pages from '../pages';
import * as Models from '../models';


When('products are viewed', () => {
    cy.get<{}>('@context').then((context) => {
        Pages.navbarPage.goToProductList();
    });
});

Then('a product can be created', () => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        cy.fixture<Models.Product[]>('product-test-data.json').then((products) => {
            Pages.navbarPage.goToProductList();
            Pages.productListPage.addNewProduct();
            Pages.productAddPage.addProduct(products[0]);

            context['product'] = products[0];
        });
    });
});

Then('a product can be edited', () => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const product: Models.Product = context['product'];
        product.manufacturer += ' Test Manufacturer';
        product.model += ' Test Model';
        product.price += 1;
        product.numberInStock += 1;

        Pages.navbarPage.goToProductList();
        Pages.productListPage.edit(product);
        Pages.productEditPage.edit(product);
        Pages.productListPage.verifyProductIsDisplayed(product);
    });
});

Then('a product can be read', () => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const product: Models.Product = context['product'];

        Pages.navbarPage.goToProductList();
        Pages.productListPage.details(product);
        Pages.productDetailsPage.verifyDetailsAreDisplayedFor(product);
    });
});

Then('a product can be deleted', () => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const product: Models.Product = context['product'];

        Pages.navbarPage.goToProductList();
        Pages.productListPage.delete(product);
        Pages.productDeletePage.confirmDelete();
        Pages.productListPage.verifyProductIsNotDisplayed(product);
    });
});