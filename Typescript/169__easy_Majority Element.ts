/*

169. Majority Element
Easy
17.3K
514
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?

*/
function majorityElement(nums: number[]): number {
  // [3,2,3]
  //  ^
  let count = 0
  let candidate: number | null = null
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) candidate = nums[i]
    count += candidate === nums[i] ? 1 : -1
  }
  return candidate ?? 0
}
