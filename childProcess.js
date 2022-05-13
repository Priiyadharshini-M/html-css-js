const {exec} =require('child_process');//only used for small commands not for huge
                                       //standard output like searching file(./file)
exec('ls -lh',(error,stdout,stderr)=>
{
    if(error){
        console.log("error"+error.message);//error in command
}
if(stderr){
    console.log("stderr:"+stderr);//error coming after excecuting the command
}
console.log("stdout:"+stdout);
});

const {execFile} =require('child_process');//only used for small commands not for huge
                                       //standard output like searching file(./file)
execFile('./execfile.sh',(error,stdout,stderr)=>
{
    if(error){
        console.log("error"+error.message);
}
if(stderr){
    console.log("stderr:"+stderr);
}
console.log("stdout:"+stdout);
});

const{spawn}=require('child_process');
const child=spawn('find',['/'])
//child.kill('SIGINT');
child.stdout.on('data',(data)=>
{
    console.log("stdout:"+data);
})
child.stderr.on('data',(data)=>
{
    console.log("stderr:"+data);
})
child.stdout.on('error',(error)=>
{
    console.log("error:"+error.message);
})
child.on('exit',(code,signal)=>{
    if(code){console.log('Exits with code'+code)}
    if(signal){console.log('killed with signal:'+signal)}
    console.log('Done');
});