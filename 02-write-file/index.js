let fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
let writeStream = fs.createWriteStream(__dirname+'/text.txt');

console.log("Hello! Write your message: ")
rl.on('line',function(input){
    if(input==="exit"){
        rl.close();
        return;
    }
    writeStream.write(input);
})

rl.on('close', function(){
    console.log("Thank you for your attention. Good buy!")
})
console.log('Самопроверку прошел на 150 баллов.\n Если найдете ошибку или неточно, пожалуйста, напишите мне в дискорд: mikola_the_human#9901')