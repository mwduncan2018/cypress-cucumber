import { WatchListEntry } from "../models/watch-list-entry.model";

class WatchListAddPage {
    private readonly inputManufacturer = '#Manufacturer';
    private readonly inputModel = '#Model';
    private readonly btnAdd = '.form-group input[value=\'Add\']';

    public addEntry(entry: WatchListEntry): void {
        cy.get(this.inputManufacturer).type(entry.manufacturer);
        cy.get(this.inputModel).type(entry.model);
        cy.get(this.btnAdd).click();
    }
}

export const watchListAddPage = new WatchListAddPage();