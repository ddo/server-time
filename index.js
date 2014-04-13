var express = require('express');
var app     = express();

/**
 * CORS support.
 */
app.all('*', function(req, res, next){
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if ('OPTIONS' == req.method) return res.send(200);
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