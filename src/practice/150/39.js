/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  const dfs = (target, index, arr) => {
    if (target === 0) {
      res.push(arr);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        dfs(target - candidates[i], i, [...arr, candidates[i]]);
      }
    }
  };
  dfs(target, 0, []);
  return res;
};
