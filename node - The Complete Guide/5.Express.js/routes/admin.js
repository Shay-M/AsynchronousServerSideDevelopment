/*  admin.js: the route handles the creation of products which the admin of the shop can do */
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = []; // Array of products


router.get('/add-product', (req, res, next) => {
    //// res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // use util ////res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); // __dirname: host the use folder (routes) || '..' need to go up the directory
    res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // __dirname: host the use folder (routes) || '..' need to go up the directory

});

router.post('/add-product', (req, res, next) => { //using post only
    console.log(req.body); //getting what the user send
    products.push({ title: req.body.title });
    res.redirect('/'); //redirect using express
});

// module.exports = router; 
// we change this for export array of products

exports.routes = router;
exports.products = products;
