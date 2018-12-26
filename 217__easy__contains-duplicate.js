/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 *
 * O(n) time
 * O(n) space
 *
 * 2m
 */
var containsDuplicate = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], 1);
  }
  return false;
};

/**
 *
 * O(n) time
 * O(1) space
 *
 * 1m
 */
var containsDuplicate = function(nums) {
  let st = new Set(nums);
  return st.size !== nums.length;
};

/**
 *
 * O(nlogn) time (depend on the data, could also use radix sort which is n+k)
 * O(1) space (quick sort)
 *
 * 3m
 *
 */
var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) return true;
  }
  return false;
};
