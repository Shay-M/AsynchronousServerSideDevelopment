/* 
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1. 
*/

// https://leetcode.com/problems/fibonacci-number/

/*
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
*/
/* var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    return fib(n-1) + fib(n-2);
}; */
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  function recurse(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    return recurse(n - 1) + recurse(n - 2);
  }

  return recurse(n);
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
