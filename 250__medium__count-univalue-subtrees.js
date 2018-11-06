/*

Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

Example :

Input:  root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

Output: 4

*/

/**
 *
 * O(n) time
 * O(n) space
 *
 * 20m
 */
var countUnivalSubtrees = function(root) {
    let count = 0;
    const postOrder = node => {
        if (node == null) return true;

        let left = postOrder(node.left);
        let right = postOrder(node.right);

        if (
            left &&
            right &&
            (!node.left || node.left.val == node.val) &&
            (!node.right || node.right.val == node.val)
        ) {
            count += 1;
            return true;
        }
        return false;
    };

    postOrder(root);
    return count;
};
