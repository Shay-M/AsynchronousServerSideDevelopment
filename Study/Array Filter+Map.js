const numbers = [1, -1, 2, 3];

/* const filtered = numbers.filter(function (value) { //! we can convert to => lambda
    return value > 0;//! can remove return bcz we only one val return 
}); 

! removing function key
const filtered = numbers.filter(value => value > 0); //! and can convert to v

 */

//* good filter
const filtered = numbers.filter(n => n > 0);
console.log(filtered);

///////////////////////////////////////////////

const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);

///////////////////////////////////////////////


const itemsObj = numbers
    .filter(n => n > 0) //* we can not use const filtered
    .map(n => ({ value: n }))//!  obj so need ()
    .filter(obj => obj.value > 1);


console.log(itemsObj);