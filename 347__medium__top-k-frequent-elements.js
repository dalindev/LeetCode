/*

    Given a non-empty array of integers, return the k most frequent elements.

    Example 1:

    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
    Example 2:

    Input: nums = [1], k = 1
    Output: [1]
    Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let res = [];
  if (!nums || nums.length === 0) return res;

  // Count frequency of each element use hashmap, O(n) time O(n) space
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  // new bucket size of n+1, O(n+1) time O(n+1) space
  let buckets = new Array(nums.length + 1).fill(null).map(() => []);

  // push element count into bucket, count will no bigger than n+1 so every element could fit
  // O(n) time
  for (let [num, count] of map) {
    buckets[count].push(num);
  }

  // O(k) time, find k element from bucket (end to start so we get top k)
  for (let i = buckets.length - 1; i >= 0; i--) {
    for (let j = 0; j < buckets[i].length; j++) {
      res.push(buckets[i][j]);
      if (res.length === k) return res;
    }
  }
};
/*

    Bucket sort
    O(n) time
    O(n) space

*/
