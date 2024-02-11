Feature: Customer Details Validation

  Validate the customer details

      Scenario: Verify the customer fields on user detail pannel
      
        Given the user clicks View Details Button
        Then the user sees the different fields available on the user detail pannel
      
      Scenario: Verify Customer Details - Name, Email and Phone displayed on user detail pannel

        Given the user sees the email and phone on the left side of the pannel
        When the user clicks View Details Button
        Then the user validates the customer details on the user detail pannel

      Scenario: Verify Customer Additional info displayed on user detail pannel

        Given  the user click the last user
        Then assert