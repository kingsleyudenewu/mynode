//Here we are going to be reading data through streams
var fs = require('fs');
var data = '';

//create a readble stream
var readStream = fs.createReadStream('chat.txt', 'UTF-8');

//Handle stream events
//the data parameter in the on() is a listner that gets data from the stream
readStream.on('data', function(chunk){
    data += chunk;
});

//the end parameter in the on() means the file and been read to the end
readStream.on('end', function(){
    console.log(data);
});

readStream.on('error', function(err){
    throw err;
});