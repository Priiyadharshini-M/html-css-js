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