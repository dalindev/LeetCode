"""
    Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

    Example 1:
    Input: "aba"
    Output: True
    Example 2:
    Input: "abca"
    Output: True
    Explanation: You could delete the character 'c'.
    Note:
    The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
"""


class Solution:
    """
    O(n) time
    O(1) space
    30m

    Runtime: 188 ms, faster than 46.44%
    """

    def validPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        def isPal(lo, hi, canSkip):
            while lo < hi:
                if s[lo] != s[hi]:
                    if not canSkip:
                        return False
                    return isPal(lo+1, hi, False) or isPal(lo, hi-1, False)
                lo += 1
                hi -= 1
            return True

        return isPal(0, len(s)-1, True)


class Solution2:
    """
    O(n) time
    O(n) space
    30m

    Runtime: 72 ms, faster than 99.89%
    """

    def validPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        r = s[::-1]
        if s == r:
            return True

        for idx in range(len(s)):
            if s[idx] != r[idx]:
                break

        # skip by 1 will cover the case of two possible delete
        for k in idx, len(s)-idx-1:
            x = s[:k]+s[k+1:]
            if x == x[::-1]:
                return True

        return False


class Solution3:
    """
    O(n) time
    O(n) space
    30m

    Runtime: 84 ms, faster than 95.76%
    """

    def validPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        r = s[::-1]
        if s == r:
            return True

        idx = 0
        while idx < len(s):
            if s[idx] != r[idx]:
                break
            idx += 1

        # skip by 1 will cover the case of two possible delete
        for k in idx, len(s)-idx-1:
            x = s[:k]+s[k+1:]
            if x == x[::-1]:
                return True

        return False
