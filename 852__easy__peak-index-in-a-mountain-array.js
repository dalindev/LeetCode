/**

Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

Example 1:

Input: [0,1,0]
Output: 1
Example 2:

Input: [0,2,1,0]
Output: 1
Note:

3 <= A.length <= 10000
0 <= A[i] <= 10^6
A is a mountain, as defined above.

 */

/**
 * Binary search
 * O(n) time
 * O(1) space
 *
 * 20m
 */
var peakIndexInMountainArray = function(A) {
  let left = 0;
  let right = A.length - 1;
  let curr = ~~(A.length / 2);

  while (left < right) {
    if (A[curr - 1] < A[curr] && A[curr] > A[curr + 1]) {
      // low < high > low, peak found!
      return curr;
    } else if (A[curr - 1] < A[curr] && A[curr] < A[curr + 1]) {
      // ex: 5 - 6 - 7, up-trend so peak at right hand side
      left = curr;
      curr = ~~((left + right) / 2);
    } else {
      right = curr;
      curr = ~~((left + right) / 2);
    }
  }
};
