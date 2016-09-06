var https = require('https');
var fs = require('fs');

var options = {
  hostname: 'en.wikipedia.org',
    port:443,//When fetching from http link port will be 80 https: 443
    path: '/wiki/Barack_Obama',
    method: 'GET'
};

//https & http has a request() where you pass a parameter to get a response this can be either GET or POST
var req = https.request(options, function(res){
    var responseBody = '';

    console.log('Response for server started');
    console.log('Server status '+ res.statusCode);
    console.log('Response header %j', res.headers);

    //Ensure the string comes in as a text format
    res.setEncoding('UTF-8');

    res.once('data', function(chunk){
        //console.log(chunk);
        console.log('Started Reading File');
    });

    res.on('data', function(chunk){
        console.log('--chunk--'+ chunk.length);
        responseBody += chunk;
    });

    res.on('end', function(){
        fs.writeFile('barack_obama.html', responseBody, function(err){
            if(err) throw err;
            console.log('File Downloaded ')
        });
    });
});

req.on('error', function(err){
    console.log(err.message);
});

req.end();