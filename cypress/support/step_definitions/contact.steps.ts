import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as Pages from '../pages';
import * as Models from '../models';


When('the Contact page is viewed', () => {
    cy.get<{}>('@context').then((context) => {
        Pages.navbarPage.goToContact();
    });
});

Then('a GitHub link should be provided', (githubLink: string) => {
    cy.get<{}>('@context').then((context) => {
        Pages.contactPage.verifyGitHubLinkDestinationIs(githubLink);
    });
});

Then('the following skills should be listed', (dataTable: any) => {
    cy.get<{}>('@context').then((context) => {
        const expectedSkills: string[] = dataTable.raw().flat();
        expectedSkills.forEach((skill: string) => {
            Pages.contactPage.verifySkillIsDisplayed(skill);
        })
    });
});

Then('the following text should display in the footer', (footerText: string) => {
    cy.get<{}>('@context').then((context) => {
        Pages.contactPage.verifyFooterContainsText(footerText);
    });
});