//parent
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};


//new teacher obj
var him = new Person();
him.initialize("Praveen", 42);

console.log(him);