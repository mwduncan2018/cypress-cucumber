import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('a number {int}', (myVar: string) => {
    cy.get('@context').then((context) => {
        (context as {[key: string]: any})['myVar'] = myVar
        cy.log(myVar)
    })
});

When('a number is logged', () => {
    cy.get('@context').then((context) => {
        cy.log((context as {[key: string]: any})['myVar'])
    })
})

Then('a number is logged again', () => {    
    cy.get('@context').then((context) => {
        cy.log((context as {[key: string]: any})['myVar'])
    })
})