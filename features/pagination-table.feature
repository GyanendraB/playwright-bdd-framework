Feature: Pagination table

  Scenario: Navigate pagination
    Given user navigates to pagination table page
    When user navigates to next page
    Then table should update
