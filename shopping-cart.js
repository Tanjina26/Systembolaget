let assert = require('assert')
let app = require('./app.js');

module.exports = class ShoppingCart {
	
	constructor(){
		this.thingsToBuy = [];
	}

	add(product, quantity){
		//should we sheck that the product is an instanceof Product ? 
		this.thingsToBuy.push({
			product: product,
			quantity: quantity
		});
	}

	findProductInCart(product){
		for(let i = 0; i < this.thingsToBuy.length; i++){
			if(this.thingsToBuy[i].product === product){
				return i;
			}
		}
		return -1;
	}

	changeQuantity(product, newQuantity){

		let index = this.findProductInCart(product);

		assert(index >= 0,"Cant change the quantity of a product not in the cart");

		this.thingsToBuy[index].quantity = newQuantity;
	}

	remove(product){
		let index = this.findProductInCart(product);

		assert(index >= 0,"Cant change the quantity of a product not in the cart");

		//remove all items from the cart
		this.thingsToBuy.splice(index, 1);

	}

	removeAllItems(){
		this.thingsToBuy = []
	}

	sum(){
		//how much does everething costs, would we like a line sum as well?

		//loop through thingsToBuy
		//get the price of each product and multiply with the quantity
		//gives us a line sum)
		// add a line sums into a total sum
	}
}