from typing import List


def max_profit(prices: List[int]) -> int:
    """Return the best profit from a single buy-sell transaction."""

    min_price = float("inf")
    best = 0

    for price in prices:
        if price < min_price:
            min_price = price
            continue

        profit = price - min_price
        if profit > best:
            best = profit

    return best
