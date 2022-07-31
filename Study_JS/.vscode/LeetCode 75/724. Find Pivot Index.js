var pivotIndex = function (nums) {
  let totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum -= nums[i];

    if (leftSum == totalSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

nums = [1, 7, 3, 6, 5, 6];
nums = [-1, -1, -1, -1, -1, 0];
nums = [2, 1, -1];
nums = [1, 2, 3];

console.log(pivotIndex(nums));
