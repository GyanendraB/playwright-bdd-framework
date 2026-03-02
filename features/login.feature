Feature: Login functionality

  Scenario: Successful login
    Given user navigates to login page
    When user logs in with valid credentials
    Then login should be successful
