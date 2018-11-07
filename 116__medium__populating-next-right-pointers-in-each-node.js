/*

Given a binary tree

struct TreeLinkNode {
  TreeLinkNode *left;
  TreeLinkNode *right;
  TreeLinkNode *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Note:

You may only use constant extra space.
Recursive approach is fine, implicit stack space does not count as extra space for this problem.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
Example:

Given the following perfect binary tree,

     1
   /  \
  2    3
 / \  / \
4  5  6  7
After calling your function, the tree should look like:

     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL

*/

/**
 * BFS
 * O(n) time
 * O(n) space
 *
 * 30m
 */
var connect = function(num) {
    if (!num) return;

    let queue = [num];

    while (queue.length > 0) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            node.next = i == len - 1 ? null : queue[0];
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }
};

/**
 * Recursive
 *
 * O(n) time
 * O(1) / O(n) space because n stack size but... nah...
 *
 *         1 -> NULL
 *       /  \
 *      2 -> 3 -> NULL
 *     / \  / \
 *    4  5  6  7
 *   step1. as you can see, after first call, 2 -> 3 -> NULL
 *   step2. root=2,left=4,right=5 then 4->5, 5-> ? (if root 2 has next, next.left=6)
 */
var connect = function(root) {
    if (!root) return;

    if (root.left) root.left.next = root.right;
    if (root.right && root.next) root.right.next = root.next.left;

    connect(root.left);
    connect(root.right);
};

/**
 * Iterative
 *
 * O(n) time
 * O(1) space
 *
 *         1 -> NULL
 *       /  \
 *      2 -> 3 -> NULL
 *     / \  / \
 *    4  5  6  7
 *    Pointer 1 (level_head) traversal down(left) each level head
 *    Pointer 2 for each level, traversal to right (whole level)
 */
var connect = function(root) {
    if (!root) return;

    let level_head = root;

    while (level_head) {
        let curr = level_head; // pointer of this level

        while (curr) {
            if (curr.left) curr.left.next = curr.right;
            if (curr.right && curr.next) curr.right.next = curr.next.left;
            curr = curr.next;
        }

        level_head = level_head.left; // keep moving down the level
    }
};
