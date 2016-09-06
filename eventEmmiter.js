var events = require('events');
//Note that the event emitter is constructor
var emitter = new events.EventEmitter();
//The on() is a listner for the EventEmitter
emitter.on('customEvent', function(message, status){
    console.log(`${status} : ${message}`);
});

//The EventEmitter has an emit function to write values to a listner
emitter.emit('customEvent', 'Hello World', 200);