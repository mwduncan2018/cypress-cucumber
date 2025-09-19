import { Product } from '../models/Product';

class ProductEditPage {
    private readonly inputManufacturer = '#Manufacturer';
    private readonly inputModel = '#Model';
    private readonly inputPrice = '#Price';
    private readonly inputNumberInStock = '#NumberInStock';
    private readonly btnSave = '.form-group input[value=\'Save\']';

    public edit(product: Product): void {
        cy.get(this.inputManufacturer).clear().type(product.manufacturer);
        cy.get(this.inputModel).clear().type(product.model);
        cy.get(this.inputPrice).clear().type(product.price.toString());
        cy.get(this.inputNumberInStock).clear().type(product.numberInStock.toString());
        cy.get(this.btnSave).click();
    }
}

export const productEditPage = new ProductEditPage();