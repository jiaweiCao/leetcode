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
var averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  const queue = [root];
  const result = [];
  while (queue.length !== 0) {
    const curLength = queue.length;
    let curSum = 0;
    for (let i = 0; i < curLength; i++) {
      const cur = queue.shift();
      curSum += cur.val;
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    result.push(curSum / curLength);
  }
  return result;
};
