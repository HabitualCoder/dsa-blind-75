/**
 * Computes the maximum profit from a single buy-sell transaction.
 * @param {number[]} prices
 * @returns {number}
 */
function maxProfit(prices) {
  let minPrice = Infinity;
  let best = 0;

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
      continue;
    }

    const profit = price - minPrice;
    if (profit > best) {
      best = profit;
    }
  }

  return best;
}

module.exports = { maxProfit };
