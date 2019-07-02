var express = require('express');
var json = require('./CleanMultiservices.json');

var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res) {
  res.send(json);
});

app.listen(port, function() {
  console.log(`app listening on port 3000!`);
});
