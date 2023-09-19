
// readable and writable stream here 


const fs=require('fs');
const readStream=fs.createReadStream('./task.txt','utf-8');

readStream.on('data', (chunk)=>{
    console.log(chunk);
})