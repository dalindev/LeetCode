/*

    Given a binary tree, return the postorder traversal of its nodes' values.

    Example:

    Input: [1,null,2,3]
       1
        \
         2
        /
       3

    Output: [3,2,1]
    Follow up: Recursive solution is trivial, could you do it iteratively?

*/


/**
 * Recursive
 * O(n) time
 * O(n) space
 *
 * 3m
 */
var postorderTraversal = function(root) {
    if (!root) return [];

    let res = [];
    const postorder = (node) => {
        if (!node) return;

        postorder(node.left);
        postorder(node.right);
        res.push(node.val);
    }
    postorder(root);
    return res;
};


/**
 * Using Stack
 * O(n) time
 * O(n) space
 *
 * 15m
 */
 var postorderTraversal = function(root) {
    let res = [];
    let st = [];

    if (!root) return res;
    st.push(root);
    while (st.length > 0) {
        let node = st.pop();
        res.unshift(node.val);
        if (node.left) st.push(node.left);
        if (node.right) st.push(node.right);
    }
    return res;
};

/**
 * Using Stack
 * O(n) time
 * O(n) space
 *
 * 15m
 */
var postorderTraversal = function(root) {
    let res = [];
    let st = [];

    if (!root) return res;
    st.push(root);
    while (st.length > 0) {
        let node = st.pop();
        res.push(node.val);
        if (node.left) st.push(node.left);
        if (node.right) st.push(node.right);
    }
    return res.reverse();
};