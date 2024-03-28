const bfs = () => {
  let arr = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ];
  let row = 5,
    col = 5;
  let queue = [[0, 0, [[0, 0]]]];
  arr[0][0] = 1;
  let direction = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (queue.length) {
    let size = queue.length;
    let nextQueue = [];
    for (let i = 0; i < size; i++) {
      let [x, y, path] = queue[i];
      if (x == row - 1 && y == col - 1) {
        // console.log(path);
        for (let [xx, yy] of path) {
          console.log(`(${xx},${yy})`);
        }
        break;
      }
      for (let [i, j] of direction) {
        let ii = i + x,
          jj = j + y;
        if (ii < 0 || ii >= row || jj < 0 || jj >= col || arr[ii][jj] == 1)
          continue;
        path.push([ii, jj]);
        nextQueue.push([ii, jj, path.concat()]);
        path.pop();
        arr[ii][jj] = 1;
      }
    }
    queue = nextQueue;
    debugger;
  }
};
export default bfs;
