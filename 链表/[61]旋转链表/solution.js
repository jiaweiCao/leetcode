/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * 首刷
 * @思路 做一条新的链表，让新的链表首位想接，然后根据老的链表的值在新链表中做对应的旋转
 */

var rotateRight = function (head, k) {
  let cur = head;
  /** 生成新的链表头 */
  let newListHeadNode = new ListNode(0);
  /** 缓存新的链接尾巴（用于以后改变指向） */
  let newListTailNode = null;
  /** 循环现有链表，生成新的链表 */
  let newCur = newListHeadNode;

  /** 记录上一次的新链表的节点，用于链接本次 */
  let preNode = null;
  /** 这里拿到一个新的链表，并且将尾部的next指向头部，并将其储存起来用于之后修改 */
  while (cur) {
    newCur.val = cur.val;
    if (preNode) {
      preNode.next = newCur;
    }
    if (cur.next) {
      newCur.next = new ListNode(0, null);
    } else {
      /** 将尾部next指针指向头部 */
      newCur.next = newListHeadNode;
      newListTailNode = newCur;
    }
    preNode = newCur;
    newCur = newCur.next;
    cur = cur.next;
  }

  let cur2 = head;
  /** 再次循环表，获取值到新的表中 */
  while (cur2) {}

  /** 将尾部的环置空 */
  newListTailNode.next = null;

  return newListHeadNode;
};
