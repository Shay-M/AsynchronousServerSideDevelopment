/* shop.js: what the user see, output all products*/
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin'); // to get products


const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('shope.js : adminData.products: ', adminData.products);

    //// res.send('<h1>Hello from Express!</h1>'); // old
    // res.sendFile('/views/shop.html');//!error not working + different OP window '\' mac '/'
    // use utils //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));// __dirname: host the use folder (routes) || '..' need to go up the directory
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));// __dirname: host the use folder (routes) 
    //! all above this is static, below is dynamic//
    //use the default template engine
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });

});

module.exports = router;