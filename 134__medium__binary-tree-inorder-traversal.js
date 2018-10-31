/*

	Given a binary tree, return the inorder traversal of its nodes' values.

	Example:

	Input: [1,null,2,3]
	   1
	    \
	     2
	    /
	   3

	Output: [1,3,2]
	Follow up: Recursive solution is trivial, could you do it iteratively?

*/


/**
 * Recursive
 * O(n) time
 * O(n) space
 *
 * 2m
 */
var inorderTraversal = function(root) {
    let res = [];

    if (!root) return res;

    const inorder = (node) => {
        if (!node) return;

        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }

    inorder(root);
    return res;
};


/**
 * Using Stack
 * O(n) time
 * O(n) space
 *
 * 25m
 */
var inorderTraversal = function(root) {
    if (!root) return [];

    let res = [];
    let st = [];
    let curr = root;

    while (curr || st.length > 0) {
        while (curr) {
            st.push(curr);
            curr = curr.left;
        }
        curr = st.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};
