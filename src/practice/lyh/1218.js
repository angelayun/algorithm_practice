/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i] + difference) || 0);
  }
};
