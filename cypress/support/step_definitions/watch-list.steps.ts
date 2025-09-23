import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as Pages from '../pages';
import * as Models from '../models';


When('entries are viewed', () => {
    Pages.navbarPage.goToWatchList();
});

Then('an entry can be created', () => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        cy.fixture<Models.WatchListEntry[]>('product-test-data.json').then((entries) => {
            Pages.navbarPage.goToWatchList();
            Pages.watchListPage.addNewEntry();
            Pages.watchListAddPage.addEntry(entries[0]);

            context['entry'] = entries[0];
        });
    });
});

Then('an entry can be edited', () => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const entry: Models.WatchListEntry = context['entry'];

        Pages.navbarPage.goToWatchList();
        Pages.watchListPage.edit(entry);

        entry.manufacturer += ' Testing Manufacturer';
        entry.model += ' Testing Model';

        Pages.watchListEditPage.edit(entry);
        Pages.navbarPage.goToWatchList();
        Pages.watchListPage.verifyEntryIsDisplayed(entry);
    });
});

Then('an entry can be read', () => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const entry: Models.WatchListEntry = context['entry'];

        Pages.navbarPage.goToWatchList();
        Pages.watchListPage.details(entry);
        Pages.watchListDetailsPage.verifyDetailsAreDisplayedFor(entry);
    });
});

Then('an entry can be deleted', () => {
    cy.get<{}>('@context').then((context: {[key: string]: any}) => {
        const entry: Models.WatchListEntry = context['entry'];

        Pages.navbarPage.goToWatchList();
        Pages.watchListPage.delete(entry);
        Pages.watchListDeletePage.confirmDelete();
        Pages.navbarPage.goToWatchList();
        Pages.watchListPage.verifyEntryIsNotDisplayed(entry);
    });
});
