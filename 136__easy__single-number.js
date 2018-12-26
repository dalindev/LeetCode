/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 *
 * O(n) time
 * O(1) space
 *
 * 4m
 */
var singleNumber = function(nums) {
  let res = 0;
  nums.forEach(n => (res ^= n));
  return res;
};
