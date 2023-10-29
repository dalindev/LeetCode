/*

242. Valid Anagram
Easy
10.9K
341
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

Accepted
2.7M
Submissions
4.3M
Acceptance Rate
63.4%
*/

function isAnagram(s: string, t: string): boolean {
  if (!s || !t || s.length !== t.length) return false

  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], 1 + (map.get(s[i]) ?? 0))
  }
  for (let i = 0; i < s.length; i++) {
    if (!map.has(t[i]) || map.get(t[i]) <= 0) return false
    map.set(t[i], map.get(t[i]) - 1)
  }
  return true
}
