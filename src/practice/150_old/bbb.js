const test = (str1, str2) => {
  str1 = "abcdefghijklmnop";
  str2 = "abcsafjklmnopqrstuvw";
  let n = str1.length,
    m = str2.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  let maxLen = 0,
    start = 0;
  for (let i = 1; i <= n; i++) {
    if (str1[i - 1] == str2[0]) {
      dp[i][1] = 1;
      maxLen = 1;
      start = i;
    }
  }
  for (let j = 1; j <= m; j++) {
    if (str2[j - 1] == str1[0]) {
      dp[1][j] = 1;
      maxLen = 1;
      start = 0;
    }
  }
  debugger;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i][j]);
        if (dp[i][j] > maxLen) {
          maxLen = dp[i][j];
          start = i;
        }
      }
    }
  }
  console.log(str2.substr(start, maxLen));
};
export default test;
