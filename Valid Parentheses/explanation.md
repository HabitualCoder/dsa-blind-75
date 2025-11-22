# Valid Parentheses — Explanation

## Key Idea

Use a stack to track open brackets. Each closing bracket must match the most recent unmatched opening bracket of the same type. Push openings, pop when the current closing bracket matches the top of the stack, and reject early when a mismatch appears.

## Approaches

### 1. Stack with Lookup Map

Maintain a map from closing to opening brackets. Iterate through the string:

1. Push opening brackets on the stack.
2. When a closing bracket appears, ensure the stack is not empty and its top equals the expected opening bracket.
3. Pop on match; fail otherwise.

At the end, the stack must be empty.

- Time: `O(n)`
- Space: `O(n)` in the worst case when the string holds only opening brackets
- This is the standard optimal method.

### 2. Replacement Loop

Repeatedly replace the substrings `"()"`, `"{}"`, and `"[]"` with the empty string until no more replacements occur. If the final string is empty, it was valid. This is easy to implement but less efficient for long inputs.

- Time: Up to `O(n^2)` because each pass may remove only a few characters
- Space: `O(n)` for the interim strings

### 3. Counter-Based Variations (Limited Cases)

If the string contains only one bracket type (e.g., only parentheses), a simple counter suffices: increment on `'('`, decrement on `')'`, and ensure the counter never dips below zero. This trick does not generalize to mixed bracket types.

## Edge Cases and Notes

- An empty string is valid.
- Any odd-length string cannot be valid because brackets come in pairs.
- Fail fast when encountering a closing bracket while the stack is empty.
- Do not forget to check the stack at the end; leftover openings mean the string is invalid.
