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
 * 首刷选择用深搜，但是其实这是题目的陷阱
 * 1.如果只有左子树则显示左子树
 * 2.如果左边的的 左孙子树有，右孙子树也有，如果右子树在同层级有对应的孙子树，则显示孙子树(右>左)。
 * 故无法用深搜去做，下面的解法是错误的，还是应该使用最稳妥的 层序遍历。
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  const dfs = (root) => {
    result.push(root.val);
    if (root.right) {
      dfs(root.right);
    } else if (!root.right && root.left) {
      dfs(root.left);
    }
  };
  dfs(root);
  return result;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4 },
  },
  right: {
    val: 3,
  },
};

/**
 * 层序遍历
 */
var rightSideView2 = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  let queue = [root];
  while (queue.length !== 0) {
    const curLength = queue.length;
    for (let i = 0; i < curLength; i++) {
      const cur = queue.shift();
      if (i === curLength - 1) {
        result.push(cur.val);
      }
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }
  return result;
};
console.log(rightSideView2(root));
