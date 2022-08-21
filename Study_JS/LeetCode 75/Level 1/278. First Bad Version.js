/* You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check.
Since each version is developed based on the previous version,
all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API. */

/* Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version. */

// https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
let isBadVersion = function (version) {
  if (version === 4) return true;

  return false;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1,
      high = n,
      mid;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);

      if (isBadVersion(mid)) high = mid;
      else if (!isBadVersion(mid)) low = mid + 1;
      if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid;
    }
  };
};

console.log(solution(5));
