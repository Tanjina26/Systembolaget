Feature: As a user of Systembolagets online shop
	In order to buy beverages
	I want to be able to add a certain quantity of a beverage to my shopping cart

	Scenario: Add a beverage in a shopping cart
		Given that I'm in Systembolaget
		When I have decided what I want to buy
		And I have decided how much of a certain beverage I want
		Then I add a bevarege in a cart

	Scenario: Empty a shopping cart
		Given that I'm in Systembolaget
		And my shopping cart has some baverage inside
		When I remove everything from my cart
		Then My cart is empty

	Scenario: Remove a beverage from a cart
		Given that I'm in Systembolaget
		And I have two bevareges in a cart
		When I changed my mind and remove one of them from the cart
		Then now I have only one beverage in a cart

	Scenario Outline: See a total price of all items in the cart
		Given that I'm in Systembolaget
		When my shopping cart has <amount> of product
		Then I want to see a total price for all bottles

		Examples:
		| amount |
		|   0    |
		|   5    |
		|   25   |

	Scenario: Find an item in a cart
		Given that I have two beverages in a cart
		When I want to see if an item in a cart
		Then I get the information if bottle is in the cart or not