var buffer1=Buffer.from('€');
console.log(buffer1);
const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

var cent = Buffer.from([0xC2, 0xA2]);
//console.log("toString method:"+cent.toString());
console.log("String Decoder method: "+decoder.write(cent));

decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC])));

process.stdin.on('readable',()=>
{
    const chunk=process.stdin.read();
    if(chunk!=null)
    {
        const buffer=Buffer.from([chunk]);
        console.log("toString method: "+buffer.toString());
        console.log("String Decoder method: "+decoder.write(buffer));
        process.stdin.resume();
    }
});