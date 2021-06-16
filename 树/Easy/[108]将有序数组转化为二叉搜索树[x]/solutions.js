/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 首刷
 */
var sortedArrayToBST = function (nums) {
  const dfs = (left, right) => {
    let root = null;
    if (left <= right) {
      const i = (left + right) >> 1;
      root = new TreeNode(nums[i]);
      root.left = dfs(left, i - 1);
      root.right = dfs(i + 1, right);
    }
    return root;
  };
  return dfs(0, nums.length - 1);
};
// >> 带符号右移， >>> 右移， <<左移
