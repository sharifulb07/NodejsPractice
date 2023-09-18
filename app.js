const fs=require('fs');
// create a file system here 

fs.writeFile('example.txt', "This is my example file now ",(err)=>{
    if(err)
        console.log(err);
    else
        console.log('File is created successfully now ');
    fs.readFile('example.txt', 'utf-8', (err, file)=>{
        if(err)
            console.log(err);
        else
            console.log(file);
    })
})

// file delete 

fs.unlink('example2.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('successfully delete the file now ');
    }
})


//  appending data at the end of the file here 
// fs.appendFile('example.txt', 'Some data is successfully appended to the last section in the file', (err)=>{
//     if(err)
//         console.log(err);
//     else   
//         console.log("Successfully data appended to the file system ");
// });


// Rename the file 
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully rename the file now');
// })
