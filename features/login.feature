Feature: Login functionality

  Scenario: Successful login

    Given I open the login page
    When I login with valid credentials
    Then I should see login success message
