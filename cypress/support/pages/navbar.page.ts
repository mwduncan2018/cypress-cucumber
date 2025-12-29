class NavbarPage {
    private readonly linkProductList = 'Product List';
    private readonly linkWatchList = 'Watch List';
    private readonly linkContact = 'Contact';

    public goToProductList(): Cypress.Chainable<any> {
        return cy.contains('a', this.linkProductList).click();
    }

    public goToWatchList(): Cypress.Chainable<any> {
        return cy.contains('a', this.linkWatchList).click();
    }

    public goToContact(): Cypress.Chainable<any> {
        return cy.contains('a', this.linkContact).click();
    }
}

export const navbarPage = new NavbarPage();