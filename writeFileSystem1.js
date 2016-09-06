var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface(process.stdin, process.stdout);
var realPeson = {
    name : '',
    saying: []
};

rl.question('WHat is your name', function(answer){
    realPeson.name = answer;

    //Write the values the user is entering to a file
    fs.writeFileSync(realPeson.name+'.txt',realPeson.name+'\n============' +
        '===========\n\n' );

    rl.setPrompt(`What would ${realPeson.name} say ? `);
    rl.prompt();
    //The on() is used to listen to an event
    rl.on('line', function(saying){

        if(saying.toLowerCase() === 'exit'){
            //close function close the readline instance
            rl.close();
        }
        else{
            realPeson.saying.push(saying.trim());
            rl.setPrompt(`What would ${realPeson.name} say ('exit' to leave)`);

            //Append what the user is saying to the file
            fs.appendFile(realPeson.name+'.txt',saying.trim() + '\n');

            rl.prompt();
        }

        //console.log(saying.trim());
    });
});

rl.on('close', function(){
    // %s represent a string formatter while %j rep a Json formatter
    console.log('%s is a real person that is saying %j', realPeson.name, realPeson.saying);
    //After displaying all the readline close the process
    process.exit();
});