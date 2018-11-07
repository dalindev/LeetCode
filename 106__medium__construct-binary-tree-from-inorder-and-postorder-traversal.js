/*

Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

*/

/**
 *
 * O(n) time (use hashmap for search instead of linear search)
 * O(n) space
 *
 * 20m
 *
 * inorder   : left root right
 * postorder : left right root
 *
 */
var buildTree = function(inorder, postorder) {
    let p = postorder.length - 1;
    let map = {};
    for (let i = 0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }

    const helper = (l, r) => {
        if (l > r) return null;

        let root_val = postorder[p--];
        let root = new TreeNode(root_val);

        let idx = map[root_val];

        root.right = helper(idx + 1, r);
        root.left = helper(l, idx - 1);
        return root;
    };

    return helper(0, p);
};
