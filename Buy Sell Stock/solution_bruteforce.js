/**
 * Brute-force approach checks every possible buy/sell pair.
 * @param {number[]} prices
 * @returns {number}
 */
function maxProfitBruteforce(prices) {
  let best = 0;

  for (let buy = 0; buy < prices.length; buy += 1) {
    for (let sell = buy + 1; sell < prices.length; sell += 1) {
      const profit = prices[sell] - prices[buy];
      if (profit > best) {
        best = profit;
      }
    }
  }

  return best;
}

module.exports = { maxProfitBruteforce };
