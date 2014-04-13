var express = require('express');
var app     = express();

/**
 * CORS support.
 */
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.get('/', function(req, res){
    var now = new Date();

    res.send({
        string: now.toUTCString(),
        timestamp: parseInt(now.getTime()/1000, 10),
        timestamp_millisecond: now.getTime()
    });
});

app.all('*', function(req, res){
    res.send(404);
});

app.listen(process.env.PORT || 8080);