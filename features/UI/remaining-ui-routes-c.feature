Feature: Remaining UI route coverage part 3
  @ui @remaining
  Scenario: Validate remaining UI routes part 3
    Given I open the remaining UI routes:
      | route |
      | /my-browser |
      | /my-ip |
      | /notes/api/api-docs/ |
      | /notes/app |
      | /notes/app/login |
      | /otp-login |
      | /radio-buttons |
      | /random-number |
      | /redirector |
      | /register |
      | /scrollbars |
      | /secure-password-checker |
      | /shadowdom |
      | /shifting-content |
      | /slow |
      | /spies-stubs-clocks |
      | /status-codes |
      | /tables |
      | /test-cases |
      | /tips |
      | /tooltips |
      | /tracalorie |
      | /typos |
      | /users/1 |
      | /webpark |
      | /windows |
      | /xpath-css-tester |
    Then all remaining UI routes should load successfully
