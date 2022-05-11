/* Even-Elements-Average
Write a function that will take an array of numbers, and will return the average of all
numbers in the array that are prime number.
Prime number is - a natural number greater than 1 that has no positive divisors other
than 1 and itself */

function average(array) {
  let sum = 0;
  let count = 0;
  //   const averagePrim = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      sum += array[i];
      count++;
    }
  }
  return sum / count;
}

function isPrime(num) {
  if (num == 1) return false;
  if (num == 2) return false;
  if (num % 2 == 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i++) if (num % i == 0) return false;
  return true;
}

var v = [88, 44, 32, 30, 31, 19, 74];
console.log(average(v)); // 25.0
