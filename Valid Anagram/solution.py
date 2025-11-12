from collections import Counter


def is_anagram(s: str, t: str) -> bool:
    """Return True if t is an anagram of s."""

    if len(s) != len(t):
        return False

    return Counter(s) == Counter(t)
