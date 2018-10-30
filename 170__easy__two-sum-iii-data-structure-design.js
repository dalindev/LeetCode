/*

	Design and implement a TwoSum class. It should support the following operations: add and find.

	add - Add the number to an internal data structure.
	find - Find if there exists any pair of numbers which sum is equal to the value.

	Example 1:

	add(1); add(3); add(5);
	find(4) -> true
	find(7) -> false
	Example 2:

	add(3); add(1); add(2);
	find(3) -> true
	find(6) -> false

*/

/**
 * use hashmap for add, use loop for find
 * O(1) for add
 * O(n) for find
 * O(n) space
 *
 * 6m
 *
 * I don't think you should store all combinations here
 * the space you need is n^2 and add become O(n) even though your find become O(1)
 * this is still worse than the 1st solution, ex:
 * O(n) add
 * O(1) find,
 * O(n^2) space
 *
 */

 /**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.hm = new Map();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.hm.set(number, (this.hm.get(number) || 0) + 1);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let item of this.hm) {
        let target = value - item[0];
        if (this.hm.has(target)) {
            if (target !== item[0] || this.hm.get(target) > 1) return true;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */


