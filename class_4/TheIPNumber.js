/* The os module provides us with system-related utility
methods we can use for accessing the operating system
layer.  */

const os = require('os');

// Network interfaces
let ifaces = require('os').networkInterfaces();

// Iterate over interfaces ...
let adresses = Object.keys(ifaces).reduce(function (result, dev) {
    return result.concat(ifaces[dev].reduce(function (result, details) {
        return result.concat(details.family === 'IPv4' && !details.internal ? [details.address] : []);
    }, []));
});

// Print the result
console.log(adresses)


//* Alt Condense Way
/* var address,
    ifaces = require('os').networkInterfaces();
for (var dev in ifaces) {
    ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address : undefined);
 */