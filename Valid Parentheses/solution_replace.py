def is_valid_replace(s: str) -> bool:
    """Return True if the bracket string is valid using iterative replacement."""

    previous = None
    current = s

    while previous != current:
        previous = current
        current = current.replace("()", "").replace("{}", "").replace("[]", "")

    return current == ""
