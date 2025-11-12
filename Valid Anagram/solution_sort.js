/**
 * Sorting-based anagram check.
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagramSort(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sort = (str) => str.split("").sort().join("");
  return sort(s) === sort(t);
}

module.exports = { isAnagramSort };
