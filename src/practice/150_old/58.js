/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let j = s.length - 1;
  while (j >= 0 && s[j] === " ") j--;
  let i = j;
  while (i >= 0 && s[i] !== " ") i--;
  return j - i;
};
