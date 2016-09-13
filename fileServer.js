var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
    console.log(req.method+ ' request for '+ req.url);
    if(req.url === '/'){
        fs.readFile('./public/index.html', 'UTF-8', function(err, html){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
    }
    else if(req.url.match(/.css$/)){
        //This checks if the requested url has an extension of css that it ends with
        var cssPath = path.join(__dirname, 'public', req.url);
        //Create a read stream to read the css file
        var fileStream = fs.createReadStream(cssPath, 'UTF-8');
        res.writeHead(200, {'Content-Type' : 'text/css'});
        fileStream.pipe(res);
    }
    else if(req.url.match(/.jpg$/)){
        //This checks if the requested url has an extension of css that it ends with
        var imgPath = path.join(__dirname, 'public', req.url);
        //Create a read stream to read the css file
        var imageStream = fs.createReadStream(imgPath);
        res.writeHead(200, {'Content-Type' : 'image/jpeg'});
        imageStream.pipe(res);
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 file not found');
    }
}).listen(3000);
console.log('file server ru nning');