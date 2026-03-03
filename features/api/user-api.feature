Feature: User API CRUD testing
  @api @crud
  Scenario: Get all users
    Given API client is initialized with base url "https://jsonplaceholder.typicode.com"
    When I fetch all users
    Then the API response status should be 200
    And the API response should be an array
    And the API response array should not be empty

  @api @crud
  Scenario: Read single user
    Given API client is initialized with base url "https://jsonplaceholder.typicode.com"
    When I fetch user by id 1
    Then the API response status should be 200
    And the API response key "id" should equal "1"

  @api @crud
  Scenario: Create user
    Given API client is initialized with base url "https://jsonplaceholder.typicode.com"
    When I create a user with payload:
      """
      {
        "name": "Playwright User",
        "email": "playwright.user@example.com"
      }
      """
    Then the API response status should be 201
    And the API response should include key "id"

  @api @crud
  Scenario: Update user
    Given API client is initialized with base url "https://jsonplaceholder.typicode.com"
    When I update user id 1 with payload:
      """
      {
        "name": "Updated User",
        "email": "updated.user@example.com"
      }
      """
    Then the API response status should be 200
    And the API response key "id" should equal "1"

  @api @crud
  Scenario: Patch user
    Given API client is initialized with base url "https://jsonplaceholder.typicode.com"
    When I patch user id 1 with payload:
      """
      {
        "name": "Patched User"
      }
      """
    Then the API response status should be 200
    And the API response key "id" should equal "1"

  @api @crud
  Scenario: Delete user
    Given API client is initialized with base url "https://jsonplaceholder.typicode.com"
    When I delete user id 1
    Then the API response status should be 200
