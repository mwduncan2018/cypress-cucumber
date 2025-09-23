import { Product } from '../models/product.model';

class ProductListPage {
    private readonly btnAddNewProduct = 'a:contains("Add New Product")';
    private readonly btnFuzzyMatching = '#fuzzFuzz';
    private readonly tableRows = 'tbody tr';
    private readonly tableManufacturer = 'td:nth-child(2)';
    private readonly tableModel = 'td:nth-child(3)';
    private readonly tableEdit = 'td:nth-child(6) a:nth-child(1)';
    private readonly tableDetails = 'td:nth-child(6) a:nth-child(2)';
    private readonly tableDelete = 'td:nth-child(6) a:nth-child(3)';
    private readonly tableMatch = 'td:nth-child(1) input';
    private readonly tableFuzzyMatch = 'td:nth-child(7) input';

    public addNewProduct(): void {
        cy.get(this.btnAddNewProduct).click();
    }

    public enableStandardMatching(): void {
        cy.get(this.btnFuzzyMatching).then(($button) => {
            if ($button.text().includes('Disable')) {
                cy.wrap($button).click();
            }
        });
    }

    public enableFuzzyMatching(): void {
        cy.get(this.btnFuzzyMatching).then(($button) => {
            if (!$button.text().includes('Disable')) {
                cy.wrap($button).click();
            }
        });
    }

    public edit(product: Product): void {
        this.getProductRow(product).find(this.tableEdit).click();
    }

    public details(product: Product): void {
        this.getProductRow(product).find(this.tableDetails).click();
    }

    public delete(product: Product): void {
        this.getProductRow(product).find(this.tableDelete).click();
    }

    public verifyProductIsDisplayed(product: Product): void {
        this.getProductRow(product).should('be.visible');
    }

    public verifyProductIsNotDisplayed(product: Product): void {
        cy.get(this.tableRows).contains(product.manufacturer).should('not.exist');
    }

    public verifyProductIsAMatch(product: Product): void {
        this.getProductRow(product).find(this.tableMatch).should('be.checked');
    }

    public verifyProductIsNotAMatch(product: Product): void {
        this.getProductRow(product).find(this.tableMatch).should('not.be.checked');
    }

    public verifyProductIsAFuzzyMatch(product: Product): void {
        this.getProductRow(product).find(this.tableFuzzyMatch).should('be.checked');
    }

    public verifyProductIsNotAFuzzyMatch(product: Product): void {
        this.getProductRow(product).find(this.tableFuzzyMatch).should('not.be.checked');
    }
    
    private getProductRow(product: Product): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.tableRows)
        .filter((index, row) => {
            const manufacturerElement = Cypress.$(row).find(this.tableManufacturer);
            const modelElement = Cypress.$(row).find(this.tableModel);
            return manufacturerElement.text().trim() === product.manufacturer &&
                modelElement.text().trim() === product.model;
        })
        .first();
    }
}

export const productListPage = new ProductListPage();