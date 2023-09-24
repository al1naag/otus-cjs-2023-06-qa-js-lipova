Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system
  
  Scenario: Checkout from the cart
	Given Open the products page
	When Add the product "Cropped Stay Groovy off white" to cart
	And Add the product "Basic Cactus White T-shirt" to cart
	And Open checkout from cart
	And Assert subtotal in checkout equals "24.15"

  Scenario: Checkout can be closed
	Given Open the products page
	When Add the product "Cropped Stay Groovy off white" to cart
	And Add the product "Basic Cactus White T-shirt" to cart
	And Open checkout from cart
	And Close checkout popup

  Scenario: Remove product from the cart
	Given Open the products page
	When Add the product "Cropped Stay Groovy off white" to cart
	And Add the product "Basic Cactus White T-shirt" to cart
	And Remove product "Cropped Stay Groovy off white" from the cart
	Then Assert the product "Cropped Stay Groovy off white" removed from the cart


  Scenario: Close the cart popup
	Given Open the products page
	When Add the product "Cropped Stay Groovy off white" to cart
	And Close the cart popup
	Then Check the cart popup closed

  Scenario: Increase the product amount in the cart
	Given Open the products page
	When Add the product "Skater Black Sweatshirt" to cart
	And Increase the product "Skater Black Sweatshirt" amount to "2"
	Then Assert product amount in cart equals "2"
	And Assert subtotal in cart equals "51.80"

  Scenario: Decrease the product amount in the cart
	Given Open the products page
	When Add the product "Black Tule Oversized" to cart
	And Increase the product "Black Tule Oversized" amount to "2"
	And Decrease the product "Black Tule Oversized" amount to "1"
	Then Assert product amount in cart equals "1"
	And Assert subtotal in cart equals "29.45"


