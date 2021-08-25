const os = require('os');


let platform = os.platform() + " (" + os.arch() + ")";

console.log(platform)
