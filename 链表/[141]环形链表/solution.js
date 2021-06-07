/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/**
 * 首刷
 * @思路 快慢指针，让一个指针先走一步，两个指针再同时走，如果相遇时不是tail,则 存在环
 */

var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let fastPointer = head;
  let slowPointer = head;
  let diff = 0;
  let result = false;
  while (fastPointer && fastPointer.next) {
    if (diff < 1) {
      diff += 1;
      fastPointer = fastPointer.next;
    } else {
      fastPointer = fastPointer.next.next;
      slowPointer = slowPointer.next;
    }
    /** 如果两者相等，而又不是最后一个则有环 */
    if (fastPointer === slowPointer) {
      result = true;
      break;
    }
  }
  return result;
};
