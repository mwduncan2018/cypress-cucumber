import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given("a {string} restaurant", (restaurant) => {
    cy.get('@context').then((context) => {
        (context as {[key: string]: any})['restaurant'] = restaurant
    })
});

When("an order for {string} is placed", (food) => {
    cy.get('@context').then((context) => {
        (context as {[key: string]: any})['food'] = food
    })
});

Then("a {string} receives their order", (person) => {
    cy.get('@context').then((context) => {
        (context as {[key: string]: any})['person'] = person
    })
});