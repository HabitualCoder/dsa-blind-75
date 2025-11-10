from typing import List


def contains_duplicate_sort(nums: List[int]) -> bool:
    """Return True if any duplicate exists using a sorting strategy."""

    sorted_nums = sorted(nums)

    for i in range(1, len(sorted_nums)):
        if sorted_nums[i] == sorted_nums[i - 1]:
            return True

    return False
