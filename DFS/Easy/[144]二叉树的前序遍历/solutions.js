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
 */
// 递归
var preorderTraversal = function (root) {
  let res = [];
  const dfs = (root) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return res;
};

// 迭代
var preorderTraversal = function (root) {
  let res = [];
  let stack = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      res.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    const tem = stack.pop();
    cur = tem.right;
  }
  return res;
};
