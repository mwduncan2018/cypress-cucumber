import { WatchListEntry } from "../models/watch-list-entry.model";

class WatchListAddPage {
    private readonly inputManufacturer = '#Manufacturer';
    private readonly inputModel = '#Model';
    private readonly btnAdd = '.form-group input[value=\'Add\']';

    public addEntry(entry: WatchListEntry): Cypress.Chainable<any> {
        return cy.get(this.inputManufacturer).type(entry.manufacturer)
            .get(this.inputModel).type(entry.model)
            .get(this.btnAdd).click();
    }
}

export const watchListAddPage = new WatchListAddPage();