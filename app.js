const fs=require('fs');

fs.readdir('./tutorial',(err,files)=>{
    if(err){
        console.log(err);
    }else{
        for(let file of files){
            fs.unlink('./tutorial/'+file,(err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log('File is deleted successfully here ');
                }
            })
        }
    }
})












// fs.unlink('./tutorial/exam.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         fs.mkdir('tutorial', (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
             
//                 console.log('file is created successfully! ');
//             }
//         })
//     }
// })



// fs.mkdir('tutorial', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         fs.writeFile('./tutorial/exam.txt', 'this is only for exam and practice', (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('file is created successfully now ');
//             }
//         })
//     }
// })