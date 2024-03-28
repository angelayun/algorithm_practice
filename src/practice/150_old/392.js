/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) {
      i++;
    }
    if (i === s.length) {
      return true;
    }
  }
  return false;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sLen = s.length,
    tLen = t.length;
  const dp = new Array(sLen + 1)
    .fill(0)
    .map(() => new Array(tLen + 1).fill(false));
  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= tLen; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[sLen][tLen] === sLen;
};
