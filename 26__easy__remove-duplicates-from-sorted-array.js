/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 *
 * O(n) time
 * O(1) space
 *
 * 10m
 */
var removeDuplicates = function(nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[left]) {
      left++;
      nums[left] = nums[i];
    }
  }
  return left + 1;
};
