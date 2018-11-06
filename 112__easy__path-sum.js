/*

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

*/

/**
 *
 * O(n) time
 * O(n) space
 *
 * 12m
 */
var hasPathSum = function(root, sum) {
    let found = false;

    const topDown = (node, curr = 0) => {
        if (found || !node) return;
        curr += node.val;

        if (node.left == null && node.right == null) {
            found = curr == sum ? true : false;
            return;
        }
        if (node.left !== null) topDown(node.left, curr);
        if (node.right !== null) topDown(node.right, curr);
    };

    topDown(root);

    return found;
};

/*
    TODO - use iterative, queue + while loop
*/
