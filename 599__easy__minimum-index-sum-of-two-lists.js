/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */

/**
 *
 * O(n) time
 * O(n) space
 *
 * 10m
 */

var findRestaurant = function(list1, list2) {
    let map = {};
    let minIdx = Infinity;
    let res = [];
    for (let i = 0; i < list1.length; i++) {
        map[list1[i]] = i;
    }
    for (let i = 0; i < list2.length; i++) {
        if (map[list2[i]] !== undefined) {
            let tmp = map[list2[i]] + i;
            if (tmp < minIdx) {
                minIdx = tmp;
                res = [list2[i]];
            } else if (tmp === minIdx) {
                res.push(list2[i]);
            }
        }
    }
    return res;
};
