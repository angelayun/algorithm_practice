/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let farthest = 0;
  let end = 0;
  let jumps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest === i) return -1;
    if (i === end) {
      jumps++;
      end = farthest;
    }
  }
  return jumps;
};
export default jump;
