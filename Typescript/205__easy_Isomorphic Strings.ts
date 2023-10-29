/* 

205. Isomorphic Strings
Easy
7.8K
1.7K
Companies
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
Accepted
1M
Submissions
2.4M
Acceptance Rate
43.5%

*/

function isIsomorphic(s: string, t: string): boolean {
  if (!s || !t || s.length !== t.length) return false
  // index and reverse index
  const mapS = new Map()
  const mapT = new Map()
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[t]) continue
    if (
      (mapS.has(s[i]) && mapS.get(s[i]) !== t[i]) ||
      (mapT.has(t[i]) && mapT.get(t[i]) !== s[i])
    )
      return false
    mapS.set(s[i], t[i])
    mapT.set(t[i], s[i])
  }
  return true
}
