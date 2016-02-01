var connect = require('connect');
var app = connect();

var logger = function(req, res, next) {
  console.log(req.method, req.url);
  next();
};

var helloSluts = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Sluts');
};

var goodbyeBitches = function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye Bitches');
}

app.use(logger);
app.use('/hello', helloSluts);
app.use('/goodbye', goodbyeBitches);


app.listen(3000);

console.log("Nipples being touched at localhost:touchthetits/")