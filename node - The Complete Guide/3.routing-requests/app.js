// npm init to create json files
//npm install nodemon --save-dev// https://www.npmjs.com/package/nodemon || development dependency:instal only for development
// https://dhtmlx.com/blog/top-10-npm-packages-time-guest-post/
// https://leanylabs.com/blog/npm-packages-for-nodejs/
/* ------------------------------------ / ----------------------------------- */

const http = require('http');

const routes = require('./routes');

// const server = http.createServer(routes);
const server = http.createServer(routes.handler);  // *this version in cases having multi exports

console.log(routes.someText);


server.listen(3000);
