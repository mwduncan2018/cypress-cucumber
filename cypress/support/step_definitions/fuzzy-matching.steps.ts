import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as Pages from '../pages';
import * as Models from '../models';


When('fuzzy matching is enabled', () => {
    Pages.navbarPage.goToProductList();
    Pages.productListPage.enableFuzzyMatching();
});

Then('the product with manufacturer {string} and model {string} is a fuzzy match', (manufacturer: string, model: string) => {
    const product = new Models.Product(manufacturer, model, 0, 0);
    Pages.productListPage.verifyProductIsAFuzzyMatch(product);
});