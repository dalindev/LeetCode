/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 *
 * O(n) time
 * O(1) space
 *
 * 5m
 */
var moveZeroes = function(nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      idx++;
    }
    while (nums[idx] !== 0 && idx < i) {
      idx++;
    }
  }
};
