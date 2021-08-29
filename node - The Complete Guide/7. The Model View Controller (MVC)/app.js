const express = require('express');

const path = require('path');

//const bodyParser = require('body-parser'); //npm install --save body-parser //! 'bodyParser' is deprecated.

const errorController = require('./controllers/error');

const app = express();

/* adding EJS Tempesting Engines (like 'PUG' 'HANDLEBARS')*/
app.set('view engine', 'ejs'); // express global configuring views engine
app.set('views', 'views'); // where to find THE templates views //* defaults is already process.cwd() + '/views'


// const adminData = require('./routes/admin');
const adminRouts = require('./routes/admin');
const shopRouts = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false })); //! 'bodyParser' is deprecated.
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
//// app.use(express.json()); //?Used to parse JSON bodies

app.use(express.static(path.join(__dirname, 'public'))); // for serving static files(css,image ...), need make 'public' folder public

// app.use('/admin', adminRouts); //we change this for export array of products
app.use('/admin', adminRouts);

app.use(shopRouts);

/* if adminRouts or shopRouts not catch, show an error page */
app.use(errorController.get404Page);

app.listen(3000);


//6. Storing Data in Files Via the Model