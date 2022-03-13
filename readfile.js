console.log("Welcome to node");
var http=require('http')
var fileSelector=require('fs')

fileSelector.readFile('C:\\Users\\admin\\Desktop\\Aspire_Systems\\drag_drop.html','utf8',function(err,data)
{
    if(err){
    throw err;}
    console.log(data);
})

/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h4>Welcome to Node.js</h4>");
  fileSelector.readFile('C:\\Users\\admin\\Desktop\\Aspire_Systems\\Front_end\\drag_drop.html','utf8',function(err,data)
{
    if(err){
    throw err;}
    console.log(data);
})
  res.end();
}).listen(3000, ()=>
{
  console.log("Server is running at port 3000");
});*/