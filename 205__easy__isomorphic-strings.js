/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 *
 * O(n) time
 * O(n) space
 *
 * 10m
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let mapT = {};
  let mapS = {};

  for (let i = 0; i < s.length; i++) {
    // s map to t (two way map)
    if (mapS[s[i]] === undefined && mapT[t[i]] === undefined) {
      mapS[s[i]] = t[i];
      mapT[t[i]] = s[i];
    } else if (mapS[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
};
