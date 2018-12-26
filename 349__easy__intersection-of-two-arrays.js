/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/**
 *
 * O(n) time
 * O(n) space
 *
 * 3m
 */
var intersection = function(nums1, nums2) {
  let map = {};
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] !== undefined) {
      res.push(nums2[i]);
      delete map[nums2[i]];
    }
  }
  return res;
};
