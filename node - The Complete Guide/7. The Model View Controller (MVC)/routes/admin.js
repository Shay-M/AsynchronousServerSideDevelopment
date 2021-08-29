/*  admin.js: the route handles the creation of products which the admin of the shop can do */
const express = require('express');
const path = require('path');

////const rootDir = require('../util/path');
const productsController = require('../controllers/products');
const router = express.Router();


router.get('/add-product', productsController.getAddProductPage);

router.post('/add-product', productsController.postAddProduct);

// module.exports = router; 
// we change this for export array of products

/* exports.routes = router;
exports.products = products; */

module.exports = router;
