/**
 * @param
 * @return
 */

/**
 *
 * O(n) time
 * O(n) space
 *
 * 60m ...
 */
var buildTree = function(preorder, inorder) {
    const helper = (pre, inr) => {
        if (inr.length == 0) return null;
        // 1st at pre is root (root left right)
        let root_val = pre.shift();
        let root = new TreeNode(root_val);

        // find root index and split inorder
        // as left subtree / right subtree
        let idx = inr.indexOf(root_val);

        // recursion
        root.left = helper(pre, inr.slice(0, idx));
        root.right = helper(pre, inr.slice(idx + 1));
        return root;
    };

    return helper(preorder, inorder);
};

/**
 *
 * O(n) time
 * O(1) space
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
