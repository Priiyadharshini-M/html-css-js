//process.stdin.pipe(process.stdout);

// const { Readable } = require('stream'); 
// const inStream = new Readable({
//   read() {}
// });
// inStream.push('ABCDEFGHIJKLM');
// inStream.push('NOPQRSTUVWXYZ');
// inStream.push(null); // No more data
// inStream.pipe(process.stdout);

// const { Readable }=require('stream');
// const inStream = new Readable({
//     read() {
//       this.push(String.fromCharCode(this.currentCharCode++));
//       if (this.currentCharCode > 90) {
//         this.push(null);
//       }
//     }
//   });
//   inStream.currentCharCode = 65;
//   inStream.pipe(process.stdout);

// const { Duplex } = require('stream');

// const inoutStream = new Duplex({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   },

//   read(size) {
//     this.push(String.fromCharCode(this.currentCharCode++));
//     if (this.currentCharCode > 90) {
//       this.push(null);
//     }
//   }
// });

// inoutStream.currentCharCode = 65;
// process.stdin.pipe(inoutStream).pipe(process.stdout);


const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

const { Transform } = require('stream');

const reportProgress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write('.');
    callback(null, chunk);
  }
});

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(reportProgress)
  .pipe(fs.createWriteStream(file + '.zz'))
  .on('finish', () => console.log('Done'));