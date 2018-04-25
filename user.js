let assert = require('assert');

module.exports = class User {
	constructor(username, password){

	assert(
      typeof username === 'string' && username !== '',
      'The username must be a non-empty string!'
    );

    assert(
    	typeof password === 'string' && password !== '',
    	'The password must be a non-empty string'
    );

		this.username = username;
		this.password = password;

	}


}

module.exports = class Member extends User {
	constructor(username,password,email,age){
		super(username, password);
		this.email = email;
		this.age = age;

	assert(
		typeof age === number,
		'Type in a valid age' 
		);

	assert(
		age <= 20,
		'You are underage. You are not allowed to register.'
		);

	assert(
		typeof email === 'string' && email !== '',
		'Please enter an email address.'
		);

	function validateEmail() {
  	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	if (re.test(email)== false){
  		alert('invalid email address');
  		return false;
  	}
  	else{
  	return true;}
	}

	
}

register (){
	console.log(Member +" is now registered.");
}

let Kalle = new Member(kalle123,password123,kalle@gmail.com,35)

Kalle.register();
