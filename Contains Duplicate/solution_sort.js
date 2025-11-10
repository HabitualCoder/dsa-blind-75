/**
 * Sorting-based approach to check for duplicates.
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicateSort(nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 1; i < sorted.length; i += 1) {
    if (sorted[i] === sorted[i - 1]) {
      return true;
    }
  }

  return false;
}

module.exports = { containsDuplicateSort };
