/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
    let left = i + 1,
      right = nums.length - 1;
    if (nums[i] + nums[right] + nums[right - 1] < 0) continue;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        while (left < right && nums[left] === nums[left + 1]) left++;
        left++;
      } else if (sum > 0) {
        while (left < right && nums[right] === nums[right - 1]) right--;
        right--;
      }
    }
  }
  return ans;
};
