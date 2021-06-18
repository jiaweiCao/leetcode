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
 * @return {number[]}
 */

/**
 * 首刷
 * 思路：根据二叉搜索树的性质，应该不用去存一个map
 */
var findMode = function (root) {
  let res = 0;
  const dfs = (root) => {
    if (root.left) {
    }
    if (root.right) {
    }
    dfs(root.left);
    dfs(root.right);
  };
};
