const numbers = [1, -1, 2, 3];

/* const filtered = numbers.filter(function (value) { //! we can convert to => lambda
    return value > 0;//! can remove return bcz we only one val return 
}); 

! removing function key
const filtered = numbers.filter(value => value > 0); //! and can convert to v

 */

//* good!

const filtered = numbers.filter(n => n > 0);


console.log(filtered);