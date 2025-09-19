Feature: Page Object Model

    Scenario: Using POM to verify product is displayed
        Given a product is added
        Then the product should appear on the product list