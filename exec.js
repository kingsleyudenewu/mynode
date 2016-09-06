var exec = require('child_process').exec;
//exec("open http://www.discountshop.com.ng");
//exec('open cmd .');
exec('dir', function(err, stdout){
    if(err){
        throw err;
    }
    console.log('Listing Finished');
    console.log(stdout);
});