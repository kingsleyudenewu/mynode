var fs = require('fs');
//WHen you have large chunck of request accessing a file reafFile is not ideal for this method thats why we use Stream function
var stream = fs.createReadStream('chat.txt', 'UTF-8');

//We create a variable to access large data in a file in chunks
var data = '';

stream.once('data', function(){
    console.log('Started Reading File');
    console.log('=================================');
});

stream.on('data', function(chunk){
    process.stdout.write('chunk : '+ chunk.length + ' | ');
    data += chunk;
});

stream.on('end', function(){
    console.log('\nFinished Reading File ' + data.length );
    console.log('=================================');
});
