/**
 * @param {string} s
 * @return {number}
 */

/**
 *
 * O(n) time
 * O(n) space
 *
 * 10m
 */
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if ( map[s[i]] === 1 ) return i;
    }
    return -1;
};

