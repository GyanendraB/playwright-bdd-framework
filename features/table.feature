Feature: Web table

  Scenario: Verify data in a dynamic table
    Given I navigate to the table page
    When I search for "John"
    Then I should see at least one matching table row
