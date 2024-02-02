@Sample
Feature: User should set the profile details

  Scenario Outline: User added profile details

    Given User submit the child name
    Then User submit the profile details
  


      Examples:
      | username               | password |
      | jegadeeshkit@gmail.com | 12345678 |
      


