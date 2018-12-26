/*

    Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

    For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

        1
       / \
      2   2
     / \ / \
    3  4 4  3
    But the following [1,2,2,null,3,null,3] is not:
        1
       / \
      2   2
       \   \
       3    3

    Note:
    Bonus points if you could solve it both recursively and iteratively.

*/

/**
 * recursively
 *
 * O(n) time (traverse the entire input tree once)
 * O(n) space (worst) The number of recursive calls is bound by the height of the tree.
 *      In the worst case, the tree is linear and the height is in O(n).
 * 15m
 */
var isSymmetric = function(root) {
  if (!root) return true;
  const isMirr = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b || a.val !== b.val) return false;
    return isMirr(a.left, b.right) && isMirr(a.right, b.left);
  };
  return isMirr(root.left, root.right);
};

/**
 * Iterative
 *
 * O(n) time (traverse the entire input tree once)
 * O(n) space (worst) queue
 *      In the worst case, we have to insert O(n) nodes in the queue
 * 15m
 */
var isSymmetric = function(root) {
  if (!root) return true;

  let queue = [root.left, root.right];
  while (queue.length > 0) {
    let t1 = queue.shift();
    let t2 = queue.shift();

    if (!t1 && !t2) continue;
    if (!t1 || !t2 || t1.val !== t2.val) return false;

    queue.push(t1.left);
    queue.push(t2.right);
    queue.push(t1.right);
    queue.push(t2.left);
  }
  return true;
};
