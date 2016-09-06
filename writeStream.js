var fs = require('fs');

var data = 'Simple Easy Learning';

//Create a writable stream
var writeableStream = fs.createWriteStream('write_stream.txt', 'UTF8');

writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
    console.log(err);
});

console.log("Program Ended");