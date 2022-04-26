const fs=require('fs')
let files=['./hello.txt','./nofile.text'];
files.forEach(file=>
    {
        try{
            let data=fs.readFileSync(file,'utf-22');
            console.log(data);
        }
        catch(err)
        {
            if(err.code=='ENOENT'){
                console.log("File not found");
            }
            else{
                console.log("wrong encoding");
            }
        }
    });


fs.readFile(files[1],'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

//using process   
process.on('uncaughtException',err=>console.log('The exception was caught... using process')); 

//using domain
let d=require('domain').create()
d.run(()=>{
    fs.readFile("./dem.txt",'utf-8',(err,data)=>{
        if(err) throw err
        console.log(data);
    });
});

d.on("error",(err)=>console.log("The Error was caught... using domain"))

//using promises
const promise = new Promise(function (resolve, reject) {
    reject(new Error('Something was wrong...'));
});

promise.then(() => {
        console.log("hi");
    })
    .then(() => {
        console.log('hello'); 
    })
    .catch(err => {
        console.log(err.message); 
    })
