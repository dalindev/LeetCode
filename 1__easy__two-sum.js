/**
 * @param
 * @return
 */

/**
 *
 * O(n) time
 * O(n) space
 *
 * 5m
 */
var twoSum = function(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if ( map[nums[i]] !== undefined ) return [map[nums[i]], i];
        map[target - nums[i]] = i;
    }
};


var twoSum = function(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return [map.get(nums[i]), i];
        map.set(target - nums[i], i);
    }
};