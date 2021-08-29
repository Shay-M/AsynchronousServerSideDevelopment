const express = require('express'); // npm install --save express

const app = express();

app.use('/', (req, res, next) => {  // will be called every event request|| next is a function
    console.log('hii from the middleware i always run');
    next(); // allows the request to continue to the next middleware in line
});

app.use('/add-item', (req, res, next) => {
    console.log('hii again! from the middleware add-item');
    res.send('<h1>hi from add-item</h1>'); //'send' allowed us send a response html or  || the default is html
});

app.use('/', (req, res, next) => {
    console.log('hii again! from the middleware');
    res.send('<h1>hi</h1>'); //'send' allowed us send a response html or  || the default is html
});

app.listen(3000);

/* ----------------------------------- // ----------------------------------- */

const express = require('express');
//const bodyParser = require('body-parser'); //npm install --save body-parser //! 'bodyParser' is deprecated.

const app = express();

// app.use(bodyParser.urlencoded({ extended: false })); //! 'bodyParser' is deprecated.

app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
// app.use(express.json()); //?Used to parse JSON bodies


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => { //using post only
    console.log(req.body);//getting what the user send usy 
    res.redirect('/');//redirect using express
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);


