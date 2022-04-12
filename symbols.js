let firstName = Symbol("first name");//"first name"-description of string
let person = {
    [firstName]: "Ravi"
};

// make the property read only
Object.defineProperty(person, firstName, { writable: false });
let lastName = Symbol("last name");
Object.defineProperties(person, {
    [lastName]: {
        value: "Rahul",
        writable: true
    }
});
person[firstName]="Priiya";//first name not changed
person[lastName]="Dharshini";//second name can be changed
console.log(person[firstName]);
console.log(person[lastName]);

let id = Symbol.for("userid");//first searches the global symbol registry to see if a symbol 
//with the key "userid" exists. If so, the method returns the existing symbol. 
//If no such symbol exists, then a new symbol is created and registered to the global symbol registry using the specified key
let employee = {
    [id]: "22"
};

console.log(employee[id]);   
console.log(id);

let id2 = Symbol.for("userid");

console.log(id === id2);
console.log(employee[id2]);
console.log(id2);     
console.log(Symbol.keyFor(id2));//retrieve
console.log(Symbol.keyFor(id));
//console.log(Symbol.keyFor(id3));