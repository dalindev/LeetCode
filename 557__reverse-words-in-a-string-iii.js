/**
 * @param {string} s
 * @return {string}
 */

// use buildin reverse() for array
var reverseWords = function(s) {
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '') continue;
        
        s[i] = s[i].split('').reverse().join('');
    }
    return s.join(' ');
};


// O(n) time
// O(1) space
var reverseWords = function(s) {
    if (!s || s.length === 0) return s;
    let res = '';
    let left = 0;
    while (left < s.length) {
        if (s[left] === ' ') {
            res += ' ';
            left++;
            continue;
        }
        let right = left+1;
        while (right < s.length && s[right] !== ' ') {
            right++;
        }
        for (let i = right-1; i >= left; i--) {
            res += s[i];
        }
        left = right;
    }
    return res;
};


