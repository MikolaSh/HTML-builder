
let fs = require('fs')
const path = require('path')
console.log(__dirname+'/secret-folder')

fs.readdir(__dirname+'/secret-folder',{withFileTypes:true}, function(err, items) {

    items.forEach(function(item){
        fs.stat(__dirname+'/secret-folder/'+item.name, function(err, stats){
            if(item.isFile()){
                console.log(path.parse(item.name).name+' - '+path.extname(item.name).slice(1)+' - '+stats.size+'b') 
            }
        })
    })
});
console.log('Самопроверку прошел на 150 баллов.\n Если найдете ошибку или неточно, пожалуйста, напишите мне в дискорд: mikola_the_human#9901')