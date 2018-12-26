/*

	Given a string, find the length of the longest substring without repeating characters.

	Example 1:

	Input: "abcabcbb"
	Output: 3
	Explanation: The answer is "abc", with the length of 3.
	Example 2:

	Input: "bbbbb"
	Output: 1
	Explanation: The answer is "b", with the length of 1.
	Example 3:

	Input: "pwwkew"
	Output: 3
	Explanation: The answer is "wke", with the length of 3.
	             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s || s.length === 0 || s.length === 1) return s.length;

  let max = 0;
  let left = 0;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) > 0) {
      while (map.get(s[i]) > 0) {
        map.set(s[left], map.get(s[left]) - 1);
        left++;
      }
    }
    map.set(s[i], 1);
    max = Math.max(max, i - left + 1);
  }
  return max;
};
/**
 *
 * O(n) time (In the worst case O(2n) each character will be visited twice by i and left)
 * O(k) space (which is length of longest non repeating substring)
 *
 * 10m
 */
