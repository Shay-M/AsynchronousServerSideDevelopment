const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    //// res.send('<h1>Hello from Express!</h1>'); // old
    // res.sendFile('/views/shop.html');//!error not working + different OP window '\' mac '/'
    // use utils //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));// __dirname: host the use folder (routes) || '..' need to go up the directory
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));// __dirname: host the use folder (routes) 
    //! all above this is static, below is dynamic//
    //use the default template engine
    // const products = adminData.products;//we move to model
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',

        });
    });
};

exports.getIndex = (req, res, next) => {

    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',

        });
    });
};


exports.getCart = (req, res, next) => {

    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'

    });
};

exports.getOrders = (req, res, next) => {

    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'

    });
};

exports.getCheckout = (req, res, next) => {

    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'

    });
};




