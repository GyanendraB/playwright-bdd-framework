Feature: Login

  Scenario: User logs in with valid credentials
    Given I navigate to the login page
    When I enter valid username and password
    And I click the login button
    Then I should be redirected to the dashboard
