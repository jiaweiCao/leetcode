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
 * @param {number} targetSum
 * @return {boolean}
 */

/**
 * 首刷
 * 思路：这里每个节点都需要记录一下当前节点累积的值是多少(及根节点到当前节点的累积值)
 */
var hasPathSum = function (root, targetSum) {
  const dfs = (root, sum) => {
    if (!root) {
      return false;
    }
    if (!root.left && !root.right) {
      return sum === root.val;
    }
    return dfs(root.left, sum - root.val) || dfs(root.right, sum - root.val);
  };
  return dfs(root, targetSum);
};
