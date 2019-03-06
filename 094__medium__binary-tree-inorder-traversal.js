/**

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
 *
 * O(n) time
 * O(n) space
 *
 * 10m
 */
var inorderTraversal = function(root) {
  if (!root || root.length == 0) return [];

  let res = [];
  let stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
      while (curr) {
          stack.push(curr);
          curr = curr.left;
      }
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
  }
  return res;
};