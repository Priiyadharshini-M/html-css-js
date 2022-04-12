let buffer1 = Buffer.alloc(1);
let buffer2 = Buffer.from('ABC');

buffer1.write("Hi all...Welcome\n");
console.log(buffer1.toString());
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);

let bufferNew = Buffer.from('Hello');
bufferNew.copy(buffer2);
let copyData = buffer2.toString();
console.log(copyData);

let buffer4 = Buffer.from('Priiya Manikandan');
console.log(buffer4.slice(0, 6).toString());

let buffer5 = Buffer.from('Have a nice day...');
let buffer6 = Buffer.from('Thank you !!!');
let bufferConcat = Buffer.concat([buffer5, buffer6]);
console.log(bufferConcat.toString());

let buffrerArray=Buffer.from([1,67,54,100]);
console.log(Array.from(buffrerArray));