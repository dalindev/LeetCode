/*

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

*/

/**
 *
 * O(n^2) time (not ordered so indexOf could be O(n))
 * O(n) space
 *
 * 30m ... ...
 */
var buildTree = function(preorder, inorder) {
    let p = 0;

    const helper = (l, r) => {
        if (l > r) return null;

        let root_val = preorder[p++];
        let root = new TreeNode(root_val);

        let idx = inorder.indexOf(root_val);

        // recursion
        root.left = helper(l, idx - 1);
        root.right = helper(idx + 1, r);
        return root;
    };

    return helper(0, inorder.length - 1);
};

/**
 *
 * O(n) time, use hashmap to find index therefore O(n)
 * O(n) space
 *
 * 30m ... ...
 */
var buildTree = function(preorder, inorder) {
    let p = 0;
    let mp = {};
    for (let i = 0; i < inorder.length; i++) {
        mp[inorder[i]] = i;
    }

    const helper = (l, r) => {
        if (l > r) return null;

        let root_val = preorder[p++];
        let root = new TreeNode(root_val);

        let idx = mp[root_val];

        // recursion
        root.left = helper(l, idx - 1);
        root.right = helper(idx + 1, r);
        return root;
    };

    return helper(0, inorder.length - 1);
};
