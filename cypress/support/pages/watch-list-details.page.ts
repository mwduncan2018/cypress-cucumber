import { WatchListEntry } from "../models/watch-list-entry.model";

class WatchListDetailsPage {
    private readonly detailManufacturer = 'dl.row dd:nth-child(2)';
    private readonly detailModel = 'dl.row dd:nth-child(4)';

    public verifyDetailsAreDisplayedFor(entry: WatchListEntry): Cypress.Chainable<any> {
        return cy.get(this.detailManufacturer).should('contain.text', entry.manufacturer)
            .get(this.detailModel).should('contain.text', entry.model);
    }
}

export const watchListDetailsPage = new WatchListDetailsPage();