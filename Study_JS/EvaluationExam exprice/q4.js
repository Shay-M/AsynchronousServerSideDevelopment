/* Zero Trim
Write a function which trims multiple zero's sequences to a single zero digit. The
return value is the updated array. You are not allowed to use another array,
and you need to implement it with one pass over the array. In other words, each
element in the array should change its index only once during the program.

var w = [1,2,0,0,0,0,5,7,-6,0,0,0,8,0,0];
var n = zeroTrim(w);
console.log(n); //print [1,2,0,5,7,-6,0,8,0]

Best implementation should be in complexity of O(n), i.e., with one pass
over the array
 */

function zeroTrim(array) {
  //let trimArr = [];
  let flag = false;
  //   array.push('#');
  let num = 0;

  let lenArr = array.length;

  for (let i = 0; i < lenArr; i++) {
    num = array.shift();
    // console.log(num);

    if (num === 0) {
      if (flag === false) {
        flag = true;
        array.push(num);
      }
    } else {
      flag = false;
      array.push(num);
    }
  }

  return array;
}

var w = [1, 2, 0, 0, 0, 0, 5, 7, -6, 0, 0, 0, 8, 0, 0];
var n = zeroTrim(w);
console.log(n); //print [1,2,0,5,7,-6,0,8,0]

// function zeroTrim(array) {
//     let trimArr = [];
//     let flag = false;
//     for (let i = 0; i < array.length; i++) {
//       // console.log('array[i] ' + array[i] + '  flag: ' + flag);

//       if (array[i] === 0) {
//         if (flag === false) {
//           flag = true;
//           trimArr.push(array[i]);
//         }
//       } else {
//         flag = false;
//         trimArr.push(array[i]);
//       }
//     }

//     return trimArr;
//   }
