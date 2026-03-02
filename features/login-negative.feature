Feature: Login negative scenarios

  Scenario: Invalid login
    Given user navigates to login page
    When user logs in with username "wrong" and password "wrong"
    Then error message should be displayed
