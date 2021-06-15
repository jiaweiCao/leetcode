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
 * @return {TreeNode}
 */

/**
 * 首刷
 * @思路： 左子树节点变成右子树节点 (从顶至下)
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  const left = root.left;
  root.left = root.right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

/**
 * 二刷：使用迭代法（自己维护一个栈）
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  let stack = [root];

  while (stack.length > 0) {
    const popItem = stack.pop();
    const left = popItem.left;
    const right = popItem.right;
    popItem.left = right;
    popItem.right = left;
    if (right) {
      stack.push(right);
    }
    if (left) {
      stack.push(left);
    }
  }
  return root;
};
