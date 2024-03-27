/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const row = new Array(9).fill(0).map(() => new Set());
  const col = new Array(9).fill(0).map(() => new Set());
  const box = new Array(9).fill(0).map(() => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") continue;
      const num = board[i][j] - 1;
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (row[i].has(num) || col[j].has(num) || box[boxIndex].has(num)) {
        return false;
      }
      row[i].add(num);
      col[j].add(num);
      box[boxIndex].add(num);
    }
  }
  return true;
};
