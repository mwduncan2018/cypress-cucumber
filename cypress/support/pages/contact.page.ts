class ContactPage {
  private readonly textSecretMessage = '#secretMessage';
  private readonly linkGitHub = '#github a';
  private readonly listSkills = '#skillList li';

  public verifyGitHubLinkDestinationIs(expectedUrl: string): void {
    cy.get(this.linkGitHub)
      .should('have.attr', 'href', expectedUrl);
  }

  public verifyFooterContainsText(expectedText: string): void {
    cy.get(this.textSecretMessage, { timeout: 10000 })
      .should('contain.text', expectedText);
  }

  public verifySkillIsDisplayed(skill: string): void {
    cy.get(this.listSkills)
      .invoke('text')
      .should('include', skill);
  }
}

export const contactPage = new ContactPage();