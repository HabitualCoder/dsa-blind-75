/**
 * Returns true if t is an anagram of s.
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Map();

  for (const ch of s) {
    counts.set(ch, (counts.get(ch) || 0) + 1);
  }

  for (const ch of t) {
    const current = counts.get(ch);
    if (!current) {
      return false;
    }

    if (current === 1) {
      counts.delete(ch);
    } else {
      counts.set(ch, current - 1);
    }
  }

  return counts.size === 0;
}

module.exports = { isAnagram };
