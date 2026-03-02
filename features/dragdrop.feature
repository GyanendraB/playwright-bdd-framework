Feature: Drag and drop

  Scenario: Move an item by drag and drop
    Given I navigate to the drag and drop page
    When I drag item A to drop zone B
    Then item A should appear inside drop zone B
