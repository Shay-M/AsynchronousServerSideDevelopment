/*  admin.js: the route handles the creation of products which the admin of the shop can do */
const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/add-product', (req, res, next) => { //using post only
    console.log(req.body);//getting what the user send usy 
    res.redirect('/');//redirect using express
});

module.exports = router;