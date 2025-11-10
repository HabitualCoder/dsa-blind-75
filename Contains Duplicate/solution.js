/**
 * Returns true if the array contains any duplicate value.
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
	const seen = new Set();

	for (const value of nums) {
		if (seen.has(value)) {
			return true;
		}

		seen.add(value);
	}

	return false;
}

module.exports = { containsDuplicate };
