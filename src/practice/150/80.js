/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // fast指向要处理的数据的
  let fast = 0;
  // slow是放真实的数据的
  let slow = 0;
  while (fast < nums.length) {
    // 当前要处理的数据和slow的前一个数据不同  才放进去  slow是开区间 所以是slow-2
    if (!(nums[slow - 2] != null && nums[fast] == nums[slow - 2])) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
export default removeDuplicates;
