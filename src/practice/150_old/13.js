/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = map.get(s[i]);
    if (i < s.length - 1 && cur < map.get(s[i + 1])) {
      res -= cur;
    } else {
      res += cur;
    }
  }
  return res;
};
