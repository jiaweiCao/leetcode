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
 * @思路：递归比较两个子节点的树是否相同，这里因为没注意到是镜像对称，所以一直出错，看了答案。
 * 这里 左子树 和 右子树 是镜像对称也就是 p1.left = p2.right
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const leftTreeNode = root.left;
  const rightTreeNode = root.right;

  const dfs = (root1, root2) => {
    if (!root1 && !root2) {
      return true;
    } else if (!root1 || !root2) {
      return false;
    } else if (root1.val !== root2.val) {
      return false;
    } else {
      return dfs(root1.left, root2.right) && dfs(root1.right, root2.left);
    }
  };
  return dfs(leftTreeNode, rightTreeNode);
};
