def is_anagram_sort(s: str, t: str) -> bool:
    """Return True if t is an anagram of s using sorting."""

    if len(s) != len(t):
        return False

    return sorted(s) == sorted(t)
