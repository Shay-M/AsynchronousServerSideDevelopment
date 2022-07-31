/* - Each function is an object of the Function type.
- Each function name is kind of a simple pointer to the
function object.*/

/* -------------------------------------------------------------------------- */
/*                             The arguments Array                            */
/* -------------------------------------------------------------------------- */
/* The arguments object is an array that holds all arguments that were passed over to the function. */

function sum() {
    var total = 0;
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
alert(sum(3, 5, 23, 53, 1, 2)); //87

/* -------------------------------------------------------------------------- */
/*                             The callee Property                            */
/* -------------------------------------------------------------------------- */

function factorial(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * arguments.callee(num - 1);
    }
}
alert(factorial(4)); //24

/* -------------------------------------------------------------------------- */
/*                             The apply Function                             */
/* -------------------------------------------------------------------------- */
/* - Using the apply method we can call a specific function on
a specific object.
- The second argument should be an array that holds the
values we want to passover to the function we call. */

function sum(numX, numY) {
    return numX + numY;
}

function total(numX, numY, numQ, numW) {
    return sum.apply(this, [numX, numY])
        + sum.apply(this, [numQ, numW]);
}
alert(total(1, 2, 3, 4)); // 10

/* -------------------------------------------------------------------------- */
/*                              The call Function                             */
/* -------------------------------------------------------------------------- */
/* The call function is very similar to apply. Instead of
getting the arguments that should be passed over to the
invoked function packed in array we should pass over them
separately.  */

function sum(numX, numY) {
    return numX + numY;
}
function total(numX, numY, numQ, numW) {
    return sum.call(this, numX, numY)
        + sum.call(this, numQ, numW);
}
alert(total(1, 2, 3, 4)); //10

/* -------------------------------------------------------------------------- */
/*                          Single Execution Function                         */
/* -------------------------------------------------------------------------- */

(function () {
    var txt = "hello students!";
    document.write(txt);
})();

/* -------------------------------------------------------------------------- */
/*                      Array into Consecutive Arguments                      */
/* -------------------------------------------------------------------------- */

function sum(a, b, c) {
    let result = a + b + c;
    return result;
}
let numbers = [12, 42, 30];
document.write("sum of all numbers is " + sum(...numbers));

/* -------------------------------------------------------------------------- */
/*                         Parameters Binding to Array                        */
/* -------------------------------------------------------------------------- */

function calculateTax(rate, ...incomes) {
    let total = 0;
    for (let i = 0; i < incomes.length; i++) {
        total += rate * incomes[i];
    }
    return total;
}
document.write("tax is " + calculateTax(25, 80, 100, 120, 20));

/* -------------------------------------------------------------------------- */
/*                               Tail Recursion                               */
/* -------------------------------------------------------------------------- */
/* When defining a recursive function in a strict mode and the
recursive function doesn't need the stack, the JavaScript
engine will optimize the recursive function by turning its code
into a simple loop. */

/* -----//? Since the variables in the previous function layer are not used ---- */

function factorial(number, accumulator = 1) {
    "use strict"; //!<- saving only one layer
    if (number <= 1) return accumulator;
    return factorial(number - 1, number * accumulator);
}
document.write(factorial(100));



/* -------------------------------------------------------------------------- */
/*                                  Closures                                  */
/* -------------------------------------------------------------------------- */
/* 
-Closure is the combination of a function bundled together
(enclosed) with reference to its surrounding state (the lexical
environment).
- In JavaScript, we create a closure whenever we define a
function. When we define a function within another function
then the inner function will hold a reference to the local
variables of the outer one as well as to all the global variables. */

/* -----//? function inside function ---- */

var get_functions = function () {
    var i = 0;
    var vec = new Array();
    while (i < 4) {
        vec[i] = function () { return i * 10; }; //!< the i will stay at 40 when return
        i++;
    }
    return vec;
};
var vector = get_functions();
alert((vector[0]() + vector[1]() + vector[2]() + vector[3]())); //! 40 + 40 + 40 + 40 = 160