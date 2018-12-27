/*

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

 */

/**
 *
 * O(n) time for n is the length of x/y
 * O(n) space
 *
 * Runtime: 52 ms, faster than 100.00%
 */
var hammingDistance = function(x, y) {
  let bin_diff = Number(x ^ y).toString(2);
  let count = 0;

  for (let ch of bin_diff) {
    if (ch == "1") count += 1;
  }

  return count;
};
