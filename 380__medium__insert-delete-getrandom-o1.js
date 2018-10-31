/*

	Design a data structure that supports all following operations in average O(1) time.

	1. insert(val): Inserts an item val to the set if not already present.
	2. remove(val): Removes an item val from the set if present.
	3. getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

	Example:

	// Init an empty set.
	RandomizedSet randomSet = new RandomizedSet();

	// Inserts 1 to the set. Returns true as 1 was inserted successfully.
	randomSet.insert(1);

	// Returns false as 2 does not exist in the set.
	randomSet.remove(2);

	// Inserts 2 to the set, returns true. Set now contains [1,2].
	randomSet.insert(2);

	// getRandom should return either 1 or 2 randomly.
	randomSet.getRandom();

	// Removes 1 from the set, returns true. Set now contains [2].
	randomSet.remove(1);

	// 2 was already in the set, so return false.
	randomSet.insert(2);

	// Since 2 is the only number in the set, getRandom always return 2.
	randomSet.getRandom();

*/

/**
 *
 * O(1) time
 * O(n) space
 *
 * 25m
 */

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map();
    this.arr = new Array();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;

    this.arr.push(val);
    this.map.set(val, this.arr.length-1);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;

    let lastIdx = this.arr.length-1;
    let lastVal = this.arr[lastIdx];
    let delIdx = this.map.get(val);
    if (delIdx !== lastIdx) {
        this.arr[delIdx] = lastVal;
        this.map.set(lastVal, delIdx);
    }
    this.map.delete(val);
    this.arr.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[~~(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

