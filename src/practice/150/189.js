/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // a大 b小
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const n = nums.length;
  k = k % n;
  debugger;
  let count = gcd(n, k);
  for (let i = 0; i < count; i++) {
    // 上一个的值
    let pre = nums[i];
    // 当前索引位置
    let j = i;
    while (true) {
      let nextIndex = (j + k) % n;
      let nextVal = nums[nextIndex];
      nums[nextIndex] = pre;
      pre = nextVal;
      j = nextIndex;
      if (j === i) {
        break;
      }
    }
  }
  return nums;
};
export default rotate;
