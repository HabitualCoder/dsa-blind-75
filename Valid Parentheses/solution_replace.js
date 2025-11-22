/**
 * Iterative replacement strategy for validating parentheses strings.
 * @param {string} s
 * @returns {boolean}
 */
function isValidReplace(s) {
  let prev = null;
  let current = s;

  while (prev !== current) {
    prev = current;
    current = current.replace(/\(\)/g, "").replace(/\{\}/g, "").replace(/\[\]/g, "");
  }

  return current.length === 0;
}

module.exports = { isValidReplace };
