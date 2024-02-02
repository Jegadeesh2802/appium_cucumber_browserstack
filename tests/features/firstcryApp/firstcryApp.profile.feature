@Sample
Feature: User should set the profile details

  Scenario Outline: User added child profile details

    Given User submit the child name
    Then User submit the profile details
  

      Examples:
      | child name |
      | Jegadeesh  |
      


