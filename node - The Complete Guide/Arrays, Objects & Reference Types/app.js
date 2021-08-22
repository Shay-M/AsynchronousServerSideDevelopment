
var person = {
    name: 'dan',
    age: 22,
    favoritesFood: ['fish', 'banana']
};


var secondPerson = person; //not good copy
person.name = "not dan"

console.log(secondPerson); // name: 'not dan' ,we not copy obj
// !we see both names change

/* ----------------------------------- // ----------------------------------- */
person.name = "dan" // resat the name
/* //?------------------------ this why to copy ----------------------------------- */

var secondPersonCopy = Object.assign({}, person); // now copy
person.name = "not dan"

console.log(secondPersonCopy);

/* //?------------ but what happens with the array of favoritesFood ------------ */

person.favoritesFood.push("dog");

console.log("secondPerson.favoritesFood: " + secondPerson.favoritesFood); //favoritesFood: [ 'fish', 'banana', 'dog' ]
//!we see that dog in food...
/* //?------------------------ this why to copy ----------------------------------- */

var copyFavoritesFood = secondPerson.favoritesFood.slice();
person.favoritesFood.push("dog2");
console.log(copyFavoritesFood);

//https://lodash.com/docs/#cloneDeep


/* -------------------------------------------------------------------------- */
/*                                destructuring                               */
/* -------------------------------------------------------------------------- */

const printName = ({ name }) => {
    console.log("name: " + name); // name: not dan
};

printName(person);

//-----------------

const { name, age } = person;
console.log(name, age); // not dan 22

//-----------------

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); //Sports Cooking
