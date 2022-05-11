/* squeeze
Write a function Squeeze(arr1, arr2) that will take 2 arrays of numbers – arr1 & arr2.
The function should delete each number in arr1 that matches in arr2
The function returns the updated arr1.

var arr1 = [88, 44, 32, 30, 31, 19, 74];
var arr2 = [32, 19, 74];
console.log(Squeeze(arr1, arr2)); // [88,44,30,31] */

function Squeeze(arr1, arr2) {
  return arr1.filter((x) => !arr2.includes(x));
}
//
var arr1 = [88, 44, 32, 30, 31, 19, 74];
var arr2 = [32, 19, 74];
console.log(Squeeze(arr1, arr2)); // [88,44,30,31]
