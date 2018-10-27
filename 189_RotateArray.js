/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * Using Reverse
 * O(n) time
 * O(1) space
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    revs(nums, 0, nums.length-1);
    revs(nums, 0, k-1);
    revs(nums,k, nums.length-1);
    
    function revs (nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
};


/**
 * pop + unshift
 * O(k) time ?
 * O(n) space ?
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    for (let i = 1; i <= k; i++) {
        nums.unshift(nums.pop());
    }
};


/**
 * copy array...
 *
 * O(n) time
 * O(n) space
 */
var rotate = function(nums, k) {
    let n = nums.length;
    let res = new Array(n);
    
    for (let i = 0; i < n; i++) {
        res[i] = nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        nums[(i+k)%n] = res[i];
    }
};
