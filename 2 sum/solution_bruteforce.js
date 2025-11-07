/**
 * Brute-force search evaluates every pair of indices.
 * @param {number[]} nums
 * @param {number} target
 * @returns {[number, number]}
 */
function twoSumBruteforce(nums, target) {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

module.exports = { twoSumBruteforce };
