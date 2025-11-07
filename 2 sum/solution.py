from typing import List


def two_sum(nums: List[int], target: int) -> List[int]:
	"""Return indices of the two numbers that sum to target."""

	seen = {}

	for idx, value in enumerate(nums):
		complement = target - value

		if complement in seen:
			return [seen[complement], idx]

		seen[value] = idx

	return [-1, -1]
