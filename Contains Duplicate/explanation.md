# Contains Duplicate — Explanation

## Key Idea

We must determine whether any value occurs at least twice. Because the order of elements does not matter, we focus on tracking whether we have already encountered a value while scanning the array.

## Approaches

### 1. Hash Set Scan

Iterate through `nums`, storing each value in a set. Before inserting a value, check whether it already exists in the set. If the value is present, return `true`. If the loop completes without duplicates, return `false`.

- Time: `O(n)` on average
- Space: `O(n)` for the set
- Works for any data order; this is the preferred optimal approach.

### 2. Sorting + Linear Scan

Make a copy of `nums`, sort it, then traverse once looking for consecutive equal elements. If duplicates exist, they become adjacent after sorting.

- Time: `O(n log n)` due to sorting
- Space: `O(1)` to `O(n)` depending on the sorting implementation
- Useful when mutation of the input and sorting are acceptable or if the data is already sorted.

### 3. Frequency Map

Count occurrences with a hash map keyed by value. Return `true` when any count exceeds one. This mirrors the set approach but keeps explicit counts, which can be helpful if frequency data is useful for downstream logic.

### 4. Bitset / Boolean Array (Special Cases)

If the integer range is known and small, a fixed-size boolean array or bitset can track seen values in `O(1)` time with low memory. This is only practical when value bounds are tight.

## Edge Cases and Notes

- Arrays of length `0` or `1` cannot contain duplicates, so return `false` directly.
- Negative numbers and large positive integers are valid inputs; hash-based methods handle them naturally.
- For streaming data, maintain a set incrementally and short-circuit once a repeat appears.
- Avoid reusing the same set instance across calls unless it is explicitly cleared, as stale data causes incorrect results.
