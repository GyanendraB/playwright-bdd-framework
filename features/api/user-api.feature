Feature: User API testing

  Scenario: Get all users
    Given API base url is configured
    When I fetch all users
    Then response status should be 200

  Scenario: Create new user
    Given API base url is configured
    When I create a new user
    Then user should be created successfully
