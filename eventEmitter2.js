//This event emitter will create a function and inherit from another function using the util.inherit()
var EventEmitter = require('events').EventEmitter;
var util = require('util');

//We create a parent constructor Greeter and use the call() fetch all the methods and properties of the EventEmitter to the parent constructor function Greeter()
function Greeter(greeting){
    //the this in EVentEmitter ensures that Greeter() has all the methods and properties that EventEmitter possesses
    EventEmitter.call(this);
    this.greeting = greeting;
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data){
    console.log(this.greeting+ ' : '+ data);
    this.emit('greet', data);
};

var greeter1 = new Greeter('Kingsley');
greeter1.greet('says hi');

