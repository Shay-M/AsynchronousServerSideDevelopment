const numbers = [1, -1, 2, 3];
/* -------------------------------------------------------------------------- */
/*                                   filter                                   */
/* -------------------------------------------------------------------------- */
/*
The filter() method creates an array filled with all array elements that pass a test (provided by a function).
filter() does not execute the function for empty array elements.
filter() does not change the original array.
 */



/* const filtered = numbers.filter(function (value) { //! we can convert to => lambda
    return value > 0;//! can remove 'return' bcz we only one val return 
}); 

! removing function key
const filtered = numbers.filter(value => value > 0); //! and can convert to v

 */

const filtered = numbers.filter(n => n > 0);
console.log("filtered: " + filtered); // filtered: 1,2,3

/* -------------------------------------------------------------------------- */
/*                                     map                                    */
/* -------------------------------------------------------------------------- */
/* 
The map() method creates a new array with the results of calling a function for every array element.
The map() method calls the provided function once for each element in an array, in order.
map() does not execute the function for empty elements.
map() does not change the original array.
 */
const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log("html: " + html); // html: <ul><li>1</li><li>2</li><li>3</li></ul>


///////////////////////////////////////////////



const itemsObj = numbers
    .filter(n => n > 0) //* we can not use const filtered
    .map(n => ({ value: n }))//!  obj so need '(' ')'
    .filter(obj => obj.value > 1);

console.log("itemsObj: " + itemsObj);

/* -------------------------------------------------------------------------- */
/*                                   Reduce                                   */
/* -------------------------------------------------------------------------- */
/* 
The reduce() method executes a reducer function for each value of an array.
reduce() returns a single value which is the function's accumulated result.
reduce() does not execute the function for empty array elements.
reduce() does not change the original array.
*/

/* ------------------------------- A naive way ------------------------------ */
const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n in numbers)
    sum += numbers[n];

console.log("sum: " + sum); //5 //*--------> Better why -> using 'Reduce'


const sumReduce = numbers.reduce((accumulator, currentValue) => { // *?accumulator is like sum
    return accumulator + currentValue;
}, 0); //accumulator = 0 started value. we if not he will be 1 

console.log("sumReduce: " + sumReduce);

/* ------------------------------ The best why ------------------------------ */

const sumReduce = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);