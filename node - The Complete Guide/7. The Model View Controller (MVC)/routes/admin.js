/*  admin.js: the route handles the creation of products which the admin of the shop can do */
const express = require('express');
const path = require('path');

////const rootDir = require('../util/path');
const adminController = require('../controllers/admin');
const router = express.Router();


router.get('/add-product', adminController.getAddProductPage);

router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

// module.exports = router; 
// we change this for export array of products

/* exports.routes = router;
exports.products = products; */

module.exports = router;
