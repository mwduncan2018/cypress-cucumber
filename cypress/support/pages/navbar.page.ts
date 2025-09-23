class NavbarPage {
    private readonly linkProductList = 'Product List';
    private readonly linkWatchList = 'Watch List';
    private readonly linkContact = 'Contact';

    public goToProductList(): void {
        cy.contains('a', this.linkProductList).click();
    }

    public goToWatchList(): void {
        cy.contains('a', this.linkWatchList).click();
    }

    public goToContact(): void {
        cy.contains('a', this.linkContact).click();
    }
}

export const navbarPage = new NavbarPage();