@Sample
Feature: User Login to the Safewaters App

  Scenario Outline: As a user, I can log into the safewaters application

    Given User opens a safewater application
    When User enter valid credentials to login application
    Then User submit the login

      Examples:
      | username               | password |
      | jegadeeshkit@gmail.com | 12345678 |
      


