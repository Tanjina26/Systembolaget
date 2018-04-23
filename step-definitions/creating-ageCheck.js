let app = require('../app.js')

module.exports = function(){

let age;
let person;



 this.Given(/^that the customers age is over (\d+)$/, function (arg1, callback) {
 		age = arg1 + 10;
         callback();
       });

 this.When(/^the user visit Systembolagets online shop$/, function (callback) {
         // startsida
         callback();
       });


  this.Then(/^a module asks if customer under or over (\d+)$/, function (arg1, callback) {
  		// check if the modal is displayed
         callback();
     });

  this.Then(/^customer has to verify to get to the main page$/, function (callback) {
         // klickar på alternativet "över 20"
         callback();
     });

  this.Then(/^the user should be able to countinue to the site$/, function (callback) {
         // länkas till systembolagets startsida
         callback();
       });


  this.Then(/^customer get to another site where there is information about the age limit$/, function (callback) {
         //länkas till annan sida med info om åldersgräns
         callback();
      });


	this.Given(/^that the customers age is under (\d+)$/, function (arg1, callback) {
	         age = arg1-10;
	         callback();
	       });







}


