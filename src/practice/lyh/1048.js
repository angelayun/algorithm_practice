/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  let map = new Map();
  for (let word of words) {
    map.set(word, 1);
  }
  words.sort((a, b) => a.length - b.length);
  let res = 1;
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      let temp = word.slice(0, i) + word.slice(i + 1);
      if (map.has(temp)) {
        map.set(word, Math.max(map.get(word), map.get(temp) + 1));
        res = Math.max(res, map.get(word));
      }
    }
  }
  return res;
};
