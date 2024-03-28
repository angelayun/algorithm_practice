/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = new Map();
  for (let c of t) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  let need = map.size;
  let left = 0,
    right = 0;
  let res = "";
  while (right < s.length) {
    let c = s[right];
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) need--;
    }

    while (need === 0) {
      c = s[left];
      if (!map.has(c)) {
        left++;
        continue;
      }
      if (map.get(c) === 0) need++;
      map.set(c, map.get(c) + 1);
      if (res === "" || right - left + 1 < res.length) {
        res = s.substring(left, right + 1);
      }
      left++;
    }
    right++;
  }

  return res;
};
