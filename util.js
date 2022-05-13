//callbackify
const util = require('util');
const cb = util.callbackify(funct);
cb((err, data) => {
    if (err) throw err;
    console.log(data);
});
async function funct() {
    return Promise.resolve('Hello...');
}


//promisify
//const util=require('util')
const fs = require('fs')
const prom = util.promisify(fs.readFile)

prom('./test.txt','utf-8')
.then(files => {
	console.log(files)
})
.catch(err => {
	console.log(err)
})