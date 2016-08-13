/**************************
Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.
**************************/




var Person = function(firstAndLast) {

    this.fullName = firstAndLast;

};

Person.prototype.getFirstName = function() {
return this.firstName;
};

Person.prototype.getLastName = function() {
return this.lastName;
};

Person.prototype.getFullName = function() {
return this.firstName + " " + this.lastName;
};

Person.prototype.setFirstName = function(name) {
this.firstName = name;
};

Person.prototype.setLastName = function(name) {
this.lastName = name;
};

Person.prototype.setFullName = function(name) {
name = name.split(" ");
this.firstName = name[0];
this.lastName = name[1];
this.fullName = this.firstName + " " + this.lastName;
};

var bob = new Person('Bob Ross');
bob.getFullName();
