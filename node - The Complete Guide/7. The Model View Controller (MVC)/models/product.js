////const products = []; // Array of products//using files to save data
const fs = require('fs');
////const rootDir = require('../util/path');
const path = require('path');

const pathOfJsonProduct = path.join(
    path.dirname(require.main.filename),
    'data',
    'products.json' // creat a products file in rootDir / data folder path
);

const getProductsFromFile = callBack => {
    fs.readFile(pathOfJsonProduct, (err, fileContent) => {
        if (err) { // if there a file exist
            callBack([]);
        } else {
            callBack(JSON.parse(fileContent)); // 'JSON' helper obj: Converts a JavaScript Object Notation (JSON) string into an object.
        }
    });
};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
/* --------------------------- save product method -------------------------- */

    save() {
        getProductsFromFile(products => {
            products.push(this); // 'this' is for the class bcz =>
            fs.writeFile(pathOfJsonProduct, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }
    /* ----------------------------- fetch All method ---------------------------- */

    static fetchAll(callBack) { // callBack from models products
        getProductsFromFile(callBack);
    }
};


/////////////////////////////////////////////////////////////////////////////////////////


    /* ---------------------------- old version save ---------------------------- */
    /* save() {
        //products.push(this);
        const pathOfJsonProduct = path.join(
            path.dirname(require.main.filename),
            'data', //folder
            'products.json' // creat a products file in rootDir / data folder path
        );
        fs.readFile(pathOfJsonProduct, (err, fileContent) => {
            let products = [];
            if (!err) { //if there a file exist
                products = JSON.parse(fileContent);//'JSON' helper obj: Converts a JavaScript Object Notation (JSON) string into an object.
            }
            products.push(this);//this is for the class bcz =>
            fs.writeFile(pathOfJsonProduct, JSON.stringify(products), (err) => {
                // console.log(err);
            });
        });
    } */

    /* ------------------------- fetchAll need callBack ------------------------- */

    /* //! this isn't good be
    static fetchAll() {
        const p = path.join(
            path.dirname(process.main.filename),
            'data',
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => { //! Asynchronously code
            if (err) {
                return []; // ! readFile return not fetchAll!
            }
            return JSON.parse(fileContent)
        });
    } //! fix this using callBack */


    /* ------------------------------ have callBack ----------------------------- */

    /* static fetchAll(callBack) { // callBack from models products
            const p = path.join(
                path.dirname(require.main.filename),
                'data',
                'products.json'
            );
            fs.readFile(p, (err, fileContent) => {
                if (err) {
                    callBack([]);
                }
                callBack(JSON.parse(fileContent));// JSON.parse convert text json to array
            });
        }
    
    } */



