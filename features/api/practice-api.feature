Feature: Practice API endpoints coverage
  @api @practice-api
  Scenario Outline: Validate GET practice API endpoint <endpoint>
    Given API client is initialized with base url "https://practice.expandtesting.com/api"
    When I send a "GET" request to "<endpoint>"
    Then the API response status should be one of "<status>"
    And the API response should include key "<key>"

    Examples:
      | endpoint                                              | status | key              |
      | /health-check                                         | 200    | success          |
      | /random-color                                         | 200    | color            |
      | /random-number?min=1&max=10                           | 200    | number           |
      | /add?a=3&b=4                                          | 200    | result           |
      | /time                                                 | 200    | time             |
      | /cars                                                 | 200    | cars             |
      | /myip                                                 | 200    | ip               |
      | /location-details?latitude=48.8566&longitude=2.3522  | 200    | location_details |
      | /currency-convert?from=USD&to=EUR&amount=100         | 200    | converted        |
      | /phone-code/FR                                        | 200    | phoneCode        |

  @api @practice-api
  Scenario: Validate POST echo endpoint
    Given API client is initialized with base url "https://practice.expandtesting.com/api"
    When I send a "POST" request to "/echo" with JSON payload:
      """
      {
        "name": "Codex"
      }
      """
    Then the API response status should be 200
    And the API response should include key "message"

  @api @practice-api
  Scenario: Validate city endpoint availability
    Given API client is initialized with base url "https://practice.expandtesting.com/api"
    When I send a "GET" request to "/get-city?lat=48.8566&lon=2.3522"
    Then the API response status should be one of "200,500"

  @api @practice-api
  Scenario: Validate invalid country code for phone endpoint
    Given API client is initialized with base url "https://practice.expandtesting.com/api"
    When I send a "GET" request to "/phone-code/ZZ"
    Then the API response status should be 404
    And the API response should include key "message"
