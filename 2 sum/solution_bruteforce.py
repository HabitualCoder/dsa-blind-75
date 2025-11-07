from typing import List


def two_sum_bruteforce(nums: List[int], target: int) -> List[int]:
    """Brute-force search over all index pairs."""

    n = len(nums)

    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]

    return [-1, -1]
