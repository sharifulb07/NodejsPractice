
// readable and writable stream here 

const fs=require('fs');
const zlib=require('zlib');
const guzib=zlib.createGunzip();
// const gzib=zlib.createGzip();
const readStream=fs.createReadStream('./cool.txt.gz');
const writeStream=fs.createWriteStream('uncompressed.txt');
readStream.pipe(guzib).pipe(writeStream);







// readStream.pipe(gzib).pipe(writeStream);








// readStream.pipe(writeStream);

// readStream.on('data', (chunk)=>{
   
//     writeStream.write(chunk);


// })