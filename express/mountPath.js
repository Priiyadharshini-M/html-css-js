var express = require('express');
var app = express();
var PORT = 3000;
  
app.param('name', function (req, res, next, name) {
    console.log('CALLED ONLY ONCE');
    next();
});
    
app.get('/user/:name', function (req, res, next) {
    console.log('Greetings from geeksforgeeks');
    next();
});
    
app.get('/user/:id', function (req, res) {
    console.log('Once again greetings from geeksforgeeks');
    res.end();
});
  
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup");
    console.log("Server listening on Port", PORT);
});

// const express = require('express')

// const app = express() // the main app
// const admin = express() // the sub app
// var port=3000;

// app.disable('NAME');//equal to app.set('name',false)--setting boolean values
// console.log(app.get('NAME'));
// console.log(app.disabled('NAME'))//check whether disabled or not
// app.enable('NAME');
// console.log(app.disabled('NAME'))
// console.log(app.enabled('NAME'))

// admin.on('mount', function (parent) {
//     //console.log(parent);
//     console.log('Admin Mounted');
//   });


// admin.get('/', (req, res) => {
//   console.log(admin.mountpath) // /admin
//   res.send('Admin Homepage')
// })

// app.use('/admin', admin) // mount the sub app
// app.listen(3000, function(err){
//     	if (err) console.log(err);
//     	console.log("Server listening on PORT 3000");
//     });