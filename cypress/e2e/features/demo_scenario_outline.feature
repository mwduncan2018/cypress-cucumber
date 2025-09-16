Feature: Scenario Outline

    Scenario: Data driven scenario
        Given a "<restaurant>" restaurant
        When an order for "<food>" is placed
        Then a "<person>" receives their order

        Examples:
            | restaurant | food               | person |
            | MCD        | Iced Coffee        | Mike   |
            | WEN        | Bacon Double Stack | Trav   |
            | TXRH       | Steak              | Gail   |