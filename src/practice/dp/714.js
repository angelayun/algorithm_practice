/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  // 0: 持有股票 1: 不持有股票
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));

  dp[0][0] = -prices[0];
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
  }
  return dp[n - 1][1];
};
