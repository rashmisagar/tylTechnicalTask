Feature: Purchase Items

  As a standard user on the saucedemo
  I want to be able to sort and add products to the shopping cart to purchase them successfully

  Background: Login to the saucedemo website with a standard user
    Given I am on the saucedemo login page
    And I login with a standard user:
      | username        | password      |
      | standard_user   | secret_sauce  |

  Scenario: Purchase the added products in the shopping cart
    When I am on the Products Page with the title "Products"
    # Sort the products by Price (high to low)
    And I sort the products by "Price (high to low)" in the Products sort list
    Then I see the sorted inventory list

    #  Add products to the cart
    When I click on Add to Cart button of the 2nd costliest item
    Then I should see one item added on the cart icon
    When I click on Add to Cart button of the cheapest item
    Then I should see two items added on the cart icon

    # Purchase the products added to the cart
    When I click on the cart icon
    Then I should be on the Your Cart page with the title "Your Cart"
    And I should see the two items in the cart list
    When I click Checkout
    Then I should see Checkout: Your Information page with the title "Checkout: Your Information"
    When I enter details in the form:
      | firstName  | lastName  |  postalCode  |
      | "sam"      | "smith"   |  "n1"        |

    And I click Continue
    Then I should see Checkout: Overview page with the title "Checkout: Overview"
    And I see the price total in the page
    When I click Finish
    Then I should be on the Finish Page with the message title - "THANK YOU FOR YOUR ORDER"
    And I should see no items on the cart icon badge
