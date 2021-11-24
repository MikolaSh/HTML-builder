let fs = require('fs');
const path = require('path')
console.log("Hello")
let myText = fs.createReadStream(path.join(__dirname + '/text.txt'), 'utf-8');

myText.on('data', function(chunk){
    console.log(chunk);
})
console.log('Самопроверку прошел на 150 баллов.\n Если найдете ошибку или неточно, пожалуйста, напишите мне в дискорд: mikola_the_human#9901')