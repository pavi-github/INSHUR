Feature: Get Method

  Validate the response code of GET method

        Scenario: get method suucessful response
        When the user clicks View Details Button
        Then the GET request respone is successful
        
        Scenario: get method - validate the customerlist
        When the user clicks View Details Button
        Then the GET request displays customerList