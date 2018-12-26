/**

    Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

    Example 1:

    Input: "Hello"
    Output: "hello"
    Example 2:

    Input: "here"
    Output: "here"
    Example 3:

    Input: "LOVELY"
    Output: "lovely"

 */

/**
 *
 * O(n) time
 * O(n) space
 * Runtime: 48 ms, faster than 100.00%
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  if (!str) return str;
  // Char Code A-Z => 65 - 90, a-z 97 - 122
  // A -> a need + 32 to char code of A
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let cCode = str[i].charCodeAt(0);
    if (65 <= cCode && cCode <= 90) {
      res += String.fromCharCode(cCode + 32);
    } else {
      res += str[i];
    }
  }
  return res;
};
