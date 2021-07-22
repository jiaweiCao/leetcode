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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const queue = [root];
  const result = [];
  while (queue.length !== 0) {
    const curArr = [];

    /** 事先记录当前层需要出栈的个数 */
    const curLength = queue.length;

    /** 当前层的全部出栈，并将下一层级的全部推入栈种等到下次遍历 */
    for (let i = 0; i < curLength; i++) {
      const cur = queue.shift();
      curArr.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }

    result.push(curArr);
  }
  return result;
};
