const express=require('express')
let app=express()
app.set('view engine','ejs')

app.get('/',(req,res)=>
{
    res.send("Hello")
});

app.get('/home',(req,res)=>{
    var practice = "lamp"
    res.render('index',{practice})
})
app.use(express.static('public'))
app.get('/home/contact',(req,res)=>{
    // req.writeHead(200,{'Content-Type':'text/html'})
    res.sendFile(__dirname+'/index.html')
    console.log(__dirname);
})
app.listen(3000,()=>
{
    console.log("SErver running");
})