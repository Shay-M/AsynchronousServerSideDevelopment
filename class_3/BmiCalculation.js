var http = require("http");
http
    .createServer(function (req, res) {
        res.writeHead(200, { ContentTypes: "text/plain" });
        res.end("Hello World!\n");
    })
    .listen(1300);



var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    //var area = req.query.width * req.query.height;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var queryObject = url.parse(req.url, true).query;
    res.end('area is ' +
        (queryObject.width * queryObject.height));
}).listen(process.env.PORT);