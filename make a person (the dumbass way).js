/**************************
Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.
**************************/




var Person = function(firstAndLast) {

    this.setFullName(firstAndLast);

    this.setFirstName = function(name) {
        this.firstName = name;
    };

    this.setLastName = function(name) {
        this.lastName = name;
    };

    this.setFullName = function(name) {
        this.fullName = name;
    };

    this.getFirstName = function() {
        return this.firstName;
    };

    this.getLastName = function() {
        return this.lastName;
    };

    this.getFullName = function() {
        return this.fullName;
    };

};


var bob = new Person('Bob Ross');
bob.getFullName();
