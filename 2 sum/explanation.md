# Two Sum — Explanation

## Key Idea

We need two indices `i` and `j` such that `nums[i] + nums[j] == target`. Because each input guarantees exactly one valid pair and elements cannot be reused, the problem reduces to finding a complementary value for every element we inspect.

## Approaches

### 1. Hash Map (One Pass)

Maintain a dictionary from value to index while scanning the array once. For each number `x`, compute the complement `target - x`. If the complement already exists in the dictionary, return its stored index together with the current index. Otherwise, record `x` in the dictionary and continue.

- Time: `O(n)`
- Space: `O(n)` in the worst case
- Works on unsorted arrays and is the most practical option.

### 2. Hash Map (Two Pass)

First build a dictionary mapping each value to its index. In a second pass, check for each element whether the complement exists and is stored at a different index. This is still `O(n)` time and space, but it separates construction and lookup.

### 3. Sorting + Two Pointers

Create an array of value-index pairs, sort by value, then place pointers at both ends. Move the pointers inward depending on how the current sum compares to the target. This approach takes `O(n log n)` time due to the sort but only `O(1)` additional space beyond the copy of pairs. It is useful if sorting is acceptable or if you already have data sorted.

### 4. Brute Force

Check every pair `(i, j)` with nested loops until a match is found. This is easy to implement but runs in `O(n^2)` time with `O(1)` extra space.

## Edge Cases and Notes

- Duplicate values are allowed; use indices to distinguish them.
- Negative numbers and zero are valid inputs.
- Because the prompt promises exactly one solution, it is safe to return as soon as a valid pair is discovered.
- For interview settings, the one-pass hash map solution is the preferred optimal approach.
