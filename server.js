var express = require('express');
var app = express();

app.use('/', function(req, res){
  res.send('Hello idiots');
});

app.listen(3000);
console.log("server sucking balls at localhost:3000");

module.exports = app;