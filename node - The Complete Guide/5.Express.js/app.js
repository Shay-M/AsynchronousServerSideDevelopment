const express = require('express');
//const bodyParser = require('body-parser'); //npm install --save body-parser //! 'bodyParser' is deprecated.

const app = express();

// app.use(bodyParser.urlencoded({ extended: false })); //! 'bodyParser' is deprecated.

app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
// app.use(express.json()); //?Used to parse JSON bodies

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    res.send('<from></from>')
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});


app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);

