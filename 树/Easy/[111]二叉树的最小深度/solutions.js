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
 * @return {number}
 */

const rt = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
};

/**
 * 首刷
 * 思路：bfs,扫描，如果发现没有子节点，则当前层为最小深度,这里需要创建一种队列数据结构，包含深度
 * 需要注意，首先扫描到叶子节点则直接返回当前深度，叶子节点为没有左右子节点的节点
 */
function QueueNode(node, depth) {
  this.node = node;
  this.depth = depth;
}

var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const rootNode = new QueueNode(root, 1);
  let stack = [rootNode];
  while (stack.length > 0) {
    const popItem = stack.shift();
    if (popItem.node.left) {
      stack.push(new QueueNode(popItem.node.left, popItem.depth + 1));
    }
    if (popItem.node.right) {
      stack.push(new QueueNode(popItem.node.right, popItem.depth + 1));
    }
    if (!popItem.node.left && !popItem.node.right) {
      console.log(popItem);
      return popItem.depth;
    }
  }
};

console.log(minDepth(rt));
