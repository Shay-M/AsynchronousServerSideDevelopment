const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
    //// res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // use util ////res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); // __dirname: host the use folder (routes) || '..' need to go up the directory
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // __dirname: host the use folder (routes) || '..' need to go up the directory
    //! all above this is static, below is dynamic//
    /* render a template with the special render method provided by
    express js, that render method will always look for the registered view engine.
    [in app.js > app.set('view engine', 'ejs');] */
    res.render('admin/add-product', { // name of the path to the view add-product.ejs
        pageTitle: 'Add Product',
        path: '/admin/add-product', // so that the view can find out what is the path for which this was loaded. [for \views\includes\navigation.ejs | not must this name]
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};


exports.postAddProduct = (req, res, next) => { //using post only
    console.log(req.body); //getting what the user send
    //products.push({ title: req.body.title }); // move to model
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/'); //redirect using express
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',

        });
    });
};