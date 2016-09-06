var fs = require('fs');
//To read data in a file or folder Sync you use readdirSyn for Async use readdir
fs.readdir('./node_modules', function(err, files){
    if(err) throw err;
    console.log(files);
});

console.log('Reading files');