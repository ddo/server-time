var express = require('express');
var app     = express();

app.get('/', function(r){
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

app.listen(process.env.PORT);