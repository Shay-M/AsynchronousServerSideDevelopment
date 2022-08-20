/* Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index.
Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/* Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4 */

// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (target < nums[mid]) high = mid - 1;
    else if (target > nums[mid]) low = mid + 1;
    else return mid;
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
