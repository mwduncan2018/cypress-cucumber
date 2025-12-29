class ContactPage {
  private readonly textSecretMessage = '#secretMessage';
  private readonly linkGitHub = '#github a';
  private readonly listSkills = '#skillList li';

  public verifyGitHubLinkDestinationIs(expectedUrl: string): Cypress.Chainable<any> {
    return cy.get(this.linkGitHub)
      .should('have.attr', 'href', expectedUrl);
  }

  public verifyFooterContainsText(expectedText: string): Cypress.Chainable<any> {
    return cy.get(this.textSecretMessage, { timeout: 10000 })
      .should('contain.text', expectedText);
  }

  public verifySkillIsDisplayed(skill: string): Cypress.Chainable<any> {
    return cy.get(this.listSkills)
      .invoke('text')
      .should('include', skill);
  }
}

export const contactPage = new ContactPage();