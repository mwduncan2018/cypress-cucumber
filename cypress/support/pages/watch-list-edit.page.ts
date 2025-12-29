import { WatchListEntry } from "../models/watch-list-entry.model";

class WatchListEditPage {
    private readonly inputManufacturer = '#Manufacturer';
    private readonly inputModel = '#Model';
    private readonly btnSave = '.form-group input[value=\'Save\']';

    public edit(entry: WatchListEntry): Cypress.Chainable<any> {
        return cy.get(this.inputManufacturer).clear().type(entry.manufacturer)
            .get(this.inputModel).clear().type(entry.model)
            .get(this.btnSave).click();
    }
}

export const watchListEditPage = new WatchListEditPage();