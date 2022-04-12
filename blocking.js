const fs = require('fs');
const data = fs.readFileSync('./test.txt','utf8');
console.log(data);

let sum = 0;
for(let i=1; i<=10; i++){
	sum = sum + i;
}
console.log('Sum: ', sum);