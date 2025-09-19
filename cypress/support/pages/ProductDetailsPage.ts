import { Product } from '../models/Product';

class ProductDetailsPage {
    private readonly detailManufacturer = 'dl.row dd:nth-child(2)';
    private readonly detailModel = 'dl.row dd:nth-child(4)';
    private readonly detailPrice = 'dl.row dd:nth-child(6)';
    private readonly detailNumberInStock = 'dl.row dd:nth-child(8)';

    public verifyDetailsAreDisplayedFor(product: Product): void {
        cy.get(this.detailManufacturer).should('contain.text', product.manufacturer);
        cy.get(this.detailModel).should('contain.text', product.model);
        cy.get(this.detailPrice).should('contain.text', product.price.toString());
        cy.get(this.detailNumberInStock).should('contain.text', product.numberInStock.toString());
    }
}

export const productDetailsPage = new ProductDetailsPage();