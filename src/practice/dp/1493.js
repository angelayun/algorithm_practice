/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  const n = nums.length;
  const preSum = new Array(n).fill(0);
  const sufSum = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    preSum[i] = nums[i] == 0 ? 0 : (preSum[i - 1] || 0) + 1;
  }
  for (let i = n - 1; i >= 0; i--) {
    sufSum[i] = nums[i] == 0 ? 0 : (sufSum[i + 1] || 0) + 1;
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, (preSum[i - 1] || 0) + (sufSum[i + 1] || 0));
  }
  return ans;
};
export default longestSubarray;
