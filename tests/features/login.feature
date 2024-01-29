@Sample
Feature: User Login to the Native App and verify the user name and email and Logout

  Scenario Outline: As a user, I can log into the native application and logout

    Given I am on the landing page
    When User add valid credentials to login application
    Then Allow the user location
    Then Verify username and email for logged user
    Then User navigate the course section
   
 

      Examples:
      | username               | password |
      | jegadeeshkit@gmail.com | 12345678 |
      


