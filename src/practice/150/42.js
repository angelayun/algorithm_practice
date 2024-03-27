/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = height[left],
    rightMax = height[right];

  let ans = 0;
  while (left <= right) {
    if (height[left] < height[right]) {
      ans += leftMax - height[left];
      leftMax = Math.max(leftMax, height[left]);
      left++;
    } else {
      ans += rightMax - height[right];
      rightMax = Math.max(rightMax, height[right]);
      right--;
    }
  }
  return ans;
};
