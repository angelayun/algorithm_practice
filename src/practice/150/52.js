/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const colSet = new Set();
  const rcSet = new Set();
  let res = 0;
  const check = (row, col) => {
    for (let i = 1; i <= row; i++) {
      if (
        rcSet.has(`${row - i}, ${col + i}`) ||
        rcSet.has(`${row - i}, ${col - i}`)
      ) {
        return false;
      }
    }
    return true;
  };
  const backtrack = (row) => {
    if (row === n) {
      res++;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (colSet.has(col)) continue;
      if (!check(row, col)) {
        continue;
      }
      colSet.add(col);
      rcSet.add(`${row},${col}}`);
      backtrack(row + 1);
      colSet.delete(col);
      rcSet.delete(`${row},${col}}`);
    }
  };
  backtrack(0);
  return res;
};
