/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const res = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};
