Feature: Create age-check
	As a user of Systembolagets online shop In order to not waste my time I want to be warned at an early stage If I am too young to be able to buy alcoholic beverages in the shop

	Scenario: A person has the right age to buy alcohol
		Given that a person is of legal age to buy alcohol
		When the person enter the onlinestore
		Then an alert age-check appears to click yes or no button if you are of legal age
		And the person click yes to enter the site

	Scenario: A person has not the right age to buy alcohol
		Given that a person is not at legal age to buy alcohol
		When the person enter the onlinestores website
		Then an alert age-check pops-up to click yes or no if you are ligit to buy
		And the person click no and can not enter the site