var fs = require('fs');
//To read content on a file node file system readFile is used to read contents in a file Asynchronously likewise for reading a directory you use readdir.
var content = fs.readFile('./file.txt', 'UTF-8',  function(err, msg){
    if(err) throw err;
    console.log(msg);
});

console.log('Reading a file system');