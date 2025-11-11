# Best Time to Buy and Sell Stock — Explanation

## Key Idea

We need the maximum difference `prices[j] - prices[i]` with `j > i`. Track the minimum price seen so far as we scan the array and compute the best profit at each step by selling at the current price.

## Approaches

### 1. Single Pass with Running Minimum

Iterate over `prices`, maintaining the lowest price seen so far. At each day, compute the potential profit by selling today and update the maximum profit accordingly. Return the best profit discovered.

- Time: `O(n)`
- Space: `O(1)`
- This is the optimal strategy.

### 2. Dynamic Programming Perspective

Track two states per day: the maximum profit holding a stock and not holding a stock. This reduces to the same logic as the single-pass approach but can feel more familiar if you are extending to variations involving multiple transactions.

- Time: `O(n)`
- Space: `O(1)` when compressed

### 3. Brute Force (for completeness)

Check every pair `(buy, sell)` with buy before sell and compute the maximum difference. This demonstrates correctness but is too slow for large inputs.

- Time: `O(n^2)`
- Space: `O(1)`

## Edge Cases and Notes

- If the array has fewer than two prices, return `0` because no transaction is possible.
- The best profit can be `0` if prices decrease monotonically; never return a negative number.
- Do not update the minimum price and profit in the wrong order—first compute the profit versus the current minimum, then update the minimum with the current price.
