Feature: Drag and drop

  Scenario: Drag element A to B
    Given user navigates to drag drop page
    When user drags element A to B
    Then elements should be swapped
