Feature: Demo Duplicate 03

    Scenario: Simple Scenario
        Given I log A
        When I log B
        Then I log C

    Scenario: Using POM to verify product is displayed
        Given a product is added
        Then the product should appear on the product list

    Scenario: Pass data across step definitions using scenario context
        Given a number 3
        When a number is logged
        Then a number is logged again

    Scenario: Data driven scenario
        Given a "<restaurant>" restaurant
        When an order for "<food>" is placed
        Then a "<person>" receives their order

        Examples:
            | restaurant | food               | person |
            | MCD        | Iced Coffee        | Mike   |
            | WEN        | Bacon Double Stack | Trav   |
            | TXRH       | Steak              | Gail   |