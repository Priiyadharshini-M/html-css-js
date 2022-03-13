const book_details = new Map([
  ["harry Potter","250"],
  ["oliver twist", "200"],
  ["Alice in wonderland", "300"]
]);
book_details.forEach(function(value, key) {
    console.log("The book named "+key+" is of rupees " + value);
}); 

// Creating Objects
const Rahul = 
{
id:1,
dept:"ECE"
};
const Priiya = 
{
id:2,
dept:"ECE",
dob:"19/09/2000"
};
const Ravi = 
{
id:3,
dept:"EEE",
company:"Aspire"
};

// Create a new Map
const students = new Map();

// Add the Objects to the Map
students.set(1, Rahul);
students.set(2, Priiya);
students.set(3,Ravi);
console.log("Details of Student1: ")
console.log(students.get(1));