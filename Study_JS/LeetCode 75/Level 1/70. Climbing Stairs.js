/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

/* Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps */

// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function recurse(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    return recurse(n - 2) + recurse(n - 1);
  }

  return recurse(n);
};

console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));

/// ----------------------------------------------------------------

if (n < 2) return 1;

// previous step: 0
// current step: 1
// ways to climb them:
let [prev_step_ways, cur_step_ways] = [1, 1];

for (let step = 2; step <= n; step++) {
  // current step: step
  // current step ways = previous step ways + pre-previous step ways
  [prev_step_ways, cur_step_ways] = [cur_step_ways, prev_step_ways + cur_step_ways];
}

return cur_step_ways;
