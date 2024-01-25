@Sample
Feature: Browserstack Sample App

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When User add valid credentials to login application
    Then Allow the user location
    Then User logout to the application
 

      Examples:
      


