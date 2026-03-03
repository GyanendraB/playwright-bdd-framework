Feature: File upload
  @uploadFile
  Scenario: Upload file successfully
    Given user navigates to upload page
    When user uploads file "test.txt"
    Then upload success message should appear
