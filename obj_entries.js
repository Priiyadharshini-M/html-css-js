//array entries
const names = ["Ravi", "Priiya", "Rahul", "Dharshini"];
const user = names.entries();

for (let x of user) {
  console.log(x+" ");
}

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(num);
let firstindex=numbers.findIndex(num);
console.log("The first number greater than 18 is "+first+" and is located at index "+firstindex);

function num(value, index, array) {
  return value > 17;
}

//object entries
const object1 = {
  name: "Priiya",
  age: 22
};

for (let [key, value] of Object.entries(object1)){
  console.log(key+" : "+value);
}
console.log(Object.entries(object1));
console.log(Object.values(object1));
console.log(Object.keys(object1));
