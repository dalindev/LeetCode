/*

    Given a binary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7
    return its depth = 3.

*/

/**
 * Top-Down (DFS traversal?)
 * O(n) time (we visit each node exactly once)
 * O(log(n)) space
 *
 * 20m
 */
var maxDepth = function(root) {
  if (!root) return 0;

  let max = 1;
  topDown(root, max, 0);
  return max;

  function topDown(node, depth) {
    if (!node) return;

    if (!node.left && !node.right) {
      max = Math.max(max, depth);
    }

    topDown(node.left, depth + 1);
    topDown(node.right, depth + 1);
  }
};

/**
 * Bottom-Up (DFS Divide and Conquer)
 * O(n) time (we visit each node exactly once)
 * O(log(n)) space (worst O(n)) in the worst case, the tree is completely unbalanced)
 *
 * 10m
 */
var maxDepth = function(root) {
  if (!root) return 0;

  let maxLeft = maxDepth(root.left);
  let maxRight = maxDepth(root.right);

  return 1 + Math.max(maxLeft, maxRight);
};

/**
 * iteratively using Queue (BFS)
 * O(n) time
 * O(n) space (max size of queue is the height max width...)
 *
 * 15m
 */
var maxDepth = function(root) {
  let res = 0;
  let queue = [];
  if (!root) return res;

  queue.push(root);
  while (queue.length > 0) {
    const q = queue.length;
    for (let i = 0; i < q; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res++;
  }
  return res;
};
