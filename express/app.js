const express=require('express')
const path=require('path');
const app=express();
let bodyParser=require('body-parser');//to get the values which is encrypted from body
let urlencodedParser=bodyParser.urlencoded({extended:false})//to decrypt that encrpted value in body
let routing=require('./router.js');

// app.get('/',(req,res)=>
// {
//     res.sendFile(path.join(__dirname,"/expressform.html"));
// });
app.post('/home',urlencodedParser,(req,res)=>
{
    res.send('<h1>Welcome '+req.body.user+'</h1>');
});
// app.get('/home',(req,res)=>
// {
//     res.send('<h1>Welcome '+req.query.user+'</h1>');
// });
3
app.use('/',routing);
app.listen(8000,()=>
{
    console.log("Server is running");
})