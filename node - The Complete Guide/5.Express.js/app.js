const express = require('express');

//const bodyParser = require('body-parser'); //npm install --save body-parser //! 'bodyParser' is deprecated.

const app = express();

const adminRouts = require('./routes/admin');
const shopRouts = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false })); //! 'bodyParser' is deprecated.
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
//// app.use(express.json()); //?Used to parse JSON bodies

app.use(adminRouts);
app.use(shopRouts);

app.listen(3000);

//12. Adding a 404 Error Page
