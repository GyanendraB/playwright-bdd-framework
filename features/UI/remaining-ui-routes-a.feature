Feature: Remaining UI route coverage part 1
  @ui @remaining
  Scenario: Validate remaining UI routes part 1
    Given I open the remaining UI routes:
      | route |
      | /about |
      | /abtest |
      | /allure-reports |
      | /assertions/should-be |
      | /assertions/should-contain |
      | /assertions/should-equal |
      | /assertions/should-exist |
      | /assertions/should-have |
      | /assertions/should-include |
      | /assertions/should-match |
      | /autocomplete |
      | /bmi |
      | /bookstore |
      | /broken-images |
      | /cars |
      | /challenging-dom |
      | /checkboxes |
      | /color-wheel |
      | /console-logs |
      | /contact |
      | /context-menu |
      | /cookie-alert |
      | /disappearing-elements |
      | /drag-and-drop-circles |
      | /dynamic-content |
      | /dynamic-controls |
    Then all remaining UI routes should load successfully
