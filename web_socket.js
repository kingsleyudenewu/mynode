var webSocketServer = require('ws').Server;
var wss = new webSocketServer({port:3000});

//websocket has a connection listner using the on()
wss.on('connection', function(ws){
    ws.send('Welcome to cyber chat');
});