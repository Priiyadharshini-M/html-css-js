const express=require('express')
const app=express();
app.get('/file/:name', function (req, res, next) {
    var options = {
      root: __dirname,
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
  
    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  })
  app.listen(3000,()=>
  {
    console.log("Server running on port 3000");
  })