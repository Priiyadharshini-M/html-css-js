// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, res) {
//     if (req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.createReadStream("./register.html", "UTF-8").pipe(res);
//     } else if (req.method === "POST") {
    
//         var body = "";
//         req.on("data", function (chunk) {
//             body += chunk;
//         });

//         req.on("end", function(){
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(body);
//         });
//     }
// }).listen(3000);

// const req=require('request')
// console.log(JSON.stringify(req.headers));

const http = require('http')

const port = 8086

const server = http.createServer((req,res)=>{
  console.log(req.headers);
  console.log(req.url);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`)

  var options = {
    port: 8086,
    host: '127.0.0.1',
  }; 
  
  var request = http.request(options);
  
  request.setHeader('Cookie', ['type=ninja', 'language=javascript']);
  request.setHeader('content-type', 'text/html');
  request.end();
})

// setTimeout(()=>{
//   server.close()
// },10000)