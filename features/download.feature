Feature: File download
 @download
  Scenario: Download file
    Given user navigates to download page
    When user downloads a file
    Then file should be downloaded
