/*

Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

Example:

Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output:
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]

*/

/**
 * @param {string[]} strings
 * @return {string[][]}
 */

/**
 *
 * O(nk) time   (for n string, avg length k)
 * O(nk) space
 *
 * 30m
 */
var groupStrings = function(strings) {
  let map = {};
  let res = [];

  for (let i = 0; i < strings.length; i++) {
    let k = getKey(strings[i]);
    map[k] = map[k] || [];
    map[k].push(strings[i]);
  }
  Object.values(map).forEach(group => {
    res.push(group);
  });
  return res;

  function getKey(str) {
    let base = str[0].charCodeAt();
    let key = "";

    for (let i = 0; i < str.length; i++) {
      let dist = str.charCodeAt(i) - base;
      if (dist < 0) dist += 26;
      key += dist + "|";
    }
    return key;
  }
};
