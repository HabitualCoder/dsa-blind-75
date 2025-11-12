# Valid Anagram — Explanation

## Key Idea

Two strings are anagrams if they contain the same characters with identical frequencies. Comparing character counts provides a direct check.

## Approaches

### 1. Hash Map / Frequency Counter

Count characters in `s` using a hash map, then decrement counts while scanning `t`. If any character is missing or a count drops below zero, return `false`; if all counts become balanced, return `true`. A symmetric alternative is to use two separate counts and compare dictionaries.

- Time: `O(n)` where `n` is the length of the strings
- Space: `O(1)` for fixed alphabets such as lowercase letters; `O(k)` for general Unicode characters
- Works efficiently without sorting and is easy to adapt to different character sets.

### 2. Sorting Comparison

Sort both strings and compare them directly. Equal sorted representations imply an anagram match.

- Time: `O(n log n)` due to sorting
- Space: `O(n)` depending on the sorting algorithm
- Straightforward but slower than the counting method.

### 3. Fixed-Size Array Counter

If the input is guaranteed to be lowercase English letters, use an array of size 26 instead of a hash map. Increment counts for `s`, decrement for `t`, and ensure the array returns to all zeros.

- Time: `O(n)`
- Space: `O(1)`
- Slightly faster in practice thanks to contiguous memory.

## Edge Cases and Notes

- When the strings differ in length, return `false` immediately.
- Consider case sensitivity: classic LeetCode framing treats strings as lowercase letters; adjust counting logic if you must handle case-insensitive comparisons.
- Unicode characters still work with hash maps; just avoid assuming a fixed alphabet size.
- If the strings are extremely long, avoid copying them through repeated concatenation or sorting to maintain efficiency.
