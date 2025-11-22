/**
 * Determines whether the provided string has valid bracket pairing.
 * @param {string} s
 * @returns {boolean}
 */
function isValid(s) {
  if (s.length % 2 === 1) {
    return false;
  }

  const stack = [];
  const matching = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  for (const ch of s) {
    if (matching.has(ch)) {
      if (stack.length === 0 || stack[stack.length - 1] !== matching.get(ch)) {
        return false;
      }

      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
}

module.exports = { isValid };
