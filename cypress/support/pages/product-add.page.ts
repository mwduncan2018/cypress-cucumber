import { Product } from "../models/product.model";

class ProductAddPage {
    private readonly inputManufacturer = '#Manufacturer';
    private readonly inputModel = '#Model';
    private readonly inputPrice = '#Price';
    private readonly inputNumberInStock = '#NumberInStock';
    private readonly btnAdd = '.form-group input[value=\'Add\']';

    public addProduct(product: Product): void {
        cy.get(this.inputManufacturer).type(product.manufacturer);
        cy.get(this.inputModel).type(product.model);
        cy.get(this.inputPrice).type(product.price.toString());
        cy.get(this.inputNumberInStock).type(product.numberInStock.toString());
        cy.get(this.btnAdd).click();
    }
}

export const productAddPage = new ProductAddPage();