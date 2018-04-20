Feature: Add to shopping cart
	As a user of Systembolagets online shop In order to buy beverages I want to be able to add a certain quantity of a beverage to my shopping cart

	Scenario: A user puts one alcoholic beverage in the stores shopping cart
		Given that a user is on a specific beverage article
		When the user click on the buy button for the specific beverage article
		Then the shopping carts amount changes from 0 to 1 article in the shopping cart