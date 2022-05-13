const names = ['Ravi', 'Priiya','Rahul','Ravi']
const id = ['1000','1001','1002']
names.forEach(itr => {
  console.count(itr)
})
id.forEach(itr => {
  console.count(itr)
})
console.log("iterating again");
names.forEach(itr => {
    console.count(itr)
  })
console.log("After resetting Ravi value ")
console.countReset('Ravi')
names.forEach(itr => {
  console.count(itr)
})

const timefunc = () => console.log('executed the function');
const fun = () => {
  console.time('timefunc()')
  timefunc()
  console.timeEnd('timefunc()')
}
console.time('fun()')
fun()
console.timeEnd('fun()')
console.log('end')

let con=require('chalk');
console.log(con.bgRedBright("exit"));
//console.clear();

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
console.assert(5>10, 'wrong');//if false given error prints.
                              //if true prints nothing
console.trace('Show me');

console.error(new Error('An error occured'));