// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream(__dirname + '/data.txt')
//   stream.pipe(res)
// })
// server.listen(3000)

// const r=require('repl');
// r.start({
//   ignoreUndefined:true,
//   replMode:r.REPL_MODE_STRICT
// });

const fs = require('fs');
   function main() {
    setTimeout(() => console.log('1'), 0);
    setImmediate(() => console.log('2'));
 
    fs.readFile('./xyz.txt', (err, buff) => {
     setTimeout(() => {
      console.log('3');
     }, 1000);

     process.nextTick(() => {
      console.log('process.nextTick');
     });

     setImmediate(() => console.log('4'));
     process.nextTick(() => {
      console.log('process.nextTick2');
     });
    });


    
    process.nextTick(() => {
      console.log('process.nextTick1');
     });
    setImmediate(() => console.log('5'));
    
    setTimeout(() => {
     process.on('exit', (code) => {
      console.log(`close callback`);
     });
    }, 1100);
   }

   main();