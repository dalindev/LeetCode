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
Example:

Given the following binary tree,

     1
   /  \
  2    3
 / \    \
4   5    7
After calling your function, the tree should look like:

     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \    \
4-> 5 -> 7 -> NULL

*/

/**
 * too long...
 * O(n) time
 * O(1) space
 *
 * 30m
 */
var connect = function(root) {
  if (!root) return;

  let level_head = root;

  while (level_head) {
    let curr = level_head; // pointer of this level

    while (curr) {
      // left ?
      if (curr.left && curr.right) curr.left.next = curr.right;
      else if (curr.left && curr.next) {
        let left = curr.left;
        let next = curr.next;
        while (next) {
          if (next.left) {
            left.next = next.left;
            break;
          }
          if (next.right) {
            left.next = next.right;
            break;
          }
          next = next.next;
        }
      }
      // right ?
      if (curr.right && curr.next) {
        let right = curr.right;
        let next = curr.next;
        while (next) {
          if (next.left) {
            right.next = next.left;
            break;
          }
          if (next.right) {
            right.next = next.right;
            break;
          }
          next = next.next;
        }
      }
      curr = curr.next;
    }

    // keep moving down the level
    while (level_head) {
      if (level_head.left) {
        level_head = level_head.left;
        break;
      }
      if (level_head.right) {
        level_head = level_head.right;
        break;
      }
      level_head = level_head.next;
    }
  }
};

/**
 * shorter but still ... hmm
 * O(n) time
 * O(1) space
 *
 * 30m
 */
var connect = function(root) {
  if (!root) return;

  let level_head = root;

  while (level_head) {
    let curr = level_head; // pointer of this level
    let next_head = null;

    while (curr) {
      // left
      if (curr.left) {
        if (!next_head) next_head = curr.left;

        if (curr.right) curr.left.next = curr.right;
        else {
          let next = curr.next;
          while (next) {
            if (next.left || next.right) {
              curr.left.next = next.left || next.right;
              break;
            }
            next = next.next;
          }
        }
      }
      // right
      if (curr.right) {
        if (!next_head) next_head = curr.right;

        let next = curr.next;
        while (next) {
          if (next.left || next.right) {
            curr.right.next = next.left || next.right;
            break;
          }
          next = next.next;
        }
      }
      curr = curr.next;
    }

    // keep moving down the level
    level_head = next_head;
  }
};
