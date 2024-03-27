/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return [];
  let res = [];
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    for (let i = top + 1; i <= bottom; i++) res.push(matrix[i][right]);
    if (top < bottom && left < right) {
      for (let i = right - 1; i > left; i--) res.push(matrix[bottom][i]);
      for (let i = bottom; i > top; i--) res.push(matrix[i][left]);
    }

    top++;
    bottom--;
    left++;
    right--;
  }
  return res;
};
