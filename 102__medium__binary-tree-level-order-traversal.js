/*

    Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

    For example:
    Given binary tree [3,9,20,null,null,15,7],
        3
       / \
      9  20
        /  \
       15   7
    return its level order traversal as:
    [
      [3],
      [9,20],
      [15,7]
    ]

    Follow up: Recursive solution is trivial, could you do it iteratively?

*/

/**
 * Recursive
 * O(n) time
 * O(1) space
 *
 * 25m
 */
var levelOrder = function(root) {
  let res = [];
  if (!root) return res;
  const preorder = (node, level = 0) => {
    if (!node) return;

    if (level > res.length - 1) res.push([]);

    res[level].push(node.val);
    preorder(node.left, level + 1);
    preorder(node.right, level + 1);
  };
  preorder(root);
  return res;
};

/**
 * Iteratively using queue
 * O(n) time
 * O(n) space (max size of queue is the level max node)
 *
 * 10m
 */
var levelOrder = function(root) {
  let res = [];
  let queue = [];

  if (!root) return res;
  queue.push(root);

  while (queue.length > 0) {
    let lvlen = queue.length;
    let curr = [];
    for (let i = 0; i < lvlen; i++) {
      let node = queue.shift();
      curr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(curr);
  }

  return res;
};
