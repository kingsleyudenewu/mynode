var http = require('http');
var url = require ('url');
var path = require('path');
var fs = require('fs');

var mimeTypes = {
    'html' : 'text/html',
    'jpeg' : 'image/jpeg',
    'jpg': 'image/jpg',
    'png': 'image/png',
    'js': 'text/javascript',
    'css': 'text/css'
};

//create a server here
http.createServer(function(){
    var uri = url.parse(req.url).pathname;
    //proceess.cwd(); returns the current working process of a file directory
    var fileName = path.join(process.cwd(),unescape(uri));
    console.log('Loading' + uri);
});