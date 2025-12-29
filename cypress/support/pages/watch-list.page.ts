import { WatchListEntry } from "../models/watch-list-entry.model";

class WatchListPage {
    private readonly btnAddNewEntry = 'a:contains("Add To Watch List")';
    private readonly tableRows = 'tbody tr';
    private readonly tableManufacturer = 'td:nth-child(1)';
    private readonly tableModel = 'td:nth-child(2)';
    private readonly tableEdit = 'td:nth-child(3) a:nth-child(1)';
    private readonly tableDetails = 'td:nth-child(3) a:nth-child(2)';
    private readonly tableDelete = 'td:nth-child(3) a:nth-child(3)';

    public addNewEntry(): Cypress.Chainable<any> {
        return cy.get(this.btnAddNewEntry).click();
    }

    public edit(entry: WatchListEntry): Cypress.Chainable<any> {
        return this.getWatchListRow(entry).find(this.tableEdit).click();
    }

    public details(entry: WatchListEntry): Cypress.Chainable<any> {
        return this.getWatchListRow(entry).find(this.tableDetails).click();
    }

    public delete(entry: WatchListEntry): Cypress.Chainable<any> {
        return this.getWatchListRow(entry).find(this.tableDelete).click();
    }

    public verifyEntryIsDisplayed(entry: WatchListEntry): Cypress.Chainable<any> {
        return this.getWatchListRow(entry).should('be.visible');
    }

    public verifyEntryIsNotDisplayed(entry: WatchListEntry): Cypress.Chainable<any> {
        return cy.contains(this.tableManufacturer, entry.manufacturer).should('not.exist');
    }

    private getWatchListRow(entry: WatchListEntry): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.tableRows)
        .filter((index, row) => {
            const manufacturerElement = Cypress.$(row).find(this.tableManufacturer);
            const modelElement = Cypress.$(row).find(this.tableModel);
            return manufacturerElement.text().trim() === entry.manufacturer &&
                modelElement.text().trim() === entry.model;
        })
        .first();
    }
}
export const watchListPage = new WatchListPage();