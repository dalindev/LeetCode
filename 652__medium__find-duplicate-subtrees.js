/*

Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with same node values.

Example 1:

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:

      2
     /
    4
and

    4
Therefore, you need to return above trees' root in the form of a list.

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const map = new Map();
    const res = [];
    preOrder(root);
    return res;

    function preOrder(root) {
        if (root === null) return '#';

        let key = root.val + '|' + preOrder(root.left) + '|' + preOrder(root.right);
        map.set(key, (map.get(key) || 0) + 1 );

        if (map.get(key) === 2) {
            res.push(root);
        }

        return key;
    }
};
/**
 *
 * O(n) time
 * O(n) space
 *
 * 30m
 */


