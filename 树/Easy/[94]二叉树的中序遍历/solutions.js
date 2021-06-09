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
 * @思路 递归
 */
var inorderTraversal = function (root) {
  let result = [];
  const inorder = (rootNode) => {
    if (!rootNode) {
      return;
    }
    inorder(rootNode.left);
    result.push(rootNode.val);
    inorder(rootNode.right);
  };
  inorder(root);
  return result;
};

/**
 * @2刷
 * @思路 迭代实现，手动维护一个stack
 */
var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  // root为null, stack 清栈的时候，退出循环
  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop;
    result.push(root.val);
    root = root.right;
  }
};
