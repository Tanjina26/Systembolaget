	Feature: Early age check
		As a user of Systembolagets online shop
		In order to not waste my time
		I want to be warned at an early stage
		If I am too young to be able to buy alcoholic beverages in the shop

			Scenario: As a user of Systembolaget online shop over 20
				Given that the customers age is over 20
				When the user visit Systembolagets online shop 
				Then a module asks if customer under or over 20
				And customer has to verify to get to the main page
				Then the user should be able to countinue to the site
			

			Scenario: As a user of Systembolaget online shop under 20 
				Given that the customers age is under 20
				When the user visit Systembolagets online shop
				Then a module asks if customer under or over 20
				And customer has to verify to get to the main page
				Then customer get to another site where there is information about the age limit
				



