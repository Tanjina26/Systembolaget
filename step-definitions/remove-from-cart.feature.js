let myApp = require('../app.js');
let Person = require('../person.js');
let ShoppingCart = require('../shopping-cart.js');

module.exports = function() {
	let user;	
	let beverageAmount1, beverageAmount2, beverageAmount3; 
	let totalAmountBeforeRemoving;
	let productIDRemove1, productIDRemove2; 


	this.Given(/^that I am a registrered user with a legal age$/, function (callback) {
	    user = new Person('Dasha', 27);
        myApp.users.push(user);                 
        callback();	    
	});

	this.Given(/^there are (\d+) bottles of beverage with id (\d+) in my shopping cart$/, function (arg1, arg2, callback) {
        if (arg2/1 == 0){	    	
	    	beverageAmount1 = myApp.products[arg2/1].prisinklmoms * (arg1/1);
	        user.shoppingCart.add(myApp.products[arg2/1], arg1/1);
        }

        if (arg2/1 == 1){	    	
	    	beverageAmount2 = myApp.products[arg2/1].prisinklmoms * (arg1/1);
	        user.shoppingCart.add(myApp.products[arg2/1], arg1/1);
        }

         if (arg2/1 == 2){	    	
	    	beverageAmount3 = myApp.products[arg2/1].prisinklmoms * (arg1/1);
	        user.shoppingCart.add(myApp.products[arg2/1], arg1/1);
	        totalAmountBeforeRemoving = user.shoppingCart.sum();
        }
        //console.log(user.shoppingCart.thingsToBuy);
        callback();
    });

    this.When(/^I click on the button Remove for beverages with id (\d+) and (\d+) in my cart$/, function (arg1, arg2, callback) {
        productIDRemove1 = arg1/1;
        productIDRemove2 = arg2/1;
        user.shoppingCart.remove(myApp.products[productIDRemove1]);
        user.shoppingCart.remove(myApp.products[productIDRemove2]);
        //console.log(user.shoppingCart.thingsToBuy);
        callback();
    });

    this.Then(/^these beverages are removed$/, function (callback) {
    	assert(
    		user.shoppingCart.findProductInCart(myApp.products[productIDRemove1]) == -1,
    		"The beverage with index " + productIDRemove1 + " is still in the cart after removing"
    	);

    	assert(
    		user.shoppingCart.findProductInCart(myApp.products[productIDRemove2]) == -1,
    		"The beverage with index " + productIDRemove2 + " is still in the cart after removing"
    	);
        callback();
    });

    this.Then(/^total ammount in the shopping cart is changed accordingly$/, function (callback) {
        assert(
        	user.shoppingCart.sum() == totalAmountBeforeRemoving - beverageAmount2 - beverageAmount3,
        	"The total ammount after removing from the shopping cart is wrong"
        ); 
        callback();
    });
}