var util = require('util');

function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function(){
    console.log('Hello '+ this.firstname+ ' '+ this.lastname);
}

function Policeman(serial_number){
    //Before Policeman() can inherit Person() we have to use the call() to fetch all the properties of Person() into Policeman(). The this parameter in call() refers to the properties this in Person() that is this.firstname and this.lastname. And also the Person() has
    Person.call(this, 'Kingsley', 'Udenewu');
    this.serial_number = serial_number;
}

util.inherits(Policeman, Person);
var officer = new Policeman('145259');

officer.greet();

