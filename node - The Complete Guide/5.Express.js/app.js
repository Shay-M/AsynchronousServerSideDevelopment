const express = require('express');

//const bodyParser = require('body-parser'); //npm install --save body-parser //! 'bodyParser' is deprecated.

const app = express();

const adminRouts = require('./routes/admin');
const shopRouts = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false })); //! 'bodyParser' is deprecated.
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
//// app.use(express.json()); //?Used to parse JSON bodies

app.use('/admin', adminRouts);
app.use(shopRouts);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>'); // status(404) for 404 error messages
});

app.listen(3000);


// 15. Serving HTML Pages

