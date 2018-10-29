/*

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/**
 *
 *	Time Complexity: O(NKlogK),
 *	where N is the length of strs,
 *	and K is the maximum length of a string in strs.
 *
 *	Space Complexity: O(NK), the total information content stored in ans.
 *
 *  15m
 */
 var groupAnagrams = function(strs) {
    let map = {};
    let res = [];

    for (let i = 0; i < strs.length; i++) {
        let key = hashKeyFromStr(strs[i]);
        map[key] = map[key] || [];
        map[key].push(strs[i]);
    }
    for (let arr of Object.values(map)) {
        res.push(arr);
    }

    return res;

    function hashKeyFromStr (str) {
        return str.split('').sort().join('');
    }
};


/**
 *
 * O(NK) time
 * O(NK) space
 *
 * 30m (you need to get the primes list...)
 */
var groupAnagrams = function(strs) {
    const map = new Map;
    const primes = [2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107];

    strs.forEach(str => {
        let key = 1;
        for (let i = 0; i < str.length; i++) {
            key = primes[str.charCodeAt(i) - 'a'.charCodeAt()] * key;
        }
        if (map.has(key)) {
            let group = map.get(key);
            group.push(str);
        } else {
            map.set(key, [str]);
        }
    })

    return [...map.values()];
};



