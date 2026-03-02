Feature: Notification messages

  Scenario: Display success notification
    Given I trigger a success notification
    Then I should see the success notification message
