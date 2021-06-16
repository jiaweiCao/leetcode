/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

/**
 * 首刷
 *
 */
var mergeTrees = function (root1, root2) {
  if (root1 && root2) {
    const root = new TreeNode(root1.val + root2.val);
    root.left = mergeTrees(root1.left, root2.left);
    root.right = mergeTrees(root1.right, root2.right);
    return root;
  } else if (!root1 && root2) {
    const root = new TreeNode(root2.val);
    root.left = mergeTrees(null, root2.left);
    root.right = mergeTrees(null, root2.right);
    return root;
  } else if (root1 && !root2) {
    const root = new TreeNode(root1.val);
    root.left = mergeTrees(root1.left, null);
    root.right = mergeTrees(root1.right, null);
    return root;
  } else {
    return null;
  }
};
