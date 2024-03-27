/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += nums[j];
      arr.push(sum);
    }
  }
  arr.sort((a, b) => a - b);
  let res = 0;
  for (let i = left - 1; i < right; i++) {
    res += arr[i];
  }
  return res;
};
export default rangeSum;
