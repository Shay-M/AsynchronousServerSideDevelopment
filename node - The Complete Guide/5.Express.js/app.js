const http = require('http');

const express = require('express');

const app = express();
app.use((req, res, next) => {  // will be called every event request|| next is a function
    console.log('hii from the middleware');
    next(); // allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {  // will be called every event request|| next is a function
    console.log('hii again! from the middleware');
});

const server = http.createServer(app);

server.listen(3000);
