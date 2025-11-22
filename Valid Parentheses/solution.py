from typing import List


def is_valid(s: str) -> bool:
    """Return True if the string of brackets is valid."""

    if len(s) % 2 == 1:
        return False

    stack: List[str] = []
    matching = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for ch in s:
        if ch in matching:
            if not stack or stack[-1] != matching[ch]:
                return False
            stack.pop()
        else:
            stack.append(ch)

    return not stack
