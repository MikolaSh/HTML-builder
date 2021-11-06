let fs = require('fs');
const path = require('path')

let myText = fs.createReadStream(path.join('./01-read-file/text.txt'), 'utf-8');

myText.on('data', function(chunk){
    console.log(chunk);
})