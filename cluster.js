var http=require('http')
var cluster=require('cluster')
const numOfCpu=require('os').cpus().length;

if(cluster.isMaster){
    console.log("Master Process id is : ",process.pid);
    for(let i=0;i<numOfCpu;i++)
    {
        cluster.fork();
    }
    cluster.on('exit',(worker)=>{
        console.log(worker.process.pid," -Worker died");
        cluster.fork();
    })
}
else{
    http.createServer((req,res)=>{
    res.write("Hello..I'm priiya Manikandan - "+process.pid)
    res.end();
}).listen(8000,()=>{console.log("Server is running at port 8000 and Newly created worker - ",process.pid);
})
}