let marks = [10,20,30]
   let iter = marks[Symbol.iterator]();
   console.log(iter.next())
   console.log(iter.next())
   console.log(iter.next())
   console.log(iter.next())//returns true after reading all items in the collection

   //user defined iterable
   class CustomerList {
    constructor(customers){
       //adding customer objects to an array
       this.customers = [].concat(customers)
    }
    //implement iterator function
    [Symbol.iterator](){
       let count=0;
       let customers = this.customers
       return {
          next:function(){
          //retrieving a customer object from the array
             let customerVal = customers[count];
             count+=1;
             if(count<=customers.length){
                return {
                   value:customerVal,
                   done:false
                }
             }
             //return true if all customer objects are iterated
             return {done:true}
          }
       }
    }
 }
 //create customer objects
 let c1={
    firstName:'Sachin',
    lastName:'Tendulkar'
 }
 let c2={
    firstName:'Rahul',
    lastName:'Dravid'
 }
 let customers=[c1,c2]
 //pass customers to the class constructor
 let customersObj = new CustomerList(customers);
 //iterating using for..of
 for(let c of customersObj){
    console.log(c)
 }
 //iterating using the next() method
 let iterr = customersObj[Symbol.iterator]();
 console.log(iterr.next())
 console.log(iterr.next())
 console.log(iterr.next())