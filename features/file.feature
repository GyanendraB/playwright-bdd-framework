Feature: File upload

  Scenario: Upload a file successfully
    Given I navigate to the upload page
    When I upload a valid file
    Then I should see a file upload success message
