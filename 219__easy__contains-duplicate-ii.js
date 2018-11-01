/*

    Given an array of integers and an integer k,
    find out whether there are two distinct indices i and j
    in the array such that nums[i] = nums[j] and
    the absolute difference between i and j is at most k.

    Example 1:

    Input: nums = [1,2,3,1], k = 3
    Output: true
    Example 2:

    Input: nums = [1,0,1,1], k = 1
    Output: true
    Example 3:

    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false

*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */


 /**
 *
 * O(n) time
 * O(n) space
 *
 * 5m
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i]) <= k) return true;
        }
        map.set(nums[i], i);
    }
    return false;
};


