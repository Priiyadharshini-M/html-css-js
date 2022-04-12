
const http = require('http');

const server=http.createServer(function (req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>Hello World!<h1>');
  //const auth = req.headers;
  //res.write(auth);
  //console.log(req.getHeaderNames());
  //setTimeout(res.write('welcome'),3000);
  res.end();
}).listen(8081,()=>
{
    console.log("Server is running");
});

