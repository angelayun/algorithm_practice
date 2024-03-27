/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let col = 0;
  while (col < strs[0].length) {
    let cur = strs[0][col];
    console.log(cur);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][col] !== cur) {
        debugger;
        return strs[0].substring(0, j);
      }
    }
    col++;
  }
  return strs[0];
};
export default longestCommonPrefix;
