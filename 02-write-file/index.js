let fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
let writeStream = fs.createWriteStream(__dirname+'/text.txt');

console.log("Hello! Write your message: ")
rl.on('line',function(input){
    if(input==="exit"){
        console.log("Thank you for your attention. Good buy!");
        rl.close();
        return;
    }
    writeStream.write(input);
})