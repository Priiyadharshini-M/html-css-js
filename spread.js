function myFunction(v, w, x, y, z)
 {
     console.log(v);
     console.log(w);
     console.log(x);
     console.log(y);
     console.log(z);
 }
let args = [0, 1];
myFunction(-1, ...args, 2, ...args);
