/**
 * Initialize your data structure here.
 */
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
var MyHashMap = function() {
    this.map = {};
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.map[key] !== undefined ? this.map[key] : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.map[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */