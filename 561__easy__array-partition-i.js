/*

  Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

  Example 1:
  Input: [1,4,3,2]

  Output: 4
  Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
  Note:
  n is a positive integer, which is in the range of [1, 10000].
  All the integers in the array will be in the range of [-10000, 10000].

*/

/**
 * O(nlogn) time
 * O(n) space if merge sort, O(1) if quick sort.
 * ALSO NOTE: if use counting sort, time and space will be O(n+k) where k is the range of input
 * Runtime: 120 ms, faster than 97.91% of JavaScript
 */
var arrayPairSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < nums.length; i += 2) {
    res += nums[i];
  }
  return res;
};

/**
 * Use bucket sort
 * time O(n)
 * space O(n)
 * Runtime: 76 ms, faster than 100.00%
 */
var arrayPairSum = function(nums) {
  let arr = new Array(20001).fill(0); // num range of [-10000, 10000]
  let base = 10000;

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i] + base]++;
  }

  let sum = 0;
  let adding = true;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] > 0) {
      if (adding) sum += i - base;
      adding = !adding;
      arr[i]--;
    }
  }
  return sum;
};
