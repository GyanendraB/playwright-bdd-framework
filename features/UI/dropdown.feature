Feature: Dropdown selection

  Scenario: Select dropdown option
    Given user navigates to dropdown page
    When user selects option "Option 1"
    Then selected option should be "Option 1"
