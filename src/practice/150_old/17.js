/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];
  const dfs = (str, i) => {
    if (i === digits.length) {
      result.push(str);
      return;
    }
    const letters = map[digits[i]];
    for (let j = 0; j < letters.length; j++) {
      dfs(str + letters[j], i + 1);
    }
  };
  dfs("", 0);
  return result;
};
