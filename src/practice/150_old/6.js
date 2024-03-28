/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let arr = new Array(numRows).map((item) => []);
  let i = 0;
  let flag = 1;
  for (let item of s) {
    arr[i].push(item);
    i += flag;
    if (i === numRows - 1 || i === 0) {
      flag = -flag;
    }
  }
  return arr.flat().join("");
};
