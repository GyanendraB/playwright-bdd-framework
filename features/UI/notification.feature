Feature: Notification message

  Scenario: Trigger notification
    Given user navigates to notification page
    When user clicks notification button
    Then notification should appear
