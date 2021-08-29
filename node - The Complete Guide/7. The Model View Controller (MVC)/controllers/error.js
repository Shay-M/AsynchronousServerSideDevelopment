exports.get404Page = (req, res, next) => {
    //res.status(404).send('<h1>Page not found</h1>'); // status(404) for 404 error messages
    // res.sendFile(path.join(__dirname, 'views', '404.html')); // send html file error
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
};