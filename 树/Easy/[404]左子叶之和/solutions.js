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
var sumOfLeftLeaves = function (root) {
  let result = 0;
  if (!root) {
    return result;
  }
  const dfs = (root, add) => {
    if (!root.left && !root.right) {
      if (add) {
        result += root.val;
      }
      return;
    }
    root.left && dfs(root.left, true);
    root.right && dfs(root.right, false);
  };
  dfs(root, false);
  return result;
};
