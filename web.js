var express = require('express');
var fs = require('fs');
var htmlfile = "index.html"; // new

var app = express.createServer(express.logger());


//var myStringBuf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//  response.send(myStringBuf.toString());
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
