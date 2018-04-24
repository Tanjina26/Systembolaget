let app = require('./app.js');
let assert = require('assert');

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

		//remove added quantity from the storehouse:
		product.iLager  = product.iLager - quantity;
	}

	findProductInCart(product){
		for(let i = 0; i < this.thingsToBuy.length; i++){
			if(this.thingsToBuy[i].product.artikelid === product.artikelid){ // det går inte att jämföra två lika objekt om de har två olika adresser
      //if(this.thingsToBuy[i].product === product){ // fel
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

		// console.log("app users " + app.users);
		// console.log("app products " + app.products);	

		let indexInCart = this.findProductInCart(product); //index of the product in the CART
		assert(indexInCart >= 0,"Cant remove a product not in the cart");

		// //return the products on the storehouse ?????????????????????????????????????????????????????
		// //app.products is NOT defined?????????????????????????????
		// let indexInSortiment;  //index of the product in the sortiment (myApp.products)
		// for(let i = 0; i < app.products.length; i++){
		// 	if(app.products[i].artikelid === product.artikelid){
		// 		indexInSortiment = i;
		// 	}
		// }
		// app.products[indexInSortiment].iLager = app.products[indexInSortiment].iLager + this.thingsToBuy[indexInCart].quantity; 
        // ?????????????????????????????????????????????????????????????????????????????????????????????
       

        //return the products on the storehouse:
        product.iLager = product.iLager + this.thingsToBuy[indexInCart].quantity;
		//remove item from the cart
		this.thingsToBuy.splice(indexInCart, 1);

	}

	removeAllItems(){
		//this.thingsToBuy = [];
		// removing with returning the products in the storehouse
		//for (let thing of this.thingsToBuy){
		for (let i = this.thingsToBuy.length - 1; i >= 0; i--){				
			this.remove(this.thingsToBuy[i].product); 
	    }
	}

	sum(){
    // how much does everything cost
    // would we like a line sum as well?

	    let totalAmmount = 0;
	    for (let thing of this.thingsToBuy){      
	      let ammountThing = thing.product.prisinklmoms * thing.quantity;
	      totalAmmount = totalAmmount + ammountThing;
	    }
	    return totalAmmount;     
    // loop through thingsToBuy.
    // get the price of each product and multiply with the quantity
    // (gives us a line sum)
    // add a line sums into a total sum
	}
}