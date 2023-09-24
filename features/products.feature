Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario Outline: Add product to cart
	Given Open the products page
	When Add the product "<product>" to cart
	Then Assert product amount in cart equals "<amount>"
	And Assert product "<product>" in cart
	And Assert subtotal in cart equals "<price>"
	Examples:
	  | product                       | amount | price |
	  | Cropped Stay Groovy off white | 1      | 10.90 |
	  | Blue T-Shirt                  | 1      | 9.00  |

  Scenario Outline: Size filtering
	Given Open the products page
	When Filter size "<size>" on products page
	Then Assert filtered product count equals "<productsCount>"
	Examples:
	  | size | productsCount |
	  | XS   | 1             |
	  | S    | 2             |
	  | M    | 1             |
	  | ML   | 2             |
	  | L    | 10            |
	  | XL   | 10            |
	  | XXL  | 4             |
