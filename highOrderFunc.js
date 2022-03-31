/*function greaterThan(n) {
    console.log(n);
    return  hii=(m) => m>n;
  }
  let hii = greaterThan(10);
  console.log(hii(11));*/
  function great(n)
{
  return num=(m)=>m==n;
}
let num=great;
great(10);
console.log(num(11));
let i;
function unless(test, then) {
    if (!test) then();
  }
  function repeat(times,fun)
  {
      for(i=0;i<times;i++)
      {
          fun();
      }
  }
  repeat(5,() => {
    unless(i % 2 == 1, () => {
      console.log(i, "is even");
    });
  });

 
let vals = [1,3,4,5];
function doubler(x){
    return x * 2;
}
vals.map(doubler);
console.log(vals);
let doubled = vals.map(doubler)
console.log(doubled);

vals.fill(0,1,3);
console.log(vals);
let a=[1,2,3,4];
function sum(acc,val){
    console.log(acc);
    console.log(val);
    return acc+val;
  }
  let answer = a.reduce(sum,2);
  console.log(answer);

function isEven(num){
    if(num%2 == 0){
     return num;
  }
}
let even = a.filter(num=>isEven(num));
console.log(even)
