//Here we are going to use ECMA-Script6, event emitter and inherit methods here
'use strict';
var EventEmitter = require('events');

class Greeter extends EventEmitter{
    //Here we create a constructor
    constructor(greeting){
        //the super here is used to call all the properties and methods that belongs to EventEmiter
        super();
        this.greeting = greeting;
    }

    greet(data){
        console.log(this.greeting+ ' : '+ data);
        this.emit('greet', data);
    };
}

var greeter1 = new Greeter('Hello world');
greeter1.on('greet', function(data){
    console.log('Someone greeted: '+ data);
});

greeter1.greet('Kingsley');
console.log();