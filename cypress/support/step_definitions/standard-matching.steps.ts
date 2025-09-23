import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as Pages from '../pages';
import * as Models from '../models';


Given('a product is added with manufacturer {string} and model {string}', (manufacturer: string, model: string) => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const product: Models.Product = new Models.Product(manufacturer, model, 1, 1);

        Pages.navbarPage.goToProductList();
        Pages.productListPage.addNewProduct();
        Pages.productAddPage.addProduct(product);

        context['product'] = product;
    });
});

Given('an entry is added with manufacturer {string} and model {string}', (manufacturer: string, model: string) => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const entry: Models.WatchListEntry = new Models.WatchListEntry(manufacturer, model);
        
        Pages.navbarPage.goToWatchList();
        Pages.watchListPage.addNewEntry();
        Pages.watchListAddPage.addEntry(entry);

        context['entry'] = entry;
    });
});

When('standard matching is enabled', () => {
    Pages.navbarPage.goToProductList();
    Pages.productListPage.enableStandardMatching();
});

Then('the product with manufacturer {string} and model {string} is not a match', (manufacturer: string, model: string) => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const product: Models.Product = context['product'];

        Pages.navbarPage.goToProductList();
        Pages.productListPage.verifyProductIsNotAMatch(product);
    })
});

Then('the product with manufacturer {string} and model {string} is a standard match', (manufacturer: string, model: string) => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const product: Models.Product = context['product'];

        Pages.navbarPage.goToProductList();
        Pages.productListPage.verifyProductIsAMatch(product);
    })
});

