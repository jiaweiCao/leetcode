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
var countNodes = function (root) {
  let result = 0;
  const dfs = (root) => {
    if (!root) {
      return;
    }
    result += 1;
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return result;
};
