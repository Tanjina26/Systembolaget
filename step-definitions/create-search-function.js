let Person = require('../person.js');

module.exports = function(){

	this.Given(/^that a user want to search a beverages by a specific name$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.When(/^the user writes the name of the beverage$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.Then(/^the specific beverage turns up as the result$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.Given(/^that a customer search after all the beer in the online store$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.When(/^the customer writes beer in the searchfield$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.Then(/^all the beers the onlie store have to offer shows$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.Given(/^that a user have a search result of all beer in the online store$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.When(/^the user sort by category$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });

  this.Then(/^the search result list sorts after categorys$/, function (callback) {
         // Write code here that turns the phrase above into concrete actions
         callback();
       });


}