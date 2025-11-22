# Valid Parentheses

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

A string is valid if:

- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## Examples

**Example 1**

- Input: `s = "()"`
- Output: `true`

**Example 2**

- Input: `s = "()[]{}"`
- Output: `true`

**Example 3**

- Input: `s = "(]"`
- Output: `false`

**Example 4**

- Input: `s = "([])"`
- Output: `true`

**Example 5**

- Input: `s = "([)]"`
- Output: `false`
