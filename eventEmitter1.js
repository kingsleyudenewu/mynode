var Person = require('./Person');

var kingsley = new Person('Kingsley Udenewu');
var ben = new Person('Ben Franklin');

//Since kingsley inherits from EventEmitters we can listen for custom events
kingsley.on('speak', function (said) {
    console.log(this.name +' : '+ said);
});

ben.on('speak', function(said){
    console.log(this.name +' -> '+ said);
});

//Whenever EventEmitter emits a event it waits for an on() to display it
kingsley.emit('speak', 'Welcome to my custom speak event');
ben.emit('speak', 'Always smiling');