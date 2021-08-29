/* shop.js: what the user see, output all products*/
const express = require('express');
const path = require('path');

////const rootDir = require('../util/path');
////const adminData = require('./admin'); // to get products
const productsController = require('../controllers/products');


const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;