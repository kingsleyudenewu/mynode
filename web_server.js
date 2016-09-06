var http = require('http');
//The createServer function always have a callback parameter wihich takes in a request and a response
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World');
});
//We need to set the IP address where our response will be calling to.
server.listen(3000);

console.log('Server listning');