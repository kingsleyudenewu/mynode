var fs = require('fs');
//to rename a file we use the rename() for Asychronous and renameSync() for Synchronous, to ramove a file you use unlink() to remove a directory you use rmdir()
fs.renameSync('file.txt', 'newFile.txt');
console.log('Txt file renamed already');