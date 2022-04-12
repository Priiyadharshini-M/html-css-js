let count=0;
let interval=setInterval(()=>
{
    console.log("in the interval timer");
    count++;
    if(count==5)
    {
        console.log("finished timer");
        clearInterval(interval);
    }
},2000);