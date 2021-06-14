/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/**
 * @首刷
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const leftHight = maxDepth(root.left);
    const rightHight = maxDepth(root.right);
    return Math.max(leftHight, rightHight) + 1;
  }
};
