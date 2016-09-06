//This file is being inherited by eventEmitter1.js



//We can call the event emitter constructor directly
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Person = function(name){
    this.name = name;
};

//For the Person object to inherit the EventEmitter we use the util module
util.inherits(Person, EventEmitter);

//module.export is return by the required statement of any file
module.exports = Person;