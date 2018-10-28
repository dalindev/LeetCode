/**
 * @param {string} str
 * @returns {string}
 */

/**
 *
 * O(n) time
 * O(1) space
 *
 */
var reverseWords = function(str) {
    str = str.trim().replace(/\s\s+/g, ' ');
    str = str.split(' ');
    let lo = 0;
    let hi = str.length - 1;
    while (lo < hi) {
        [str[lo], str[hi]] = [str[hi], str[lo]];
        lo++;
        hi--;
    }
    return str.join(' ');
};
