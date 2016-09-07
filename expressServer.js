var  express  = require('express');
var app = express();
var cors = require('cors');
//Body passer helps post data that is posted to the api
var bodyParser = require('body-parser');

var skierTerms = [
    {
        term : 'Rip',
        defined : 'To move at a high ate speed'
    },
    {
        term : 'Huck',
        defined : 'To through all your body'
    },
    {
        term : 'Chowder',
        defined : 'Powder after it has been sufficient'
    }
];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//Express has a form of middleware (customized plugins) to add functionality to your application

app.use(function(req, res, next){
    console.log(req.method + ' request for '+ req.url +'  '+JSON.stringify(req.body));
    next();
});

app.use(express.static('./express_public'));

app.use(cors());

//This is to fet data from the dictionary api
app.get('/dictionary-api', function(req, res){
    res.json(skierTerms);
});

//This when we try to submit a post request to the api and in this case the form parameters will be url encoded
app.post('/dictionary-api', function(req, res){
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.delete('/disctionary-api/:term', function(req, res){
   skierTerms = skierTerms.filter(function(definition){
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
   });

    res.json(skierTerms);
});

app.listen(3000);

console.log('Express app running on port 3000');

module.exports = app;