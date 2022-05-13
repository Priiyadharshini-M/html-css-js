const crypto = require('crypto');

// console.log(crypto.getHashes())
 //console.log(crypto.getCiphers())

const algorithm = 'aes-256-cbc';
let key='12345678123456781234567812345678'
let iv =crypto.randomBytes(16);

function encryptText(text){   
const cipher = crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update(text,'utf8','hex');
encrypted += cipher.final('hex');
return encrypted;
}
console.log(encryptText("Cryptography"));

function decryptText(text){
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    let decrypted = decipher.update(text,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
    }
let encrypted = encryptText("Cryptography");
console.log(decryptText(encrypted));



// const secret = 'Hello@123';
// const algorithm = 'sha256';
// function getHash(text) {
// let hash = crypto.createHash(algorithm, secret)
// hash=hash.update(text)
// hash=hash.digest('hex');
// return hash;
// }
// console.log(getHash('Cryptography'));



// const d1 = crypto.getDiffieHellman('modp14');
// const d2 = crypto.getDiffieHellman('modp14');
// d1.generateKeys();
// d2.generateKeys();
// const d1Secret = d1.computeSecret(d2.getPublicKey(), null, 'hex');
// const d2Secret = d2.computeSecret(d1.getPublicKey(), null, 'hex');
// console.log(d1Secret === d2Secret);