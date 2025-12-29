import { Product } from '../models/product.model';

class ProductEditPage {
    private readonly inputManufacturer = '#Manufacturer';
    private readonly inputModel = '#Model';
    private readonly inputPrice = '#Price';
    private readonly inputNumberInStock = '#NumberInStock';
    private readonly btnSave = '.form-group input[value=\'Save\']';

    public edit(product: Product): Cypress.Chainable<any> {
        return cy.get(this.inputManufacturer).clear().type(product.manufacturer)
            .get(this.inputModel).clear().type(product.model)
            .get(this.inputPrice).clear().type(product.price.toString())
            .get(this.inputNumberInStock).clear().type(product.numberInStock.toString())
            .get(this.btnSave).click();
    }
}

export const productEditPage = new ProductEditPage();