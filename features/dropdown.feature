Feature: Dropdown selection

  Scenario: Select an option from dropdown
    Given I navigate to the dropdown page
    When I select "Option 2" from the dropdown
    Then "Option 2" should be selected
