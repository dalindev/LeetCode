/*

383. Ransom Note
Easy
4.6K
464
Companies
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
Accepted
933.6K
Submissions
1.6M
Acceptance Rate
59.8%
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  if (!ransomNote || !magazine) return false

  let map = new Map()
  for (let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], map.has(magazine[i]) ? map.get(magazine[i]) + 1 : 1)
  }
  for (let i = 0; i < ransomNote.length; i++) {
    let curr = ransomNote[i]
    if (!map.has(curr) || map.get(curr) === 0) return false
    map.set(curr, map.get(curr) - 1)
  }
  return true
}
