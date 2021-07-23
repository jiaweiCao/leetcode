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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return "";
  }
  const result = [];
  const backTracking = (node, path) => {
    if (!node.left && !node.right) {
      path += node.val;
      result.push(path);
      return;
    }
    path += `${node.val}->`;
    node.left && backTracking(node.left, path);
    node.right && backTracking(node.right, path);
  };
  backTracking(root, "");
  return result;
};
