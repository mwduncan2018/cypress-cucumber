import { WatchListEntry } from "../models/WatchListEntry";

class WatchListEditPage {
    private readonly inputManufacturer = '#Manufacturer';
    private readonly inputModel = '#Model';
    private readonly btnSave = '.form-group input[value=\'Save\']';

    public edit(entry: WatchListEntry): void {
        cy.get(this.inputManufacturer).clear().type(entry.manufacturer);
        cy.get(this.inputModel).clear().type(entry.model);
        cy.get(this.btnSave).click();
    }
}

export const watchListEditPage = new WatchListEditPage();