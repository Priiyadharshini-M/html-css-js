var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h4>Welcome to Node.js</h4>");
  res.end();
}).listen(3000, ()=>
{
  console.log("Server is running at port 3000");
});