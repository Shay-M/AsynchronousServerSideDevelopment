/* function doSomething() {
    var sum = 0;
    i = 0;
    for (; i < 4; i++) {
        sum += i;
    }

    console.log(sum);
}

i = 0;
for (; i < 2; i++) {
    doSomething();
} */

/* function a(num) {
    let result = num + 1;
    return result;
}

function b(num) {
    let result = num + 2;
    return result;
}

function c(num) {
    let result = num + 3;
    return result;
}

a = b = c;

console.log(a(b(c(1)))); */

// function MagicalNumber(number) {
//     this.number = number;
// }

// MagicalNumber.prototype.change = function () {
//     this.number += 1;
// }

// var ob = new MagicalNumber(9);


// MagicalNumber.prototype.change = function () {
//     this.number += 2;
// }

// ob.change();

// console.log(ob.number);

// var http = require('http');
// var server = http.createServer(function (req, res) {
//   console.log('x');
//   res.writeHead(200, {'Content-Type':'text/plain'});
//   res.end('Hello World!\n');
// });
// console.log('y');
// server.listen(1400,'127.0.0.1');

// functions = [(num1, num2) => num1 + num2, (num1, num2) => num1 * num2, (num1, num2) => num1 / num2]

// function f(num1, num2) {
//     return num1 + num2;
// }

// var vec = functions.filter(ob => ob(3, 4) == f(3, 4));

// console.log(vec[0](3, 4));

// var numbers1 = [12, 3, 7, 4, 22, 23, 25];
// var numbers2 = numbers1.filter(number => number % 2 == 1);
// var numbers3 = numbers2.filter(number => number % 7 == 0);
// console.log(numbers3[0]);

