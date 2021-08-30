////const products = []; // Array of products//using files to save data
const fs = require('fs');
const rootDir = require('../util/path');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        //products.push(this);
        const pathOfJsonProduct = path.join(
            path.dirname(process.main.filename),
            'data', //folder
            'products.json' // creat a products file in rootDir / data folder path 
        );
        fs.readFile(pathOfJsonProduct, (err, fileContent) => {
            let products = [];
            if (!err) {//if there a file exist
                products = JSON.parse(fileContent);//'JSON' helper obj: Converts a JavaScript Object Notation (JSON) string into an object.
            }
            products.push(this);//this is for the class bcz =>
            fs.writeFile(pathOfJsonProduct, JSON.stringify(products), (err) => {
                // console.log(err);
            });
        });
    }

    static fetchAll() {
        return ['products'];
    }

}
