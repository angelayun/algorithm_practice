/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1;
  let res = [];
  let j = nums.length - 1;
  while (left <= right) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      res[j] = nums[right] ** 2;
      right--;
    } else {
      res[j] = nums[left] ** 2;
      left++;
    }
    j--;
  }
  return res;
};
