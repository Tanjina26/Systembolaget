let assert = require('assert')
let ShoppingCart = require('./shopping-cart.js');

module.exports = class Person {

	constructor(name,age){

		assert(typeof name == "string" && name !== "","The name must be an empty string!");


		this.name = name;
		this.age = age;
		this.shoppingCart = new ShoppingCart();
	}
}