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
 * @return {boolean}
 */
/**
 * 首刷
 * 思路： 先求高，然后递归比较各个左右子树高度
 */
const hight = (root) => {
  if (!root) {
    return 0;
  }
  return Math.max(hight(root.left), hight(root.right)) + 1;
};
var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(hight(root.left) - hight(root.right)) <= 1
  );
};
