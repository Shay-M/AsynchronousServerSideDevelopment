function firstRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
      return str.charAt(i);
    }
  }
  return 'no results found';
}
console.log(firstRepeatingCharacter('shay shay'));
// let namem = 'shay shay';

// console.log(namem.indexOf('a'));
// console.log(namem.lastIndexOf('a'));

// function ror(w) {
//   return [w.pop()].concat(w);
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.push(44);
// // arr = ror(arr);
// console.log(arr);

// Javascript program to find a triplet
// returns true if there is triplet with sum equal
// to 'sum' present in A[]. Also, prints the triplet
function find3Numbers(A, arr_size, sum) {
  let l, r;

  // Fix the first element as A[i]
  for (let i = 0; i < arr_size - 2; i++) {
    // Fix the second element as A[j]
    for (let j = i + 1; j < arr_size - 1; j++) {
      // Now look for the third number
      for (let k = j + 1; k < arr_size; k++) {
        if (A[i] + A[j] + A[k] == sum) {
          console.log('Triplet is ' + A[i] + ', ' + A[j] + ', ' + A[k]);
          return true;
        }
      }
    }
  }

  // If we reach here, then no triplet was found
  return false;
}

/* Driver code */

let A = [1, 4, 45, 6, 10, 8];
A = A.sort();
console.log(A);
// let sum = 22;
// let arr_size = A.length;
// console.log(find3Numbers(A, arr_size, sum));
