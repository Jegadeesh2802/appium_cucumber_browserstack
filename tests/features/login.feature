@Sample
Feature: User Login in to the Native App and Logout

  Scenario Outline: As a user, I can log into the native application and logout

    Given I am on the landing page
    When User add valid credentials to login application
    Then Allow the user location
    Then User logout to the application
 

      Examples:
      | username               | password |
      | jegadeeshkit@gmail.com | 12345678 |
      


