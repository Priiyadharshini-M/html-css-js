const express=require('express');
const app=express();
app.set('view engine','pug');
app.set('views','./views');
app.get('/',(req,res)=>
{
    res.render('login',{
        quotes:"shine when rains",
        written: "--poet",
        user:{name:"Rahul"}
    });
});
app.listen(8020,()=>
{
    console.log('server running');
})