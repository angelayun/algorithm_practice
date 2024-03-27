/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const countLive = (i, j) => {
    let live = 0;
    for (const [dx, dy] of dirs) {
      const x = i + dx;
      const y = j + dy;

      if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] % 1 === 1) {
        live++;
      }
    }
    return live;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const live = countLive(i, j);
      if (board[i][j] === 1) {
        if (live < 2 || live > 3) {
          board[i][j] = board[i][j];
        } else if (live === 2 || live === 3) {
          board[i][j] = 2 + board[i][j];
        }
      } else {
        if (live === 3) {
          board[i][j] = 2 + board[i][j];
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = board[i][j] >> 1; // ~~(board[i][j] / 10);
    }
  }
  return board;
};
// TODO 先暂时放一下吧
