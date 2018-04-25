Feature: Delivery time in shoping-cart
	As a user of Systembolagets online shop I want to be able to get correct information of delivery times, change quantity and remove products in the shopping-cart. I want to be able to see if any beverage in my shopping cart is out of stock. And when it will be available again

	Scenario: A user want to see the delivery time of the beverages in the shopping cart
		Given that a user have selected an amout of beverages in to the shopping cart
		When the user click on the shopping cart all the selected beverages appears 
		And a notice if an article is out of stock shows 
		Then the user can see when it will be available again

	Scenario: The beverage in the shopping cart is out of stock
		Given that the beverage is not in stock 
		When a customer wants to add to cart
		Then a warning should be shown if the beverage is not in stock
		And give information of a new date when beverage is in stock

	Scenario: The beverage in the shopping cart is in stock
		Given that a user have selected a beverage in to the shopping cart
		When the user click on the shopping cart to see delivery time
		Then a stock status show that the beverage is in stock 
		And when it will be delivered