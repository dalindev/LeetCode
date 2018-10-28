/*

    create 1000 bucket, use linked list inside, because linked list delete and add are O(1)

    1. Swap

    There is a tricky strategy we can use.
    First, swap the element which we want to remove with the last element in the bucket.
    Then remove the last element. By this way, we successfully remove the element in O(1) time complexity.

    2. Linked List

    Another way to achieve this goal is to use a linked list instead of an array list.
    By this way, we can remove the element in O(1) time complexity without modifying the order in the list.


    The Principle of Built-in Hash Table
    The typical design of built-in hash table is:

    The key value can be any hashable type. And a value which belongs to a hashable type will have a hashcode.
    This code will be used in the mapping function to get the bucket index.
    Each bucket contains an array to store all the values in the same bucket initially.
    If there are too many values in the same bucket, these values will be maintained in a height-balanced binary search tree instead.
    The average time complexity of both insertion and search is still O(1).
    And the time complexity in the worst case is O(logN) for both insertion and search by using height-balanced BST.
    It is a trade-off between insertion and search.

*/

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.map = new Array(1000);
    this.hash = function (key) {
        return key % 1000;
    }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let bucket = this.hash(key);
    this.map[bucket] = this.map[bucket] || [];
    if (!this.map[bucket].includes(key)) this.map[bucket].push(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let bucket = this.hash(key);
    this.map[bucket] = this.map[bucket] || [];
    let index = this.map[bucket].indexOf(key);
    if (index > -1) this.map[bucket].splice(index, 1);
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let bucket = this.hash(key);
    this.map[bucket] = this.map[bucket] || [];
    return this.map[bucket].includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */