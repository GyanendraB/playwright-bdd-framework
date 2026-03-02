Feature: Add remove elements

  Scenario: Add and remove element
    Given user navigates to add remove page
    When user adds an element
    Then element should appear
    When user removes the element
    Then element should disappear
