/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function (nums) {
  let n = nums.length;
  const prefix = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i] = (prefix[i - 1] || 0) + nums[i];
  }
  let right = 0;
  // debugger;
  let ans = 0;
  for (let i = n - 1; i > 0; i--) {
    if (nums[i] === 1) {
      right++;
    }
    if (prefix[i - 1] === right) {
      ans++;
    }
  }
  if (ans == 0 && right + nums[0] == 1) return 1;
  return ans;
};
export default numberOfGoodSubarraySplits;
