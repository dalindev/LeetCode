/**
 *
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

 */

/**
 * Because we know majority element is more than 50%, it will always win the count
 * O(n) time
 * O(1) space
 *
 * 10m
 *
 * Runtime: 60 ms, faster than 98.78%
 * Memory Usage: 37.1 MB, less than 97.09%
 *
 */
var majorityElement = function(nums) {
  let count = 1;
  let curr_num = nums[0];

  for (let i = 1; i < nums.length; i++) {
      if (curr_num == nums[i]) count++;
      else count--;

      if (count === 0) {
          count = 1;
          curr_num = nums[i];
      }
  }
  return curr_num;
};

/**
 * Use hashmap, this is slower than 1st one and using O(n) space
 *
 * O(n) time
 * O(n) space
 *
 * 10m
 */
var majorityElement = function(nums) {
  let map = {};
  let n = nums.length;
  let half = ~~(n/2);

  for (let i = 0; i < n; i++) {
      let num = nums[i];

      map[num] = (map[num] || 0) + 1;
      if (map[num] > half ) {
          return num;
      }
  }
  return false;
};