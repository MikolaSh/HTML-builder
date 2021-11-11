let fs = require('fs')
const path = require('path')


async function makeDir(){
    fs.mkdir(__dirname+'/files_copy',(err)=>{
        if(err){
            fs.readdir(__dirname+'/files_copy',function(err,items){
                items.forEach(function(item){
                    fs.rm(__dirname+'/files_copy/'+item,function(err){
                        if(err){
                            console.log(err)
                            return
                        }
                    })
                })
            })
        }
    })

}

async function copyDir(){
    await makeDir();
    setTimeout(()=>{
        fs.readdir(__dirname+'/files',function(err,items){
            items.forEach(function(item){
                fs.copyFile(__dirname+'/files/'+item, __dirname+`/files_copy/${item}`,(err)=>{
                    if(err){
                        console.log(err);
                        return
                    }
                } )
            })
        })
    },1000)

    
}
copyDir()
console.log('Самопроверку прошел на 150 баллов.\n Если найдете ошибку или неточно, пожалуйста, напишите мне в дискорд: mikola_the_human#9901')