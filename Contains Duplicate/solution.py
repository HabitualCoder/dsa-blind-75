from typing import List


def contains_duplicate(nums: List[int]) -> bool:
	"""Return True if any value appears more than once."""

	seen = set()

	for value in nums:
		if value in seen:
			return True

		seen.add(value)

	return False
