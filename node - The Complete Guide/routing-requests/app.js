// npm init to create json files
/* ------------------------------------ / ----------------------------------- */

const http = require('http');

const routes = require('./routes');

// const server = http.createServer(routes);
const server = http.createServer(routes.handler);  //*  this version in cases having multi exports

console.log(routes.someText);

server.listen(3000);
