@Sample
Feature: User should search the product and add to cart and verify the product name in cart section

  Scenario Outline: User added the product in shopping cart and verify the product name

    Given User setup the profile of the baby
    When User search the product in search bar
    Then User Added the product to wishlist
    Then User verify the product name in wishlist
    Then User added to product to shopping cart and verify the product name in shopping cart 


      Examples:
      | username               | password |
      | jegadeeshkit@gmail.com | 12345678 |
      


