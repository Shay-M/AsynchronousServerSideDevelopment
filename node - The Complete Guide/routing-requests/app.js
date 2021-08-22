const http = require('http');

const routes = require('./routes');

// const server = http.createServer(routes);
const server = http.createServer(routes.handler);  //*  this version in cases having multi exports

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);



