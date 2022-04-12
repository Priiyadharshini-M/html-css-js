var http = require('http');
var fs = require('fs');
http.createServer(function (request, respond) {
  fs.readFile('register.html', function(err, data) {
    if (err){
      throw err;
    }
    respond.write(data);
    respond.write("finished");
    return respond.end();
  });
}).listen(3000,()=>
{
    console.log("reading file");
});

console.log(__filename);
console.log(__dirname);