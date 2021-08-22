var http = require("http");
var url = require('url');

http
    .createServer(function (req, res) { //  .createServer (req, res) => {
        res.writeHead(200, { 'ContentTypes': 'text/html' });
        //get query
        var queryObject = url.parse(req.url, true).query;
        res.end('<h1>BMI: ' +
            (queryObject.user_weight / (queryObject.user_height * queryObject.user_height) * 10000)
            + '</h1>');
    })
    .listen(1300);
