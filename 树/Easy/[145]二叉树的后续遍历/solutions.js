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
 * @首刷
 */

// 递归
var postorderTraversal = function (root) {
  let result = [];
  const dfs = (root) => {
    if (!root) {
      return;
    }
    dfs(root.left);
    dfs(root.right);
    result.push(root.val);
  };
  dfs(root);
  return result;
};

// 迭代
var postorderTraversal = function (root) {
  let stack = [{ flag: 0, node: root }];
  let res = [];
  while (stack.length > 0) {
    const popItem = stack.pop();
    if (popItem.node.flag === 1) {
      res.push(popItem.node.val);
    } else {
      stack.push({ flag: 1, node: popItem.node });
      if (popItem.node.right) {
        stack.push({ flag: 0, node: popItem.node.right });
      }
      if (popItem.node.left) {
        stack.push({ flag: 0, node: popItem.node.left });
      }
    }
  }
  return res;
};
