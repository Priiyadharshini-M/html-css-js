
//URL to Objects
const queryString=require('querystring')
let urlQuery="user=Priiya&role=trainee&id=2206&practice=LAMP"
let parsedObject = queryString.parse(urlQuery);
console.log("Parsed Object:", parsedObject);
  

//Objects to URL
let urlObject = {user: "Priiya",role: "trainee",id:'1234',practice:'LAMP'};
let parsedQuery = queryString.stringify(urlObject);
console.log("\nParsed Query:", parsedQuery);