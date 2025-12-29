import { Product } from "../models/product.model";

class ProductAddPage {
    private readonly inputManufacturer = '#Manufacturer';
    private readonly inputModel = '#Model';
    private readonly inputPrice = '#Price';
    private readonly inputNumberInStock = '#NumberInStock';
    private readonly btnAdd = '.form-group input[value=\'Add\']';

    public addProduct(product: Product): Cypress.Chainable<any> {
        return cy.get(this.inputManufacturer).type(product.manufacturer)
            .get(this.inputModel).type(product.model)
            .get(this.inputPrice).type(product.price.toString())
            .get(this.inputNumberInStock).type(product.numberInStock.toString())
            .get(this.btnAdd).click();
    }
}

export const productAddPage = new ProductAddPage();