Feature: Remaining UI route coverage part 2
  @ui @remaining
  Scenario: Validate remaining UI routes part 2
    Given I open the remaining UI routes:
      | route |
      | /dynamic-id |
      | /dynamic-loading |
      | /entry-ad |
      | /exit-intent |
      | /feedback |
      | /flaky-test |
      | /floating-menu |
      | /forgot-password |
      | /form-validation |
      | /geolocation |
      | /google-tracking-events |
      | /horizontal-slider |
      | /hovers |
      | /http-headers |
      | /iframe |
      | /infinite-scroll |
      | /inputs |
      | /javascript-error |
      | /jqueryui |
      | /jqueryui/menu |
      | /js-dialogs |
      | /key-presses |
      | /large |
      | /locators |
      | /mocha-chai-sinon-player |
      | /mochawesome-reports |
    Then all remaining UI routes should load successfully
