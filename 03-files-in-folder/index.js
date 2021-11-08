
let fs = require('fs')
const path = require('path')
console.log(__dirname+'/secret-folder')

fs.readdir(__dirname+'/secret-folder', function(err, items) {
    console.log(items);
    items.forEach(function(item){
        fs.stat(__dirname+'/secret-folder/'+item, function(err, stats){
            if(stats.isFile()){
                console.log(path.basename(item)+' - '+path.extname(item)+' - '+stats.size+'b') 
            }
        })
    })
});
console.log('Самопроверку прошел на 150 баллов.\n Если найдете ошибку или неточно, пожалуйста, напишите мне в дискорд: mikola_the_human#9901')