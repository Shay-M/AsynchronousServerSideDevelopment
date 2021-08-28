const express = require('express');
const path = require('path');


//const bodyParser = require('body-parser'); //npm install --save body-parser //! 'bodyParser' is deprecated.

const app = express();

const adminRouts = require('./routes/admin');
const shopRouts = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false })); //! 'bodyParser' is deprecated.
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
//// app.use(express.json()); //?Used to parse JSON bodies

app.use(express.static(path.join(__dirname, 'public'))); // for serving static files(css,image ...), need make 'public' folder public

app.use('/admin', adminRouts);

app.use(shopRouts);

/* if adminRouts or shopRouts not catch, show an error page */
app.use((req, res, next) => {
    //res.status(404).send('<h1>Page not found</h1>'); // status(404) for 404 error messages
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);




