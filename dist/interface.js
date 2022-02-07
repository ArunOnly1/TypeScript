"use strict";
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name + ' of age: ' + this.age);
    };
    return User;
}());
var newUser = new User('Arun', 27);
newUser.greet('Helo there, I am ');
