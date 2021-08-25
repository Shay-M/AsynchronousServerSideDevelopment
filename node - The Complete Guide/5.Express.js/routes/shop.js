/* shop.js: what the user see*/
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    //// res.send('<h1>Hello from Express!</h1>');
    // res.sendFile('/views/shop.html');//!error not working + different OP window '\' mac '/'
    // use utils //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));// __dirname: host the use folder (routes) || '..' need to go up the directory
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));// __dirname: host the use folder (routes) || '..' need to go up the directory

});

module.exports = router;