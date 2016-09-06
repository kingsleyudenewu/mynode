var fs = require('fs');

var text = '' +
    'Creating new content to insert' +
    '=================================================' +
    'This is a new content i am inserting and its going to be about my new language i am going to learn ECMA Script6 followed by the mean stack' +
    '====================================================';
fs.writeFile('file1.txt', text.trim(), function(err, content){
    console.log('FIle created');
});
