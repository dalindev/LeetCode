/*

Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.


Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.


Note:

2 <= A.length <= 20000
A.length % 2 == 0
0 <= A[i] <= 1000

*/

/**
 * check even and odd index until both not satisfies the condition then swap them (in place swap)
 * time O(n)
 * space O(1)
 * Runtime: 104 ms, faster than 85.27% of JavaScript
 */
var sortArrayByParityII = function(A) {
  let n = A.length;
  let evenIdx = 0;
  let oddIdx = 1;

  while (evenIdx < n && oddIdx < n) {
    while (evenIdx < n && A[evenIdx] % 2 == 0) {
      evenIdx += 2;
    }
    while (oddIdx < n && A[oddIdx] % 2 != 0) {
      oddIdx += 2;
    }
    if (evenIdx < n && oddIdx < n) {
      [A[evenIdx], A[oddIdx]] = [A[oddIdx], A[evenIdx]];
      evenIdx += 2;
      oddIdx += 2;
    }
  }

  return A;
};
