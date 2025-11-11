from typing import List


def max_profit_bruteforce(prices: List[int]) -> int:
    """Return the max profit by checking every buy/sell pair."""

    best = 0

    for buy in range(len(prices)):
        for sell in range(buy + 1, len(prices)):
            profit = prices[sell] - prices[buy]
            if profit > best:
                best = profit

    return best
