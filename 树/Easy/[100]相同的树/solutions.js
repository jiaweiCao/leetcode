/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/**
 * 首刷
 * @思路: 虽然是简单的题，但是看了答案
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  } else if (p.val !== q.val) {
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};
