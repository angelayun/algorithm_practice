/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (nums[j] == nums[j + 1] - 1) {
      j++;
    }
    if (i == j) {
      res.push(nums[i] + "");
    } else {
      res.push(nums[i] + "->" + nums[j]);
      i = j;
    }
  }
  return res;
};
