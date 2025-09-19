import { WatchListEntry } from "../models/WatchListEntry";

class WatchListDetailsPage {
    private readonly detailManufacturer = 'dl.row dd:nth-child(2)';
    private readonly detailModel = 'dl.row dd:nth-child(4)';

    public verifyDetailsAreDisplayedFor(entry: WatchListEntry): void {
        cy.get(this.detailManufacturer).should('contain.text', entry.manufacturer);
        cy.get(this.detailModel).should('contain.text', entry.model);
    }
}

export const watchListDetailsPage = new WatchListDetailsPage();