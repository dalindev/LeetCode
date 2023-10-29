/*

189. Rotate Array
Medium
16.5K
1.8K
Companies
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
Accepted
1.8M
Submissions
4.5M
Acceptance Rate
39.9%
*/

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  //      [1,2,3,4,5,6,7]
  //              [5,6,7,1,2,3,4]
  //[5,6,7,1,2,3,4]
  if (nums.length === 0 || k % nums.length === 0) return

  k = k % nums.length // normalize so it is less than nums length
  let count = 0
  for (let startIdx = 0; count < nums.length; startIdx++) {
    let currIdx = startIdx
    let numHolder = nums[startIdx]
    do {
      let nextIdx = (currIdx + k) % nums.length
      let temp = nums[nextIdx]
      nums[nextIdx] = numHolder
      numHolder = temp

      count++
      currIdx = nextIdx
    } while (startIdx !== currIdx)
  }
}
