const express = require('express');

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

