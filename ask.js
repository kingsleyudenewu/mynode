//Process.stdout is used to write strings to the terminal
//process.std.in is used to read strings from the terminal
//process.std.in and process.std.out are ways we can communicate with a running process
var question = [
    "What is your name",
    "What is your fav hobby",
    "What is your best language"
];
var answer = [];
function ask(i){
    process.stdout.write(`\n\n\n\n ${question[i]}`);
    process.stdout.write("	>	");
}
process.stdin.on('data', function(data){
    //process.stdout.write('\n' + data.toString().trim() + '\n');
    //Save the sting entered by the user into the ans array
    answer.push(data.toString().trim());

    if(answer.length < question.length)ask(answer.length);
    else process.exit();
});

//To exit a process function after reading and writing to a terminal
process.on('exit', function(){
    process.stdout.write("\n\n\n\n");
    process.stdout.write(`Go ${answer[1]} ${answer[0]} your fav language is ${answer[2]}`);
    process.stdout.write("\n\n\n\n");
});
ask(0);
