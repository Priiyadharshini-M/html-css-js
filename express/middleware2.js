const express=require('express');
const app=express();
let alert=require('alert');
const router=express.Router();

app.use((req,res,next)=>
{
    alert("welcome");
    console.log('Requested url is '+req.url);
    next();
});
app.get('/',(req,res)=>
{
    console.log('Home page');
    res.send('Welcome to Express.js');
    next();//now back middleware works
});
router.get('/routerpage',(req,res)=>
{
    console.log('Router page');
    res.send('Welcome to Router page');
    next();//now back middleware works
});
router.get('/contact',(req,res)=>//simple contact path will not work if mounted path 'routerpage' is not there-->(2)
{
    console.log('Contact page');
    res.send('Welcome to contact page');
    next();//now back middleware works
});
router.get('/exit',(req,res)=>//same like contact path 
{
    console.log('Exit page');
    res.send('Exiting from Express.js');
    next();//now back middleware works
});
app.use('/routerpage',router);//router is mounted on path 'routerpage'-->(1)


app.get('*',(err,req,res,next)=>//*-->means that given path does not match
                                //this executed only when error occurs and pass to error handling middleware.
{
    var err=new Error("page not found");
    next(err);
});


app.use((err,req,res,next)=>//error handling middleware
{
    console.error(err.stack);
    res.status(500).send("Page not found");
    alert("Whoopsss...");
})
app.use((req,res,next)=>//this middleware does not work if next is not given in app.get as it comes after that.
{
    alert("exit");
    next();
});
app.listen(8030,()=>
{
    console.log('SErver running');
});