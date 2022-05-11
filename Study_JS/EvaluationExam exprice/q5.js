/* Change element to be the following maximal one
Write a function which gets and array of numbers and replaces every element
with the next greatest element on the right side in the array (don't swap, replace).
It replaces the last element with 0 as there no element on the right side of it.

var w = [6, 7, 4, 3, 5, 2];
var n = replaceWithNextMax(w);
console.log(n); //print [7, 5, 5, 5, 2, 0]
You should implement it with one pass over the array (usually using one
loop only) */

function replaceWithNextMax(array) {
  let TheRighter = array[array.length - 1];

  array[array.length - 1] = 0;

  //   array[array.length - 1] = 0;

  for (let i = array.length - 2; i >= 0; i--) {
    let stored = array[i];
    array[i] = TheRighter;

    if (TheRighter < stored) {
      TheRighter = stored;
    }
  }
  return array;
}

var w = [6, 7, 4, 3, 5, 2];
var n = replaceWithNextMax(w);
console.log(n); //print [7, 5, 5, 5, 2, 0]

///

// function replaceWithNextMax(array) {
//     const newArr = [0];
//     let TheRighter = array[array.length - 1];

//     //   array[array.length - 1] = 0;

//     for (let i = array.length - 2; i >= 0; i--) {
//       // console.log(TheRighter);

//       newArr.unshift(TheRighter);
//       if (TheRighter < array[i]) {
//         TheRighter = array[i];
//       }
//     }
//     return newArr;
//   }

//   var w = [6, 7, 4, 3, 5, 2];
//   var n = replaceWithNextMax(w);
//   console.log(n); //print [7, 5, 5, 5, 2, 0]
