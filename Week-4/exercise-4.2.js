//parent
var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

//Req: Create the class Teacher
var Teacher = function () {};

//Make teacher a child of person
//Object.setPrototypeOf(Teacher, Person); // why this is not working? question
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

//teach function in subclass
Teacher.prototype.teach = function (subject) {
  this.subject = subject;
  return this.name + " is now teaching " + this.subject;
};

//new teacher obj
var him = new Teacher();
him.initialize("Praveen", 42);

console.log(him.teach("Inheritance"));

//new teacher obj 2
var him = new Teacher();
him.initialize("Mohan", 24);

console.log(him.teach("History"));
