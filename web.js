var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(req, res) {
  fs.readFile('./index.html', function(error, content) {
    if (error) {
      res.writeHead(500);
      res.end();
    }
    else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

