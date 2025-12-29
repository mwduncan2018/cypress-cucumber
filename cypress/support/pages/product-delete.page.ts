class ProductDeletePage {
  private readonly btnConfirmDelete = 'form input[value=\'Confirm Delete\']';

  public confirmDelete(): Cypress.Chainable<any> {
    return cy.get(this.btnConfirmDelete).click();
  }
}

export const productDeletePage = new ProductDeletePage();