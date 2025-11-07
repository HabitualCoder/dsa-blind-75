/**
 * Returns indices of the two numbers that add up to the target.
 * @param {number[]} nums
 * @param {number} target
 * @returns {[number, number]}
 */
function twoSum(nums, target) {
	const seen = new Map();

	for (let i = 0; i < nums.length; i += 1) {
		const complement = target - nums[i];

		if (seen.has(complement)) {
			return [seen.get(complement), i];
		}

		seen.set(nums[i], i);
	}

	return [-1, -1];
}

module.exports = { twoSum };
