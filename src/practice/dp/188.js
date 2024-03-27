/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const n = prices.length;
  // 第二维是第几次买入卖出
  const dp = new Array(n + 1)
    .fill(0)
    // 第三维 0 表示买入 1 表示卖出
    .map(() => new Array(k + 1).fill(0).map(() => new Array(2).fill(0)));
  for (let i = 0; i <= k; i++) {
    // 买入
    dp[0][i][0] = Number.MIN_SAFE_INTEGER;
    dp[0][i][1] = 0;
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j][0] = Math.max(
        dp[i - 1][j][0],
        // 买入 所以是在上一次卖出的情况下
        dp[i - 1][j - 1][1] - prices[i - 1]
      );
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] + prices[i - 1]);
    }
    max = Math.max(max, dp[i][k][1]);
  }
  return max;
};
