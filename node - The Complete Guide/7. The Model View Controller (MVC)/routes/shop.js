/* shop.js: what the user see, output all products*/
const express = require('express');
const path = require('path');

////const rootDir = require('../util/path');
////const adminData = require('./admin'); // to get products
const shopController = require('../controllers/shop');


const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);

module.exports = router;