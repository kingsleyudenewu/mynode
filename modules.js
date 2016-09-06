var request = require('request');
var socketio = require('socket.io');
var fs = require('fs');
var http = require('http');

var handler = function(req, res){
    fs.readFile(__dirname + '/index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        else{
            res.writeHead(200);
            res.end(data);
        }
    });
};

var app = http.createServer(handler);
var io =  socketio.listen(app);

io.sockets.on('connection', function(socket){
    setInterval(function(){
        var timestamp = Date.now();
        console.log('Emmitted: '+ timestamp);
        socket.emit('timer ', timestamp);
    }, 2000);
    socket.on('submit', function(data){
        console.log('Submitted: '+ data);
    });
});

app.listen(8080);
console.log('Server running ');

/*request('http://google.com', function(err, response, body){
    if(!err && response.statusCode == 200) console.log(body);
});*/