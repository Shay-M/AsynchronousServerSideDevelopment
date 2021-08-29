const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
    //// res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // use util ////res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); // __dirname: host the use folder (routes) || '..' need to go up the directory
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // __dirname: host the use folder (routes) || '..' need to go up the directory
    //! all above this is static, below is dynamic//
    /* render a template with the special render method provided by
    express js, that render method will always look for the registered view engine.
    [in app.js > app.set('view engine', 'ejs');] */
    res.render('add-product', { // name of the path to the view add-product.ejs
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
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/'); //redirect using express
}


exports.getProducts = (req, res, next) => {
    //// res.send('<h1>Hello from Express!</h1>'); // old
    // res.sendFile('/views/shop.html');//!error not working + different OP window '\' mac '/'
    // use utils //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));// __dirname: host the use folder (routes) || '..' need to go up the directory
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));// __dirname: host the use folder (routes) 
    //! all above this is static, below is dynamic//
    //use the default template engine
    // const products = adminData.products;//we move to model
    const products = Product.fetchAll();
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });

}



