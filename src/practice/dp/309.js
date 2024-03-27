/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  // 0 表示买入 1表示卖出 2表示冷冻期
  const dp = new Array(n).fill(0).map(() => new Array(3).fill(0));
  dp[0][0] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    dp[i][2] = dp[i - 1][1];
  }
  return Math.max(dp[n - 1][1], dp[n - 1][2]);
};
