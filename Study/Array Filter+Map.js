const numbers = [1, -1, 2, 3];
/* -------------------------------------------------------------------------- */
/*                                   filter                                   */
/* -------------------------------------------------------------------------- */

/* const filtered = numbers.filter(function (value) { //! we can convert to => lambda
    return value > 0;//! can remove return bcz we only one val return 
}); 

! removing function key
const filtered = numbers.filter(value => value > 0); //! and can convert to v

 */

const filtered = numbers.filter(n => n > 0);
console.log("filtered: " + filtered);

/* -------------------------------------------------------------------------- */
/*                                     map                                    */
/* -------------------------------------------------------------------------- */

const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log("html: " + html);

///////////////////////////////////////////////


const itemsObj = numbers
    .filter(n => n > 0) //* we can not use const filtered
    .map(n => ({ value: n }))//!  obj so need ()
    .filter(obj => obj.value > 1);

console.log("itemsObj: " + itemsObj);

/* -------------------------------------------------------------------------- */
/*                                   Reduce                                   */
/* -------------------------------------------------------------------------- */

let sum = 0;
for (let n in numbers)
    sum += n;

console.log("sum: " + sum); //? why get sum: 00123

//*--------> Better why -> using Reduce

const sumReduce = numbers.reduce((accumulator, currentValue) => { // accumulator is like sum
    return accumulator + currentValue;
}, 0); //accumulator = 0 we if not he will be 1 

console.log("sumReduce: " + sumReduce);


//* The best why :  const sumReduce = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);