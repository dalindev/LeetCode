/*

    Given a binary tree, return the preorder traversal of its nodes' values.

    Example:

    Input: [1,null,2,3]
       1
        \
         2
        /
       3

    Output: [1,2,3]
    Follow up: Recursive solution is trivial, could you do it iteratively?

*/

/**
 *
 * Recursive
 *
 * O(n) time
 * O(n) space
 *
 * 3m
 */
var preorderTraversal = function(root) {
  let res = [];
  const preorder = node => {
    if (!node) return;

    res.push(node.val);
    preorder(node.left);
    preorder(node.right);
  };
  preorder(root);
  return res;
};

/**
 *
 * using Stack
 *
 * O(n) time
 * O(n) space
 *
 * 3m
 */
var preorderTraversal = function(root) {
  if (!root) return [];

  let res = [];
  let st = [root];

  while (st.length > 0) {
    let node = st.pop();
    res.push(node.val);
    if (node.right) st.push(node.right);
    if (node.left) st.push(node.left);
  }

  return res;
};
